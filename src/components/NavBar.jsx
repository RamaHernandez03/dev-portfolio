import React from 'react'
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div>
      <nav className="flex z-30 justify-center p-10"> {/* Incremento del z-index */}
        <ul className="flex space-x-[170px] mt-5">
          <li className="text-2xl text-white font-bold hover:text-orange-500 transition ease-in duration-200 cursor-pointer">
            <Link to="Home" smooth={true} duration={500}>Inicio</Link>
          </li>
          <li className="text-2xl text-white font-bold hover:text-orange-500 transition ease-in duration-200 cursor-pointer">
           <Link to="SobreMi" smooth={true} duration={500}>Sobre Mi</Link>
          </li>
          <li className="text-2xl text-white font-bold hover:text-orange-500 transition ease-in duration-200 cursor-pointer">Proyectos</li>
          <li className="text-2xl text-white font-bold hover:text-orange-500 transition ease-in duration-200 cursor-pointer">Tecnologías</li>
          <li className="text-2xl text-white font-bold hover:text-orange-500 transition ease-in duration-200 cursor-pointer">Contacto</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
