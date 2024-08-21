import React from 'react';
import matesMood from '../assets/matesmood.png';
import python from '../assets/python.png';
import js from '../assets/js.png';

const ProjectCard = ({ image, title, description }) => {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full">
        <img
          src={image}
          alt={title}
          className="w-[300px] h-[300px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    );
};

const Projects = () => {
    const projectData = [
      {
        image: matesMood,
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1.',
      },
      {
        image: python,
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1.',
      },
      {
        image: js,
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1.',
      },
    ];

  return (
    <div className="bg-gray-900 p-10 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-20 w-full">
        <h2 className="text-white text-3xl font-bold">PROYECTOS:</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-6 w-full max-w-6xl">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
