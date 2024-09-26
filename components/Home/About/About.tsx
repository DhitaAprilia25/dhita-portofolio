import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiBootstrap } from 'react-icons/si';

const About = () => {
    return (
        <div id="about" className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] text-white flex flex-col justify-center">
            <div className="flex flex-col items-center w-4/5 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-sm md:text-base text-gray-300 mb-8 text-center">
                    I am a passionate student pursuing a degree in Information Technology with a strong background in web development and design.
                    I specialize in creating dynamic and responsive user interfaces, ensuring an engaging user experience.
                </p>
                <p className="text-sm md:text-base text-gray-300 mb-8 text-center">
                    With expertise in various technologies, I continuously strive to enhance my skills and stay updated with industry trends.
                    My goal is to create innovative solutions that meet the needs of users and businesses.
                </p>
                <p className="text-sm md:text-base text-gray-300 mb-8 text-center">
                    In my free time, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the community.
                </p>
                {/* Skills Section */}
                <h3 className="text-2xl md:text-3xl font-bold mt-10 mb-4">Skills</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
                    {[
                        { icon: <FaHtml5 />, label: 'HTML' },
                        { icon: <FaCss3Alt />, label: 'CSS' },
                        { icon: <FaReact />, label: 'React' },
                        { icon: <SiNextdotjs />, label: 'Next.js' },
                        { icon: <SiTailwindcss />, label: 'Tailwind' },
                        { icon: <SiBootstrap />, label: 'Bootstrap' },
                    ].map((skill, index) => (
                        <div key={index} className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
                            <div className="text-4xl mb-2">{skill.icon}</div>
                            <span className="text-sm md:text-base">{skill.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
