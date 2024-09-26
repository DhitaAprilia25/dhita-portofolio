import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import Link from 'next/link'; // Import the Link component from Next.js
import { BaseInfo } from '@/app/Data/data';
import { FaDownload } from 'react-icons/fa'; // Importing FaDownload icon from react-icons

const Hero = () => {
    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                    {/* Text Content */}
                    <div>
                        {/* Sub-Heading */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
                            I am {BaseInfo.name}
                        </h1>
                        {/* Title */}
                        <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">
                            {BaseInfo.position}
                        </h1>
                        {/* Description */}
                        <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
                            {BaseInfo.description}
                        </p>
                        {/* Button */}
                        <Link href="https://drive.google.com/uc?export=download&id=135bfg2-uT7K7-c--hbzfeV33q393MOHq" target="_blank">
                            <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2">
                                <span>Download CV</span>
                                <FaDownload />
                            </button>
                        </Link>
                    </div>
                    {/* Img Content */}
                    <div className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden">
                        <Image 
                            src={BaseInfo.profilePic} 
                            alt={BaseInfo.name} 
                            width={500} 
                            height={500} 
                            className="object-cover" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;