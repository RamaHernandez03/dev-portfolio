import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);
  const words = ['Developer', 'Wizard...'];

  useEffect(() => {
    let typingTimeout;

    const handleType = () => {
      const currentWord = words[loopNum % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, displayedText.length - 1)
        : currentWord.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        typingTimeout = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typingTimeout = setTimeout(() => setTypingSpeed(150), 500);
      } else {
        typingTimeout = setTimeout(handleType, typingSpeed);
      }
    };

    typingTimeout = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, loopNum]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); 

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <NavBar/>
      <header className="flex z-10 flex-col justify-center h-screen text-left ml-[125px] mt-[-45px] relative"> {/* Ajuste del margen superior */}
        <h1 id='Home' className="text-[54px] mb-4">Hola, Soy Ramiro Hernández.</h1>
        <h2 className="text-[59px] font-bold relative flex items-center">
          <span className="text-white mr-[20px]">Software</span>
          <div className="relative flex items-center">
            <span className="text-orange-500">
              {displayedText}
            </span>
            <span className={`text-orange-500 ${showCursor ? 'visible' : 'invisible'}`}>|</span>
          </div>
        </h2>
        <div className='text-[59px] font-bold relative flex items-center'>
          <span className="text-white absolute ml-[560px] mt-[-90px]">
            &lt;/&gt;
          </span>
        </div>
      </header>
    </div>
  );
}

export default Home;
