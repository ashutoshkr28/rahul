'use client';

const ContactPage = () => {
    return (
        <section className="max-w-7xl mx-auto p-6 my-12">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Contact Us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Get in Touch</h3>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Your message..."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                rows="5"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-700 text-white p-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-indigo-700 mb-6">Contact Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
                            </svg>
                            {/* <span className="ml-3 text-gray-700">+91 8434672022</span> */}
                            <a href="tel:+918434672022" className="ml-3 text-gray-700">
                                +91 8434672022
                            </a>

                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 11h18m-7 4h7m-7 4h7m-7 4h7" />
                            </svg>
                            <span className="ml-3 text-gray-700">drrahulkumar333@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4h2v16h-2zm6 4h2v12h-2z" />
                            </svg>
                            <span className="ml-3 text-gray-700">Narayan Dental Clinic Near Babubarahi Petrol Pump, Madhubani (Bihar)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
