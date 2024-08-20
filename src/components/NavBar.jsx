import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className="flex z-30 justify-center p-10"> {/* Incremento del z-index */}
        <ul className="flex space-x-[170px] mt-5">
          <li className="text-2xl text-white font-bold hover:text-orange-500 transition ease-in duration-200 cursor-pointer">Inicio</li>
          <li className="text-2xl text-white font-bold hover:text-orange-500 transition ease-in duration-200 cursor-pointer">Sobre mí</li>
          <li className="text-2xl text-white font-bold hover:text-orange-500 transition ease-in duration-200 cursor-pointer">Proyectos</li>
          <li className="text-2xl text-white font-bold hover:text-orange-500 transition ease-in duration-200 cursor-pointer">Tecnologías</li>
          <li className="text-2xl text-white font-bold hover:text-orange-500 transition ease-in duration-200 cursor-pointer">Contacto</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
