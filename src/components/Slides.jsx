import React, { useRef } from 'react';
import { Button } from '@nextui-org/react';
import aisa from '/src/assets/aisa.png';
import clippr from '/src/assets/clippr.png';
import titan from '/src/assets/titan.png';
import portfolio from '/src/assets/portfolio.png';
import galaxy from '/src/assets/gg.png';
import nxt from '/src/assets/next.svg';
import prev from '/src/assets/prev.svg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeIn from './FadeIn';

const Slides = () => {

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    speed: 800,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 2500,   
    pauseOnHover: true,
    arrows: false, 
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const projectData = [
    {
      name: `AiSafeguard`,
      img: aisa,
      info: `Chrome extension designed to block AI art while browsing the internet.`
    },
    {
      name: `Galaxy Grid 2.0`,
      img: galaxy,
      info: `Tic Tac Toe in-browser game, with an intergalactic take!`
    },
    {
      name: `Portfolio`,
      img: portfolio,
      info: `My web portfolio. Designed to showcase my skills and abilities as a developer.`
    },
    {
      name: `Titan Tech`,
      img: titan,
      info: `Landing page for Titan Technologies, with design having been provided.`
    },
    {
      name: `ClipprDB`,
      img: clippr,
      info: `Movie database which utilizes data from the TMDb Database (Rest API)`
      
    },
  ];

  return (
    <FadeIn>
    <div className='w-3/4 m-auto relative'>
      
      <div className='mt-10'>
      <button
          className="hidden md:block absolute left-[-70px] top-1/2 transform -translate-y-1/2  bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
          onClick={previous}
        >
           <img src={prev} alt="prev" width={50} className='invert'/>
        </button>
        
        <button
          className="hidden md:block absolute right-[-70px] top-1/2 transform -translate-y-1/2  bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
          onClick={next}
        >
           <img src={nxt} alt="next" width={50} className='invert'/>
        </button>
        <Slider ref={sliderRef} {...settings}>
          {projectData.map((d, index) => (
            <div key={index} className='bg-white border-1 shadow-md h-full mb-4 text-black rounded-xl'>
              <div className='bg-[#DDECFF] rounded-t-xl flex justify-center items-center'>
                <img src={d.img} alt="" className='max-h-50 w-full rounded-t-xl' />
              </div>
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <p className='font-semibold text-xl'>{d.name}</p>
                <p className="text-center text-[12px] md:text-[14px]">{d.info}</p>
                <Button className='bg-primary text-white text-lg px-3 md:px-4 py-2 rounded-full'>View Project</Button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </FadeIn>
  );
};

export default Slides;