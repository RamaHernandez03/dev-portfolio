import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';  // Importa HashLink para anclajes

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-gray-900 flex justify-between items-center px-6 py-4">
      <div className="text-3xl pb-[5px] text-white font-bold ml-[200px]">
        &lt;Rama/&gt;
      </div>
      <ul className="flex space-x-8 font-bold p-[20px] mr-[40px]">
        <li className="text-lg text-white font-semibold pb-[5px] border-b-4 border-transparent hover:border-orange-500 transition duration-500 cursor-pointer">
          <Link smooth to="/#Home">Inicio</Link>
        </li>
        <li className="text-lg text-white font-semibold border-b-4 border-transparent hover:border-orange-500 transition duration-500 cursor-pointer">
          <Link smooth to="/#SobreMi">Sobre Mi</Link>
        </li>
        <li className="text-lg text-white font-semibold border-b-4 border-transparent hover:border-orange-500 transition duration-500 cursor-pointer">
          <Link smooth to="/#Proyectos">Proyectos</Link>
        </li>
        <li className="text-lg text-white font-semibold border-b-4 border-transparent hover:border-orange-500 transition duration-500 cursor-pointer">
          <Link smooth to="/#Tecnologias">Tecnologias</Link>
        </li>
        <li className="text-lg text-white font-semibold border-b-4 border-transparent hover:border-orange-500 transition duration-500 cursor-pointer">
          <Link smooth to="/#Contactame">Contactame</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
