const Banner = ({handleCoin}) => {
    return (
        <div className="w-10/12 mx-auto mt-6 text-center py-6 rounded-2xl bg-black space-y-5" style={{ backgroundImage: "url('assets/bg-shadow.png')" }}>
            <img className="mx-auto" src="assets/banner-main.png" alt="" />

            <h1 className="text-3xl font-semibold text-white">
                Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-gray-500 font-semibold">
                Beyond Boundaries Beyond Limits
            </p>
            <div className="border-2 border-lime-500  inline-block rounded-xl">
                <button onClick={handleCoin} className="m-1 px-6 py-3 text-black font-bold bg-lime-500 rounded-xl">
                    Claim Free Credit
                </button>
            </div>

        </div>

    );
};

export default Banner;