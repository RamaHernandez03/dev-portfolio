import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:block fixed top-4 left-4 z-50">
      <button onClick={toggleMenu} className="text-white text-4xl focus:outline-none">
        <FaBars />
      </button>
      {isOpen && (
        <div className="mt-4 bg-gray-800 text-white rounded-lg shadow-lg py-4 px-6">
          <ul className="space-y-4">
            <li><a href="#Inicio" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="#SobreMi" onClick={toggleMenu}>Sobre Mi</a></li>
            <li><a href="#Proyectos" onClick={toggleMenu}>Proyectos</a></li>
            <li><a href="#Tecnologias" onClick={toggleMenu}>Tecnologias</a></li>
            <li><a href="#Contactame" onClick={toggleMenu}>Contactame</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
