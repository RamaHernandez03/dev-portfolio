import React from "react";
import { Link } from "react-router-dom";

const Servicios = ({ image, title, description, link, cardWidth }) => {
  // Ajustar altura y texto según el ancho de la tarjeta
  const isMobile = cardWidth < 300;
  const isTablet = cardWidth >= 300 && cardWidth < 400;
  
  return (
    <div 
      className="bg-gray-700 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform duration-500 flex flex-col"
      style={{ 
        width: '100%',
        height: isMobile ? '450px' : isTablet ? '480px' : '500px'
      }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full object-cover rounded-t-2xl"
        style={{ 
          height: isMobile ? '200px' : isTablet ? '220px' : '240px'
        }}
      />

      <div className="p-4 flex flex-col flex-grow justify-between items-center text-center">
        <h2 
          className="text-[#F5F1EB] font-semibold mb-2"
          style={{ 
            fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
            lineHeight: isMobile ? '1.3' : '1.4'
          }}
        >
          {title}
        </h2>
        
        <p 
          className="text-[#F5F1EB] flex-grow text-justify mb-3"
          style={{ 
            fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
            lineHeight: isMobile ? '1.4' : '1.5',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: isMobile ? '6' : isTablet ? '7' : '8',
            WebkitBoxOrient: 'vertical'
          }}
        >
          {description}
        </p>
        
        <a 
          href={link}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-orange-500 text-white py-2 px-3 rounded-lg font-medium shadow-md hover:bg-orange-600 transition text-sm self-stretch text-center"
          style={{ 
            fontSize: isMobile ? '12px' : '14px',
            padding: isMobile ? '8px 12px' : '10px 16px'
          }}
        >
          Ir al proyecto
        </a>
      </div>
    </div>
  );
};

export default Servicios;