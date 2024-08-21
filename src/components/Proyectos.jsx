import React from 'react';
import matesMood from '../assets/matesmood.png';
import python from '../assets/python.png';
import js from '../assets/js.png';

const ProjectCard = ({ image, title, description, link }) => {
    return (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-gray-800 rounded-lg p-6 shadow-[0_2px_2px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_16px_rgba(0,0,0,0.2)] hover:translate-y-[-15px] transition-transform transition-shadow duration-500 w-full"
      >
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt={title}
            className="w-[300px] h-[300px] object-cover rounded-lg"
          />
        </div>
        <h3 className="text-white text-xl text-center font-semibold mt-6 mb-4">{title}</h3>
        <p className="text-gray-400 text-center">{description}</p>
      </a>
    );
};
  

const Projects = () => {
    const projectData = [
      {
        image: matesMood,
        title: 'Web Matesmood',
        description: 'Proyecto Freelance para una Empresa de venta de mates y materas.',
        link: 'https://matesmood.netlify.app/',
      },
      {
        image: python,
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1.',
        link: '#',
      },
      {
        image: js,
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1.',
        link: '#',
      },
    ];

  return (
    <div className="bg-gray-900 p-10 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-20 w-full">
        <h2 id='Proyectos' className="text-white text-[40px] font-bold underline">Proyectos</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
