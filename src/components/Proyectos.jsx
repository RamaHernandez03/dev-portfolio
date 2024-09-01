import React from 'react';
import matesMood from '../assets/matesmood.png';
import github from '../assets/github.webp';
import { useInView } from 'react-intersection-observer';

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
  const { ref, inView } = useInView({
    triggerOnce: false,  // Cambia triggerOnce a false
    threshold: 0.1,
  });

  const projectData = [
    {
      image: matesMood,
      title: 'Web Matesmood',
      description: 'Proyecto Freelance para una Empresa de venta de mates y materas.',
      link: 'https://matesmood.netlify.app/',
    },
    {
      image: github,
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1.',
      link: '#',
    },
    {
      image: github,
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1.',
      link: '#',
    },
  ];

  return (
    <div className="bg-gray-900 p-10 min-h-screen flex flex-col items-center justify-center">
      <div ref={ref} className={`transition-transform duration-500 ${inView ? 'animate-slideUp' : 'opacity-0'}`}>
        <div className="text-center mb-20 flex justify-center items-centers">
          <h2 id='Proyectos' className="text-white inline-block text-[40px] font-bold pb-[10px] border-b-4 border-orange-500">Proyectos</h2>
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
    </div>
  );
};

export default Projects;
