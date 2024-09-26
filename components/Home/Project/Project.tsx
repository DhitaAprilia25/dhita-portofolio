import React from 'react';

const projects = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'A personal portfolio website to show work and skills.',
        image: '/images/Rido.png', // Replace with your project screenshot
    },
    {
        id: 2,
        title: 'Wedding Photography Web',
        description: 'A beautifully designed webbsite showcasing wedding photography services.',
        image: '/images/lilacita.png', // Corrected: Added closing quote
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'A personal portfolio website to show work and skills.',
        image: '/images/new.png', // Replace with your project screenshot
    },
    {
        id: 4,
        title: 'Laundry Services',
        description: 'An web for easy laundry booking and management.',
        image: '/images/AP.png', // Replace with your project screenshot
    },
];

const Projects = () => {
    return (
        <div id="Project" className="w-full pt-[8vh] md:pt-[10vh] lg:pt-[12vh] bg-[#0f0715] flex flex-col justify-center items-center text-white">
            <div className="w-4/5 md:w-3/4 lg:w-2/3 mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 p-5 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-md mb-2"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                            <p className="text-sm md:text-base text-gray-300 text-center">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
