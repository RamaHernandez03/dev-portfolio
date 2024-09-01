import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

function Tecnologias() {
  const { ref: refTitle, inView: inViewTitle } = useInView({
    triggerOnce: false, // Cambiado a false
    threshold: 0.1,
  });

  const { ref: refFrontEnd, inView: inViewFrontEnd } = useInView({
    triggerOnce: false, // Cambiado a false
    threshold: 0.1,
  });

  const { ref: refExtras, inView: inViewExtras } = useInView({
    triggerOnce: false, // Cambiado a false
    threshold: 0.1,
  });

  const { ref: refBackEnd, inView: inViewBackEnd } = useInView({
    triggerOnce: false, // Cambiado a false
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative">
      <h2
        id='Tecnologias'
        ref={refTitle}
        className={`text-4xl font-bold mb-[60px] pb-[10px] border-b-4 border-orange-500 ${
          inViewTitle ? 'animate-slideUp' : 'opacity-0'
        }`}
      >
        Tecnologias
      </h2>
      <div className="flex justify-around w-full max-w-5xl mb-[200px]">
        <div
          ref={refFrontEnd}
          className={`flex flex-col items-center ${
            inViewFrontEnd ? 'animate-slideUp' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6">Front-end</h3>
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faHtml5} className='w-16 h-16 p-5' style={{color: "#ff7b00"}} />
            <FontAwesomeIcon icon={faCss3Alt} className='w-16 h-16 p-5' style={{color: "#74C0FC"}} />
            <FontAwesomeIcon icon={faReact} className='w-16 h-16 p-5' style={{color: "#008efa"}} />
          </div>
        </div>
        <div className="border-l-2 border-orange-500"></div>
        <div
          ref={refExtras}
          className={`flex flex-col items-center ${
            inViewExtras ? 'animate-slideUp' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6">Extras</h3>
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faGitAlt} className='w-16 h-16 p-5' style={{color: "#fa0000"}} />
            <FontAwesomeIcon icon={faFigma} className='w-16 h-16 p-5' style={{color: "#63E6BE"}} />
            <FontAwesomeIcon icon={faDatabase} className='w-16 h-16 p-5' style={{color: "#B197FC"}} />
          </div>
        </div>
        <div className="border-l-2 border-orange-500"></div>
        <div
          ref={refBackEnd}
          className={`flex flex-col items-center ${
            inViewBackEnd ? 'animate-slideUp' : 'opacity-0'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6">Back-end</h3>
          <div className="flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={faNode} className='w-16 h-16 p-5' style={{color: "#1a9900"}} />
            <FontAwesomeIcon icon={faPython} className='w-16 h-16 p-5' style={{color: "#FFD43B"}} />
            <FontAwesomeIcon icon={faServer} className='w-16 h-16 p-5' style={{color: "#3700ff"}} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 w-[100%] shadow-[0px_-16px_20px_rgba(0,0,0,0.2)] bg-gray-800 rounded-t-[100%]"></div>
    </div>
  );
}

export default Tecnologias;
