import React from 'react'

const Form = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-gray-800'>
      <h2 id='Contactame' className='font-semibold text-[40px] text-white mb-[80px] underline'>Contactame</h2>
        <form action="https://getform.io/f/bzylzwla" method="POST" className='flex flex-col items-center justify-center pt-10'>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className='border border-slate-800 mt-6 sm:w-[300px]'
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className='border border-slate-800 mt-6 sm:w-[300px]'
          />
          <textarea
            type="message"
            placeholder="Mensaje"
            id=""
            cols="120"
            row="10"
            resize="none"
            className='border border-slate-800 mt-6 sm:w-[300px]'
          ></textarea>
          <button
            type="submit"
            className='border border-slate-800 mt-8 sw:w-[120px] p-2'
            >
              Enviar
            </button>
        </form>
      </div>
  )
};

export default Form
