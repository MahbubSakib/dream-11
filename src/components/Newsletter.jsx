const Newsletter = () => {
    return (
        <div className="px-16 mx-auto text-center bg-cover rounded-xl"
         style={{ backgroundImage: "url('assets/bg-shadow.png')" }}
         >
            <div className="py-20">
                <h2 className="text-lg font-semibold mb-2">
                    Subscribe to our Newsletter
                </h2>
                <p className="text-gray-500 mb-2">
                    <small>Get the latest updates and news right in your inbox!</small>
                </p>
                <input className="pl-3 py-2 rounded-md border border-gray-400" type="text" placeholder="Enter your email" />

                <button className="ml-6 px-4 py-2 font-semibold rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;