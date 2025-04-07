import React from "react";
import { Link } from "react-router-dom";

const Servicios = ({ image, title, description, link }) => {
  return (
    <div className="bg-gray-700 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform duration-500 w-full max-w-[380px] sm:max-w-[330px] md:max-w-[380px] h-[470px] md:h-[500px] flex flex-col">
      <img src={image} alt={title} className="w-full h-60 object-cover rounded-t-2xl" />

      <div className="p-4 flex flex-col flex-grow justify-between items-center text-center">
        <h2 className="text-[#F5F1EB] text-xl font-semibold mb-2">{title}</h2>
        <p className="text-[#F5F1EB] text-lg flex-grow">{description}</p>
        <a 
            href={link} // sin `/` ni nada antes
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 text-white py-2 px-3 rounded-lg font-medium shadow-md hover:bg-orange-600 transition mb-3 text-sm"
        >
            Ir al proyecto
        </a>

      </div>
    </div>
  );
};

export default Servicios;
