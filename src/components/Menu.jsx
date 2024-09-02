import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu();
  };

  return (
    <div className="lg:block fixed z-50 p-5 w-full bg-gray-900">
      <button onClick={toggleMenu} className="text-orange-500 text-4xl focus:outline-none">
        <FaBars />
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 text-white flex flex-col justify-center text-center z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-4xl focus:outline-none">
            <FaTimes />
          </button>
          <div className="flex flex-col items-center justify-center flex-grow">
            <ul className="text-4xl space-y-8 font-bold w-full">
              <li className="w-full">
                <Link to="/" onClick={() => handleScroll('Home')} className="block w-full text-center hover:bg-orange-500 py-2">Inicio</Link>
              </li>
              <li className="w-full">
                <Link to="/" onClick={() => handleScroll('SobreMi')} className="block w-full text-center hover:bg-orange-500 py-2">Sobre Mi</Link>
              </li>
              <li className="w-full">
                <Link to="/" onClick={() => handleScroll('Proyectos')} className="block w-full text-center hover:bg-orange-500 py-2">Proyectos</Link>
              </li>
              <li className="w-full">
                <Link to="/" onClick={() => handleScroll('Tecnologias')} className="block w-full text-center hover:bg-orange-500 py-2">Tecnologias</Link>
              </li>
              <li className="w-full">
                <Link to="/" onClick={() => handleScroll('Contactame')} className="block w-full text-center hover:bg-orange-500 py-2">Contactame</Link>
              </li>
            </ul>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Menu;
