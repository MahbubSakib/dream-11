const Header = ({coin}) => {
    return (
        <div className="w-10/12 mx-auto mt-10">
            <div className="flex justify-between">
                <img src="assets/logo.png" alt="" />

                <div className="flex items-center gap-12">
                    <ul className="flex gap-8">
                        <li><a href="">Home</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Teams</a></li>
                        <li><a href="">Schedules</a></li>
                    </ul>

                    <div className="border border-gray-200 rounded-lg px-4 py-2 font-semibold">{coin} Coin <i className="fa-solid fa-coins"></i></div>
                </div>
            </div>
        </div>
    );
};

export default Header;