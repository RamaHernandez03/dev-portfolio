import { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const encode = (data) => new URLSearchParams(data).toString();

const Form = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(Object.fromEntries(formData)),
      });
      if (!response.ok) throw new Error('No se pudo enviar');
      event.currentTarget.reset();
      setStatus('sent');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="Contactame" className="bg-gray-800 px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-3xl border border-gray-700 bg-gray-900 p-6 shadow-2xl sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
        <div className="text-left">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-orange-500">¿Tenés una idea?</p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Hagámosla realidad.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-gray-300">
            Contame qué necesitás y te respondo personalmente. El mensaje se envía de forma segura a mi casilla.
          </p>
          <a href="mailto:ramiro.tomas.hernandez03@gmail.com" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-gray-200 hover:text-orange-400">
            <FaEnvelope aria-hidden="true" /> ramiro.tomas.hernandez03@gmail.com
          </a>
          <div className="mt-8 flex gap-4">
            {[
              ['Instagram', 'https://www.instagram.com/ramahernandezz', FaInstagram],
              ['WhatsApp', 'https://wa.link/zu5elf', FaWhatsapp],
              ['LinkedIn', 'https://www.linkedin.com/in/ramahernandez03', FaLinkedin],
            ].map(([label, href, Icon]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-full border border-gray-600 p-3 text-orange-500 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                <Icon size={22} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <form name="contacto" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input type="hidden" name="form-name" value="contacto" />
          <p className="hidden"><label>No completes este campo: <input name="bot-field" /></label></p>
          <label className="text-sm font-semibold text-gray-200">
            Nombre
            <input required autoComplete="name" type="text" name="name" placeholder="Tu nombre" className="mt-2 w-full rounded-xl border border-gray-600 bg-gray-800 p-4 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30" />
          </label>
          <label className="text-sm font-semibold text-gray-200">
            Email
            <input required autoComplete="email" type="email" name="email" placeholder="tu@email.com" className="mt-2 w-full rounded-xl border border-gray-600 bg-gray-800 p-4 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30" />
          </label>
          <label className="text-sm font-semibold text-gray-200">
            Mensaje
            <textarea required name="message" placeholder="Contame sobre tu proyecto..." className="mt-2 w-full resize-none rounded-xl border border-gray-600 bg-gray-800 p-4 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30" rows="5" />
          </label>
          <button disabled={status === 'sending'} type="submit" className="mt-2 rounded-xl bg-orange-500 p-4 font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:cursor-wait disabled:opacity-70">
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
          </button>
          <div aria-live="polite" className="min-h-6 text-sm">
            {status === 'sent' && <p className="font-semibold text-green-400">¡Mensaje enviado! Te respondo a la brevedad.</p>}
            {status === 'error' && <p className="font-semibold text-red-400">No se pudo enviar. Escribime directamente por email o WhatsApp.</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
