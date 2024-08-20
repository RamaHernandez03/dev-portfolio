import React from 'react';
import SobreMiImage from '../assets/SobreMi.jpeg';

const SobreMi = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-800">
        <h2 className='font-semibold text-[40px] text-white mb-[150px]'>Sobre Mi</h2>
      <div className="bg-gray-700 p-10 rounded-lg flex items-center space-x-10">
        <img
          src={SobreMiImage} // Reemplaza con la URL de tu imagen
          alt="Rama"
          className="w-48 h-48 object-cover rounded-lg"
        />
        <div className="text-white">
          <p className="text-2xl mb-4">Soy un entusiasta <span className="text-orange-500">Desarrollador de Software</span> que vive en la Ciudad de Buenos Aires, Argentina.</p>
          <p className="text-2xl mb-4">
            Actualmente estoy en la carrera de <span className="text-orange-500">Ingenieria Informatica</span>, En la UBA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
