import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importing necessary icons

const Contact = () => {
    return (
        <div id="contact" className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] flex flex-col justify-center items-center text-white">
            <div className="w-4/5 md:w-3/4 lg:w-2/3 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Me</h2>
                <p className="text-sm md:text-base text-gray-300 mb-6 text-center">
                    I’d love to hear from you! Please fill out the form below to get in touch.
                </p>
                <form className="flex flex-col space-y-4 mb-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={4} // Specify number of rows for the textarea
                        className="p-3 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900"
                    >
                        Send Message
                    </button>
                </form>
                
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://instagram.com/aprdhitaa_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-200" />
                    </a>
                    <a href="mailto:nadaforinumaki@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <FaEnvelope className="text-2xl hover:text-red-500 transition-colors duration-200" />
                    </a>
                    <a href="https://github.com/DhitaAprilia25" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="text-2xl hover:text-gray-400 transition-colors duration-200" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
