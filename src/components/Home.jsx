import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Menu from './Menu.jsx';
import SecondNavBar from './SecondNavBar.jsx';

function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);
  const [showSecondNavBar, setShowSecondNavBar] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowSecondNavBar(true);
      } else {
        setShowSecondNavBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className={`fixed top-0 left-0 w-full transition-opacity duration-[400ms] lg:hidden ${showSecondNavBar ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ zIndex: 50 }}>
        <SecondNavBar />
      </div>
      <div className={`fixed top-0 left-0 w-full transition-opacity duration-[400ms] lg:hidden ${showSecondNavBar ? 'opacity-0 invisible' : 'opacity-100 visible'}`} style={{ zIndex: 40 }}>
        <NavBar />
      </div>
      <div className="hidden lg:block">
        <Menu/>
      </div>
      <header className="flex z-10 flex-col justify-center sm:text-center items-start h-screen px-10">
        <h1 id='Home' className="text-[54px] sm:text-[24px] sm:ml-[0px] sm:text-center sm:whitespace-nowrap mb-4 ml-[130px] overflow-hidden">Hola, Soy Ramiro Hernández.</h1>
        <h2 className="text-[59px] font-bold flex items-center ml-[130px] sm:text-[30px] sm:ml-[0px] sm:text-center sm:whitespace-nowrap mb-4 overflow-hidden">
          <span className="text-white mr-5">Software</span>
          <div className="relative flex items-center">
            <span className="text-orange-500">
              {displayedText}
            </span>
            <span className={`text-orange-500 ${showCursor ? 'visible' : 'invisible'}`}>|</span>
          </div>
        </h2>
        <div className='text-[59px] sm:text-center font-bold flex items-center'>
          <span className="text-white ml-[690px] mt-[-120px] absolute sm:text-center sm:ml-[125px] sm:text-[30px] sm:mb-[-170px]">
            &lt;/&gt;
          </span>
        </div>
      </header>
    </div>
  );
}

export default Home;
