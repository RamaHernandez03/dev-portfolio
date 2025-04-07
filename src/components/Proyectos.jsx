import React, { useState, useRef, useEffect, useCallback } from 'react';
import Servicios from './Cards.jsx';
import github from '../assets/github.webp';
import escribania from '../assets/escribania.png';
import abogada from '../assets/abogada.png';
import charizard from '../assets/Charizard.jpeg';
import matesmood from '../assets/matesmood.png';

const Projects = () => {
  const serviciosData = [
    {
      image: escribania,
      title: 'Escribania La Riva',
      description: 'Desarrolle su web desde 0 utilizando React/NodeJs (2025)',
      link: 'https://escribanialariva.vercel.app/',
    },
    {
      image: abogada,
      title: 'Gisela Rios Abogada',
      description: 'Desarrolle la web utilizando Wordpress + Enflod Theme (PHP,HTML,CSS,JS) (2024)',
      link: 'https://giselariosabogada.com/',
    },
    {
      image: charizard,
      title: 'Pokemon Pygame',
      description: 'Juego desarrollado sin interfaz grafica con la libreria de Python Pygame (2023)',
      link: 'https://github.com/RamaHernandez03/pokemon.py.git',
    },
    {
      image: matesmood,
      title: 'Matesmood',
      description: 'Web desarrollada desde 0 con puro HTML, CSS Y JS (2022)',
      link: 'https://matesmood.netlify.app/',
    },
    {
      image: github,
      title: 'Publicidad',
      description: 'Campañas segmentadas en Meta Ads e Instagram.',
      link: 'publicidad3',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const gap = 16;

  const updateLayout = useCallback(() => {
    const screenWidth = window.innerWidth;
    const newVisibleCards = screenWidth < 768 ? 1 : 3;
    setVisibleCards(newVisibleCards);

    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newCardWidth =
        screenWidth < 768
          ? containerWidth
          : (containerWidth - gap * (newVisibleCards - 1)) / newVisibleCards;
      setCardWidth(newCardWidth);
    }
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [updateLayout]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, serviciosData.length - visibleCards)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-gray-900 p-10 min-h-screen flex flex-col items-center justify-center">
      <h2 className="font-semibold text-center pb-[10px] border-b-4 border-orange-500 text-[40px] sm:text-[30px] md:pb-5 sm:pb-[5px] md:text-[40px] text-white mb-[40px] sm:mb-[40px] md:mb-[80px]">
        Servicios
      </h2>

      <div className="w-full max-w-7xl relative flex items-center justify-center px-6 sm:px-10">
        {/* Botón Izquierda */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute -left-8 z-10 bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600 transition ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          ◀
        </button>

        {/* Contenedor Carrusel */}
        <div
          className="overflow-hidden w-full py-4"
          ref={containerRef}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
              width: `${(cardWidth + gap) * serviciosData.length}px`,
              justifyContent: visibleCards === 1 ? 'center' : 'flex-start',
            }}
          >
            {serviciosData.map((servicio, index) => (
              <div key={index} style={{ width: `${cardWidth}px`, flexShrink: 0 }}>
                <Servicios {...servicio} />
              </div>
            ))}
          </div>
        </div>

        {/* Botón Derecha */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= serviciosData.length - visibleCards}
          className={`absolute -right-8 z-10 bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600 transition ${
            currentIndex >= serviciosData.length - visibleCards
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Projects;
