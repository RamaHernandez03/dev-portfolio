import React from 'react';
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
  {
    image: marazul,
    title: 'Marazul Travel & Business',
    description: 'Plataforma integral para una agencia de viajes: paquetes administrables, páginas de detalle, consultas por WhatsApp, SEO y panel de gestión.',
    link: 'https://www.marazultravel.com/',
    tags: ['React', 'Supabase', 'SEO'],
    featured: true,
    imageFit: 'contain',
  },
  {
    image: carlosCalvo,
    title: 'Carlos Calvo 2590',
    description: 'Landing inmobiliaria orientada a conversión para un desarrollo en San Cristóbal, con catálogo de unidades, galería, panel comercial y captación de leads.',
    link: 'https://carloscalvo2590.com/',
    tags: ['JavaScript', 'Supabase', 'Netlify'],
    featured: true,
  },
  {
    image: escribania,
    title: 'Escribanía La Riva',
    description: 'Sitio institucional para comunicar servicios notariales, diseñado y desarrollado desde cero con una experiencia clara y profesional.',
    link: 'https://www.escribanialariva.com/',
    tags: ['React', 'Node.js'],
  },
  {
    image: cotizamin,
    title: 'Cotizamin',
    description: 'Sistema de gestión de stock para proveedores con análisis y feedback de productos y precios asistido por inteligencia artificial.',
    link: 'https://cotizamin.vercel.app/',
    tags: ['Next.js', 'PostgreSQL', 'n8n'],
  },
  {
    image: abogada,
    title: 'Gisela Ríos Abogada',
    description: 'Sitio profesional para presentar servicios legales y facilitar el contacto con potenciales clientes.',
    link: 'https://giselariosabogada.com/',
    tags: ['WordPress', 'PHP'],
  },
  {
    image: deudas,
    title: 'Solucioná tus deudas',
    description: 'Aplicación de consulta de deudas conectada con datos del BCRA e integrada con Checkout Pro de Mercado Pago.',
    link: 'https://solucionatusdeudas.com.ar/',
    tags: ['PHP', 'API BCRA', 'Mercado Pago'],
  },
  {
    image: scraper,
    title: 'Instagram Bot',
    description: 'Automatización que obtiene los seguidos de una cuenta objetivo y gestiona acciones programadas.',
    link: 'https://github.com/RamaHernandez03/usersBot',
    tags: ['Python', 'Automation'],
  },
  {
    image: charizard,
    title: 'Pokémon Pygame',
    description: 'Juego desarrollado en Python para explorar lógica de estados, interacción y mecánicas de combate.',
    link: 'https://github.com/RamaHernandez03/pokemon.py',
    tags: ['Python', 'Pygame'],
  },
  {
    image: matesmood,
    title: 'Matesmood',
    description: 'Sitio de producto para un emprendimiento de mates, con una identidad visual simple y navegación directa.',
    link: 'https://matesmood.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Projects = () => (
  <section id="Proyectos" className="bg-gray-900 px-5 py-24 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-orange-500">Trabajo reciente</p>
        <h2 className="text-4xl font-bold text-white sm:text-5xl">Proyectos</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
          Productos digitales pensados para resolver necesidades reales, desde la estrategia y el diseño hasta el desarrollo y la publicación.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {proyectos.map((proyecto) => (
          <Servicios key={proyecto.title} {...proyecto} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
