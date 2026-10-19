import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Servicios = ({ image, title, description, link, tags = [], featured = false, imageFit = 'cover', imageTone = '' }) => (
  <article className={`group flex h-[520px] flex-col overflow-hidden rounded-2xl border bg-gray-800 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-orange-500/70 ${featured ? 'border-orange-500/50' : 'border-gray-700'}`}>
    <div className={`relative h-60 shrink-0 overflow-hidden ${imageTone === 'marazul' ? 'bg-gradient-to-br from-sky-50 to-blue-100 p-9' : imageFit === 'contain' ? 'bg-white p-8' : 'bg-gray-700'}`}>
      <img
        src={image}
        alt={`Vista del proyecto ${title}`}
        loading="lazy"
        className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
      />
      {featured && (
        <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          Destacado
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col p-5 text-left sm:p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-700 px-3 py-1 text-xs font-semibold text-orange-300">{tag}</span>
        ))}
      </div>
      <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
      <p className="mb-5 line-clamp-4 flex-1 text-sm leading-6 text-gray-300">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver proyecto ${title}`}
        className="inline-flex items-center justify-between rounded-xl bg-orange-500 px-4 py-3 font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        Ver proyecto <FaArrowUpRightFromSquare aria-hidden="true" />
      </a>
    </div>
  </article>
);

export default Servicios;
