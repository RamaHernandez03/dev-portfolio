import React, { useState, useRef, useEffect, useCallback } from 'react';
import Servicios from './Cards.jsx';
import github from '../assets/github.webp';
import deudas from '../assets/deudas.png';
import escribania from '../assets/escribania.png';
import abogada from '../assets/GISELA_NUEVO.png';
import scraper from '../assets/scraper.jpeg';
import charizard from '../assets/Charizard.jpeg';
import matesmood from '../assets/matesmood.png';
import cotizamin from '../assets/cotizamin.png';

const Projects = () => {
  const serviciosData = [
    {
      image: escribania,
      title: 'Escribania La Riva',
      description: 'Pagina informativa sobre los servicios de la Escribania La Riva. Desarrolle su web desde 0 utilizando React/NodeJs (2025)',
      link: 'https://www.escribanialariva.com/',
    },
    {
      image: cotizamin,
      title: 'cotizamin',
      description: 'Sistema de gestion de stock para proovedores, recibiendo feedback via IA de sus productos y sus precios. Desarrollada con NextJs, PostgreSQL, N8N (2025).',
      link: 'https://cotizamin.vercel.app/',
    },
    {
      image: abogada,
      title: 'Gisela Rios Abogada',
      description: 'Pagina informativa sobre los servicios de la abogada Gisela Rios. Desarrolle la web utilizando Wordpress + Enflod Theme (PHP,HTML,CSS,JS) (2024)',
      link: 'https://giselariosabogada.com/',
    },
    {
      image: deudas,
      title: 'Soluciona tus deudas',
      description: 'Sistema de busqueda de deudas del usuario, fetcheando datos de la api del BCRA. Utilice HTML, CSS, PHP y JS. Sumado al servicio CheckoutPro de Mercado Pago. (2025)',
      link: 'https://solucionatusdeudas.com.ar/',
    },
    {
      image: scraper,
      title: 'Instagram Bot',
      description: 'Scrapea los seguidos de una cuenta objetivo y los sigue de manera automatizada (2024)',
      link: 'https://github.com/RamaHernandez03/usersBot',
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
      description: 'Pagina informativa sobre los productos del emprendimiento Matesmood. Web desarrollada desde 0 con HTML, CSS Y JS (2022)',
      link: 'https://matesmood.netlify.app/',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const gap = 16;

  const updateLayout = useCallback(() => {
    const screenWidth = window.innerWidth;
    let newVisibleCards;
    
    if (screenWidth < 640) {
      newVisibleCards = 1;
    } else if (screenWidth < 1024) {
      newVisibleCards = 2;
    } else {
      newVisibleCards = 3;
    }
    
    setVisibleCards(newVisibleCards);

    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newCardWidth = (containerWidth - gap * (newVisibleCards - 1)) / newVisibleCards;
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
        Proyectos
      </h2>

      <div className="w-full max-w-7xl relative flex items-center justify-center px-6 sm:px-10">
        {/* Botón Izquierda */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 sm:-left-8 z-10 bg-orange-500 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-orange-600 transition ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          ◀
        </button>

        {/* Contenedor Carrusel */}
        <div
          className="overflow-hidden w-full py-4 mx-8 sm:mx-12"
          ref={containerRef}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
              gap: `${gap}px`,
            }}
          >
            {serviciosData.map((servicio, index) => (
              <div 
                key={index} 
                style={{ 
                  width: `${cardWidth}px`,
                  minWidth: `${cardWidth}px`,
                  flexShrink: 0 
                }}
              >
                <Servicios {...servicio} cardWidth={cardWidth} />
              </div>
            ))}
          </div>
        </div>

        {/* Botón Derecha */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= serviciosData.length - visibleCards}
          className={`absolute right-0 sm:-right-8 z-10 bg-orange-500 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-orange-600 transition ${
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