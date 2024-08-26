import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Form = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-gray-800'>
      <h2 id='Contactame' className='font-semibold z-30 text-[40px] text-white mb-[60px] pb-[10px] border-b-4 border-orange-500'>Contactame</h2>
      <div className="bg-gray-700 p-10 mb-[60px] shadow-[0px_12px_16px_rgba(0,0,0,0.2)] rounded-lg flex flex-col items-center w-2/3 max-w-3xl">
        <div className="text-white text-center mb-6">
          <h3 className="text-lg font-semibold mb-4">Hablemos por:</h3>
          <div className="flex justify-center space-x-8 mb-4">
            <a href="https://www.instagram.com/ramahernandezz" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition">
              <FaInstagram size={40} />
            </a>
            <a href="https://wa.link/zu5elf" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition">
              <FaWhatsapp size={40} />
            </a>
            <a href="https://www.linkedin.com/in/ramahernandez03" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 transition">
              <FaLinkedin size={40} />
            </a>
          </div>
          <p className="text-lg font-semibold">O completa el formulario:</p>
        </div>
        <form action="https://getform.io/f/bzylzwla" method="POST" className='flex flex-col space-y-4 w-full max-w-lg'>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className='bg-gray-900 text-white placeholder-gray-400 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className='bg-gray-900 text-white placeholder-gray-400 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            className='bg-gray-900 text-white placeholder-gray-400 p-4 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-500'
            rows="4"
          ></textarea>
          <button
            type="submit"
            className='bg-orange-500 text-white p-3 rounded-md font-bold hover:bg-orange-600 transition duration-300 ease-in-out w-full'
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
};

export default Form;
