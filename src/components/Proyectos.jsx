import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import Servicios from './Cards.jsx';
import deudas from '../assets/deudas.png';
import escribania from '../assets/escribania.png';
import abogada from '../assets/GISELA_NUEVO.png';
import scraper from '../assets/scraper.jpeg';
import charizard from '../assets/Charizard.jpeg';
import matesmood from '../assets/matesmood.png';
import cotizamin from '../assets/cotizamin.png';
import marazul from '../assets/marazul.png';
import carlosCalvo from '../assets/carlos-calvo.webp';

const proyectos = [
  { image: marazul, title: 'Marazul Travel & Business', description: 'Plataforma integral para una agencia de viajes: paquetes administrables, páginas de detalle, consultas por WhatsApp, SEO y panel de gestión.', link: 'https://www.marazultravel.com/', tags: ['React', 'Supabase', 'SEO'], featured: true, imageFit: 'contain', imageTone: 'marazul' },
  { image: carlosCalvo, title: 'Carlos Calvo 2590', description: 'Landing inmobiliaria orientada a conversión para un desarrollo en San Cristóbal, con catálogo de unidades, galería, panel comercial y captación de leads.', link: 'https://carloscalvo2590.com/', tags: ['JavaScript', 'Supabase', 'Netlify'], featured: true },
  { image: escribania, title: 'Escribanía La Riva', description: 'Sitio institucional para comunicar servicios notariales, diseñado y desarrollado desde cero con una experiencia clara y profesional.', link: 'https://www.escribanialariva.com/', tags: ['React', 'Node.js'] },
  { image: cotizamin, title: 'Cotizamin', description: 'Sistema de gestión de stock para proveedores con análisis y feedback de productos y precios asistido por inteligencia artificial.', link: 'https://cotizamin.vercel.app/', tags: ['Next.js', 'PostgreSQL', 'n8n'] },
  { image: abogada, title: 'Gisela Ríos Abogada', description: 'Sitio profesional para presentar servicios legales y facilitar el contacto con potenciales clientes.', link: 'https://giselariosabogada.com/', tags: ['WordPress', 'PHP'] },
  { image: deudas, title: 'Solucioná tus deudas', description: 'Aplicación de consulta de deudas conectada con datos del BCRA e integrada con Checkout Pro de Mercado Pago.', link: 'https://solucionatusdeudas.com.ar/', tags: ['PHP', 'API BCRA', 'Mercado Pago'] },
  { image: scraper, title: 'Instagram Bot', description: 'Automatización que obtiene los seguidos de una cuenta objetivo y gestiona acciones programadas.', link: 'https://github.com/RamaHernandez03/usersBot', tags: ['Python', 'Automation'] },
  { image: charizard, title: 'Pokémon Pygame', description: 'Juego desarrollado en Python para explorar lógica de estados, interacción y mecánicas de combate.', link: 'https://github.com/RamaHernandez03/pokemon.py', tags: ['Python', 'Pygame'] },
  { image: matesmood, title: 'Matesmood', description: 'Sitio de producto para un emprendimiento de mates, con una identidad visual simple y navegación directa.', link: 'https://matesmood.netlify.app/', tags: ['HTML', 'CSS', 'JavaScript'] },
];

const Projects = () => {
  const carouselRef = useRef(null);
  const move = (direction) => {
    const width = carouselRef.current?.firstElementChild?.getBoundingClientRect().width || 340;
    carouselRef.current?.scrollBy({ left: direction * (width + 24), behavior: 'smooth' });
  };

  return (
    <section id="Proyectos" className="overflow-hidden bg-gray-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div className="text-left">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">Trabajo reciente</p>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">Proyectos</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">Una selección de productos que diseñé y desarrollé para resolver necesidades reales.</p>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button onClick={() => move(-1)} aria-label="Proyectos anteriores" className="rounded-full border border-gray-600 p-3 text-white transition hover:border-orange-500 hover:bg-orange-500"><FaChevronLeft /></button>
            <button onClick={() => move(1)} aria-label="Proyectos siguientes" className="rounded-full border border-gray-600 p-3 text-white transition hover:border-orange-500 hover:bg-orange-500"><FaChevronRight /></button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div ref={carouselRef} className="projects-scroll flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-5 pt-1 lg:pb-7">
          {proyectos.map((proyecto) => (
            <div key={proyecto.title} className="w-[calc(100vw-3.5rem)] max-w-[360px] shrink-0 snap-center sm:w-[350px] lg:w-[360px] lg:max-w-[360px]">
              <Servicios {...proyecto} />
            </div>
          ))}
        </div>
      </div>
      <p className="px-5 pt-2 text-center text-xs text-gray-500 sm:hidden">Deslizá para ver más proyectos →</p>
    </section>
  );
};

export default Projects;
