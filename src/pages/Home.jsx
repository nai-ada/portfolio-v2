import { useState, useRef, useEffect } from 'react';
import About from '../components/About';
import Works from '../components/Works';
import Connect from '../components/Connect';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
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
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-100 to-transparent -z-100"
        style={{
          height: gridHeight,
          backgroundImage: `
          linear-gradient(to right, rgba(229, 231, 235, 0.5) 2px, transparent 2px),
          linear-gradient(to bottom, rgba(229, 231, 235, 0.5) 2px, transparent 2px)
          `,
          backgroundSize: '130px 130px',
        }}
      />
      <div className="relative z-10">
        <Nav />
        <div className="flex items-center justify-center min-h-screen px-6 ">
        <div className="flex justify-center items-center min-h-screen w-full max-w-3xl md:-mt-20 ">
          
    <div className="flex flex-col md:items-start md:items-center md:items-start">
      <div className="md-2 md:mb-0 md:flex md:justify-between md:w-full md:w-[103%]">
        <div className="flex flex-col md:flex-row md:items-baseline">
          <h1 className="font-bold text-[60px] xs:text-[70px] md:text-[84px] md-x:text-[110px] md-plus:text-[95px] xs:h-20 sm-x:text-[100px] h-16 md:h-28 text-[#2b2b2b] lg:text-[100px] xl:text-[120px] sm-plus:text-[80px] sm-plus:h-24 sm:text-[90px] sm:h-28 lg-plus:text-[150px] ">Nadia</h1>
          <h1 className="font-bold text-[55px] md:text-[84px] sm:text-[90px] md-x:text-[110px]  md-plus:text-[95px] sm-x:text-[100px] xs:text-[70px] sm-plus:text-[80px] lg:text-[100px] bg-gradient-to-r from-[#b1dff3] via-[#86A6F6] via-[#99b0e2] to-[#8170aa] text-transparent bg-clip-text md:ml-4 md:text-[80px] md:text-[87px] xl:text-[120px]  lg-plus:text-[150px]">
            Vespalec<span className="text-lightTextColor">.</span>
          </h1>
        </div>
        <div className="hidden w-28 lg:w-10  lg:flex lg:flex-col space-y-4 lg-plus:space-y-8 lg:mt-8 xl:mt-12 xl:ml-9 md-x:mt-10 lg:ml-7 lg-plus:mt-[4rem] lg-plus:ml-16 lg:self-start">
          <a href="https://www.linkedin.com/in/nadia-vespalec/" className="hover:opacity-80 transition-opacity">
            <img src={LinkedIn} alt="LinkedIn Logo" width={36} />
          </a>
          <a href="https://github.com/nai-ada" className="hover:opacity-80 transition-opacity">
            <img src={GitHub} alt="GitHub Logo" width={36} />
          </a>
        </div>
      </div>
      <div className=" ml-2 md:w-full md:mt-1 md:mt-2 md:ml-1 lg:mt-0 ">
  <h2 className="subTitleHome text-left text-[16px] xs:text-[18px] md:text-[24px] md:text-left mb-2 font-medium sm-plus:text-[20px] sm:text-[22px] lg-plus:text-[28px]">
    Front-End{' '}
    <span className="font-semibold text-[#86A6F6]">
      Developer
    </span>{' '}
    & <span className="font-semibold text-[#86A6F6]">Designer</span>.
  </h2>
  <div className="flex items-center mb-4 md:mb-2">
    <img
      src={LocationPin}
      alt="Location Pin Logo"
      width={14}
      className="mr-2"
    />
    <h2 className="text-[16px] font-medium md:text-[18px]">Vancouver, BC</h2>
  </div>
  <div className="flex space-x-4 md:justify-start lg:hidden">
    <a
      href="https://www.linkedin.com/in/nadia-vespalec/"
      className="hover:opacity-80 transition-opacity md:mt-2"
    >
      <img src={LinkedIn} alt="LinkedIn Logo" width={26} />
    </a>
    <a
      href="https://github.com/nai-ada"
      className="hover:opacity-80 transition-opacity md:mt-2"
    >
      <img src={GitHub} alt="GitHub Logo" width={26} />
    </a>
  </div>
</div>
    </div>
  </div>
</div>
      </div>

      <div ref={aboutRef}>
        <About />
        <Works />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
