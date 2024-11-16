const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="w-10/12 mx-auto pt-52">
                <div>
                    <img className="mx-auto" src="assets/logo-footer.png" alt="" />
                </div>
                <div className="mt-10 pb-10 flex gap-12 justify-between">
                    <div className="w-1/5">
                        <h6 className="text-white font-semibold">About Us</h6>
                        <p className="text-gray-500">
                            We are a passionate team dedicated to providing the best services to our customers.
                        </p>
                    </div>

                    <div>
                        <h6 className="text-white font-semibold">Quick Links</h6>
                        <ul className="text-gray-500">
                            <li><a href="">Home</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-white font-semibold">Subscribe</h6>
                        <p className="text-gray-500">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <input className="pl-3 py-2 rounded-md border border-gray-400" type="text" placeholder="Enter your email" />
                        <button className="ml-2 px-4 py-2 font-semibold rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <p className="text-gray-500 text-center py-5">@2024 Your Company All Rights Reserved.</p>

        </div>
    );
};

export default Footer;