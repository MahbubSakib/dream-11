import { useEffect, useState } from "react";

const Available = ({handleSelected}) => {
    const [available, setAvailable] = useState([])

    useEffect(() => {
        fetch('./players.json')
            .then(res => res.json())
            .then(data => setAvailable(data))
    }, [])


    return (
        <div className="w-10/12 mx-auto">
            <div className="">
                <h1 className="text-xl font-bold mb-6">Available Players</h1>
            </div>

            <div className="grid grid-cols-3 gap-5 pb-80">
                {available.map(player => (
                    <div key={player.playerId} className="card bg-base-100 border border-gray-200">
                        <figure className="px-10 pt-10">
                            <img
                                src={player.image}
                                className="rounded-xl h-80 object-cover" />
                        </figure>
                        <div className="p-8 space-y-3">
                            <h2 className="card-title"><i className="fa-solid fa-user"></i> {player.name}</h2>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-500"><i className="fa-solid fa-flag"></i> {player.country}</p>
                                <p className="bg-gray-100 rounded-md px-3 py-2">{player.role}</p>
                            </div>
                            <hr />
                            <p className="font-semibold">Rating</p>
                            <div className="flex justify-between">
                                <p className="font-semibold">{player.battingType}</p>
                                <p className="text-gray-500">{player.bowlingType}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">Price: {player.biddingPrice}$</p>
                                <button onClick={ () => handleSelected(player)} className="px-3 py-1 border border-gray-200 rounded-lg">Choose Player</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Available;