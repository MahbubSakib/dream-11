const Selected = ({ selected, handleActive, handleRemove }) => {
    return (
        <div className="w-10/12 mx-auto space-y-3 pb-80">
            <div className="">
                <h1 className="text-xl font-bold">Selected Players: ({selected.length}/6)</h1>
            </div>
            {
                selected.map((player, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-3 flex justify-between items-center gap-5">
                        <div className="flex gap-5">
                            <img className="w-15 h-20 object-fill rounded-lg" src={player.image} alt="" />
                            <div>
                                <h6 className="font-semibold">{player.name}</h6>
                                <p><small className="text-gray-500">{player.role}</small></p>
                                <p><small className="text-gray-500">{player.biddingPrice}$</small></p>
                            </div>
                        </div>
                        <button onClick={() => handleRemove(player.playerId)} className="text-red-500"><i className="fa-solid fa-trash-can"></i></button>
                    </div>

                ))
            }

            <div className="border-2 border-yellow-500  inline-block rounded-xl">
                <button onClick={ () => handleActive('active') } className="m-1 px-6 py-3 text-black font-bold bg-yellow-500 rounded-xl">
                    Add More Player
                </button>
            </div>

        </div>
    );
};

export default Selected;