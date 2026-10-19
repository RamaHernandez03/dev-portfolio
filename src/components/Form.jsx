import { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const encode = (data) => new URLSearchParams(data).toString();

const Form = () => {
  const [status, setStatus] = useState('idle');
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    const form = event.currentTarget;
    try {
      const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encode(Object.fromEntries(new FormData(form))) });
      if (!response.ok) throw new Error('No se pudo enviar');
      form.reset();
      setStatus('sent');
    } catch { setStatus('error'); }
  };

  return (
    <section id="Contactame" className="bg-gray-800 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-9 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-orange-500">Contacto</p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Hablemos de tu proyecto</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-300 sm:text-base">Contame qué necesitás. El mensaje llega directamente a mi casilla y te respondo personalmente.</p>
        </div>

        <div className="rounded-2xl border border-gray-600 bg-gray-700 p-5 shadow-2xl sm:p-8">
          <form name="contacto" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="grid gap-5 text-left sm:grid-cols-2">
            <input type="hidden" name="form-name" value="contacto" />
            <p className="hidden"><label>No completes este campo: <input name="bot-field" /></label></p>
            <label className="text-sm font-semibold text-gray-100">Nombre
              <input required autoComplete="name" type="text" name="name" placeholder="Tu nombre" className="mt-2 w-full rounded-lg border border-gray-500 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
            </label>
            <label className="text-sm font-semibold text-gray-100">Email
              <input required autoComplete="email" type="email" name="email" placeholder="tu@email.com" className="mt-2 w-full rounded-lg border border-gray-500 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
            </label>
            <label className="text-sm font-semibold text-gray-100 sm:col-span-2">Mensaje
              <textarea required name="message" placeholder="¿En qué puedo ayudarte?" className="mt-2 w-full resize-none rounded-lg border border-gray-500 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" rows="5" />
            </label>
            <div className="flex items-center gap-3 sm:col-span-2 sm:justify-between">
              <div className="hidden gap-2 sm:flex">
                {[['Instagram', 'https://www.instagram.com/ramahernandezz', FaInstagram], ['WhatsApp', 'https://wa.link/zu5elf', FaWhatsapp], ['LinkedIn', 'https://www.linkedin.com/in/ramahernandez03', FaLinkedin]].map(([label, href, Icon]) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-lg border border-gray-500 p-2.5 text-gray-300 transition hover:border-orange-500 hover:text-orange-500"><Icon size={19} /></a>
                ))}
              </div>
              <button disabled={status === 'sending'} type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600 disabled:opacity-70 sm:w-auto">
                {status === 'sending' ? 'Enviando…' : <>Enviar mensaje <FaPaperPlane size={14} /></>}
              </button>
            </div>
            <div aria-live="polite" className="min-h-5 text-center text-sm sm:col-span-2">
              {status === 'sent' && <p className="font-semibold text-green-400">¡Mensaje enviado! Te respondo a la brevedad.</p>}
              {status === 'error' && <p className="font-semibold text-red-400">No se pudo enviar. Escribime por WhatsApp.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
