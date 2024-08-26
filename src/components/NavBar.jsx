import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-gray-900 flex justify-between items-center px-6 py-4">
      <div className="text-3xl pb-[5px] text-white font-bold ml-[200px]">
        &lt;Rama/&gt;
      </div>
      <ul className="flex space-x-8 font-bold p-[20px] mr-[40px]">
        <li className="text-lg text-white font-semibold pb-[5px] border-b-4 border-transparent hover:border-orange-500 transition duration-500 cursor-pointer">
          <Link to="Home" smooth={true} duration={500}>Inicio</Link>
        </li>
        <li className="text-lg text-white font-semibold border-b-4 border-transparent hover:border-orange-500 transition duration-500 cursor-pointer">
          <Link to="SobreMi" smooth={true} duration={500}>Sobre Mi</Link>
        </li>
        <li className="text-lg text-white font-semibold border-b-4 border-transparent hover:border-orange-500 transition duration-500 cursor-pointer">
          <Link to="Proyectos" smooth={true} duration={500}>Proyectos</Link>
        </li>
        <li className="text-lg text-white font-semibold border-b-4 border-transparent hover:border-orange-500 transition duration-500 cursor-pointer">
          <Link to="Tecnologias" smooth={true} duration={500}>Tecnologias</Link>
        </li>
        <li className="text-lg text-white font-semibold border-b-4 border-transparent hover:border-orange-500 transition duration-500 cursor-pointer">
          <Link to="Contactame" smooth={true} duration={500}>Contactame</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
