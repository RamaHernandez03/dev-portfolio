import React from 'react';
import SobreMiImage from '../assets/SobreMi.jpeg';
import NavBar from './NavBar';

const SobreMi = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-800">
      <h2 className="font-semibold text-[40px] text-white mb-[150px] underline">Sobre Mi</h2>
      <div className="bg-gray-700 p-10 rounded-lg flex items-center space-x-10">
        <div className="flex flex-col items-center">
          <img
            src={SobreMiImage}
            alt="Rama"
            className="w-48 h-48 object-cover rounded-lg"
          />
          <p className="text-white mt-4 text-xl font-bold">{'<Rama/>'}</p> {/* Agrega <Rama/> debajo de la imagen */}
        </div>
        <div className="text-white">
          <p className="text-2xl mb-4">
            Soy un entusiasta <span className="text-orange-500">Desarrollador de Software</span> que vive en la Ciudad de Buenos Aires, Argentina.
          </p>
          <p className="text-2xl mb-4">
            Actualmente estoy en la carrera de <span className="text-orange-500">Ingeniería Informática</span>, En la UBA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
