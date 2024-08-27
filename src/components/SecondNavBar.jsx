import React from 'react'
import { Link } from 'react-scroll';

const SecondNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-gray-900 flex justify-between items-center px-6 py-3 border-b-4 border-orange-500">
      <div className="text-2xl pb-1 text-white font-bold ml-[150px]">
        &lt;Rama/&gt;
      </div>
      <ul className="flex space-x-6 font-bold p-3 mr-[30px]">
        <li className="text-base text-white font-semibold pb-1 hover:text-orange-500 transition duration-500 cursor-pointer">
          <Link to="Home" smooth={true} duration={500}>Inicio</Link>
        </li>
        <li className="text-base text-white font-semibold hover:text-orange-500 transition duration-500 cursor-pointer">
          <Link to="SobreMi" smooth={true} duration={500}>Sobre Mi</Link>
        </li>
        <li className="text-base text-white font-semibold hover:text-orange-500 transition duration-500 cursor-pointer">
          <Link to="Proyectos" smooth={true} duration={500}>Proyectos</Link>
        </li>
        <li className="text-base text-white font-semibold hover:text-orange-500 transition duration-500 cursor-pointer">
          <Link to="Tecnologias" smooth={true} duration={500}>Tecnologias</Link>
        </li>
        <li className="text-base text-white font-semibold hover:text-orange-500 transition duration-500 cursor-pointer">
          <Link to="Contactame" smooth={true} duration={500}>Contactame</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SecondNavBar
