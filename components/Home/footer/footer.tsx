import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#240b39] text-white py-6">
            <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <p className="text-sm">© {new Date().getFullYear()} Dhita Aprilia. All rights reserved.</p>
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="https://instagram.com/aprdhitaa_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-200"
                    >
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/DhitaAprilia25"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition duration-200"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
