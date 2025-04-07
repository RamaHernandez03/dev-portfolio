import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import SobreMiImage from '../assets/me.jpeg';

const SobreMi = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1,
  });

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-800 p-4 md:p-8">
      <div ref={ref} className={`transition-transform duration-500 ${inView ? 'animate-slideUp' : 'opacity-0'}`}>
        <div className="flex justify-center items-center">
          <h2 id='SobreMi' className="font-semibold text-center pb-[10px] border-b-4 border-orange-500 text-[40px] sm:text-[30px] md:pb-5 sm:pb-[5px] md:text-[40px] text-white mb-[40px] sm:mb-[40px] md:mb-[80px]">Sobre Mi</h2>
        </div>
        <div className="bg-gray-700 p-10 sm:p-6 md:p-10 md:mb-10 shadow-[0px_12px_16px_rgba(0,0,0,0.2)] rounded-lg flex flex-row md:flex-col items-center md:items-center space-x-4 sm:space-x-6 md:space-x-0 md:space-y-6">
          <div className="flex flex-col items-center">
            <img
              src={SobreMiImage}
              alt="Ramiro Hernandez"
              className="w-[300px] h-[300px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-lg"
            />
            <p className="text-white mt-4 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl font-bold">
              {'<Rama/>'}
            </p>
          </div>
          <div className="text-white text-left md:text-center px-2 sm:px-4 md:px-0">
            {isSmallScreen ? (
              <p className="text-[22px] text-justify mb-2 sm:mb-3 md:mb-4">
                Soy programador <span className='text-orange-500 font-semibold'>Full stack</span> con experiencia en el desarrollo de aplicaciones web, con especial interés en <span className='text-orange-500 font-semibold'>crear soluciones escalables y funcionales.</span> Disfruto enfrentar desafíos técnicos y pensar en cómo resolver problemas de manera práctica y eficiente. Me considero una persona <span className='text-orange-500 font-semibold'>adaptable, proactiva y con buena comunicación</span>, lo que me permite integrarme rapidamente en equipos de trabajo y <span className='text-orange-500 font-semibold'>resolver problemas</span>  de manera eficaz.
              </p>
            ) : (
              <>
                <p className="text-[24px] sm:text-[14px] mb-2 sm:mb-3 md:mb-4">
                Soy programador <span className='text-orange-500 font-semibold'>Full stack</span> con experiencia en el desarrollo de aplicaciones web,
                </p>
                <p className="text-[24px] sm:text-[14px] mb-2 sm:mb-3 md:mb-4">
                con especial interés en <span className='text-orange-500 font-semibold'>crear soluciones escalables y funcionales.</span>
                </p>
                <p className="text-[24px] sm:text-[14px] mb-2 sm:mb-3 md:mb-4">
                Disfruto enfrentar desafíos técnicos y pensar en cómo resolver problemas de manera práctica y eficiente.
                </p>
                <p className="text-[24px] sm:text-[14px] mb-2 sm:mb-3 md:mb-4">
                Me considero una persona <span className='text-orange-500 font-semibold'>adaptable, proactiva y con buena comunicación</span>,
                </p>
                <p className="text-[24px] sm:text-[14px] mb-2 sm:mb-3 md:mb-4">
                lo que me permite integrarme rapidamente en equipos de trabajo y <span className='text-orange-500 font-semibold'>resolver problemas</span> de manera eficaz.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
