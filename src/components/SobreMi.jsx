import React from 'react';
import SobreMiImage from '../assets/SobreMi.jpeg';

const SobreMi = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-800">
      <h2 id='SobreMi' className="font-semibold text-[40px] text-white mb-[80px] underline">Sobre Mi</h2>
      <div className="bg-gray-700 p-10 shadow-[0px_12px_16px_rgba(0,0,0,0.2)] rounded-lg flex items-start space-x-10">
        <div className="flex flex-col items-center">
          <img
            src={SobreMiImage}
            alt="Rama"
            className="w-[300px] h-[300px] object-cover rounded-lg"
          />
          <p className="text-white mt-8 text-2xl font-bold">{'<Rama/>'}</p>
        </div>
        <div className="text-white">
          <p className="text-[24px] mb-4">
            Soy un entusiasta de la <span className="text-orange-500">Programacion</span> y de las <span className="text-orange-500">Nuevas Tecnologias</span>
          </p>
          <p className="text-[24px] mb-4">
            que reside en la Ciudad de Buenos Aires. Mientras avanzo en
          </p>
          <p className="text-[24px] mb-4">
            la carrera de <span className='text-orange-500'>Ingenieria Informatica</span> en la UBA, Me impulsa 
          </p>
          <p className="text-[24px] mb-4">
            una pasion por el aprendizaje de nuevas herramientas 
          </p>
          <p className="text-[24px] mb-4">
            que me potencien a la hora de <span className="text-orange-500">Solucionar Problemas.</span>
          </p>
          <p className="text-[24px] mb-4">
            ¿Queres que hagamos algo increible juntos? Hace  <span className="text-orange-500 font-bold underline inline-block hover:translate-y-[-7px] transition-transform duration-500">¡Click Aqui!</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;

