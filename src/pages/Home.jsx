import { useState, useRef, useEffect } from 'react';
import About from '../components/About';
import Works from '../components/Works';
import Connect from '../components/Connect';
import Nav from '../components/Nav';

import GitHub from '/src/assets/github.svg';
import LinkedIn from '/src/assets/linkedin.svg';
import LocationPin from '/src/assets/locationpin.svg';

function Home() {
  const aboutRef = useRef(null);
  const [gridHeight, setGridHeight] = useState('100vh');

  useEffect(() => {
    if (aboutRef.current) {
      const aboutTop = aboutRef.current.offsetTop;
      setGridHeight(`${aboutTop}px`);
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-100 to-transparent z-0"
        style={{
          height: gridHeight,
          backgroundImage: `
          linear-gradient(to right, rgba(229, 231, 235, 0.4) 2px, transparent 2px),
          linear-gradient(to bottom, rgba(229, 231, 235, 0.4) 2px, transparent 2px)
          `,
          backgroundSize: '130px 130px',
        }}
      />
      <div className="relative z-10">
        <Nav />
        <div className="flex flex-col items-center justify-center min-h-screen px-6 -mt-20">
          <div className="mb-4">
            <h1 className="font-bold text-[55px] text-[#2b2b2b]">Nadia</h1>
            <h1 className="font-bold text-[55px] bg-gradient-to-r from-[#b1dff3] via-[#86A6F6] via-[#99b0e2] to-[#8170aa] text-transparent bg-clip-text">
              Vespalec<span className="text-lightTextColor">.</span>
            </h1>
          </div>
          <div className="mt-2">
            <h2 className="subTitleHome text-left text-[14px] mb-2 font-medium">
              Front-End{' '}
              <span className="font-semibold text-[#86A6F6]">
                Web Developer
              </span>{' '}
              & <span className="font-semibold text-[#86A6F6]">Designer</span>.
            </h2>
            <div className="flex items-center mb-4">
              <img
                src={LocationPin}
                alt="Location Pin Logo"
                width={14}
                className="mr-2"
              />
              <h2 className="text-[14px] font-medium">Vancouver, BC</h2>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/nadia-vespalec/"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={LinkedIn} alt="LinkedIn Logo" width={23} />
              </a>
              <a
                href="https://github.com/nai-ada"
                className="hover:opacity-80 transition-opacity"
              >
                <img src={GitHub} alt="GitHub Logo" width={23} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div ref={aboutRef}>
        <About />
        <Works />
        <Connect />
      </div>
    </div>
  );
}

export default Home;
