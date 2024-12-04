import React, { useRef } from 'react';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import aisa from '/src/assets/aisa.png';
import clippr from '/src/assets/clippr.png';
import titan from '/src/assets/titan.png';
import portfolio from '/src/assets/portfolio1.png';
import galaxy from '/src/assets/gg.png';
import nxt from '/src/assets/next.svg';
import prev from '/src/assets/prev.svg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeIn from './FadeIn';
import comingsoon from '/src/assets/comingsoon.svg';


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
    autoplaySpeed: 4000,   
    pauseOnHover: true,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };


  const projectData = [
    {
      name: `AISafeguard`,
      img: comingsoon,
      info: `Chrome extension that blocks AI art while browsing the internet.`,
      link: '/projects/aisafeguard',
    },
    {
      name: `Galaxy Grid 2.0`,
      img: galaxy,
      info: `Tic Tac Toe in-browser game, with an intergalactic take!`,
      link: '/projects/galaxy-grid-2',
    },
    {
      name: `Portfolio`,
      img: portfolio,
      info: `The website you're currently on! Showcases my skills as a developer.`,
      link: '/projects/portfolio',
    },
    {
      name: `Titan Tech`,
      img: titan,
      info: `Landing page created for Titan Technologies, based off a provided design.`,
      link: '/projects/titan',
    },
    {
      name: `ClipprDB`,
      img: clippr,
      info: `Movie database which utilizes data from the TMDb Database (Rest API).`,
      link: '/projects/clippr',
    },
  ];

  return (
    <FadeIn>
        <style>
        {`
          .slick-dots li button:before {
            color: #232323 !important;
            opacity: 0.3;
          }

          .slick-dots li.slick-active button:before {
            color: #232323 !important;
            opacity: 0.75;
          }

          .dark .slick-dots li button:before {
            color: white !important;
            opacity: 0.3;
          }

          .dark .slick-dots li.slick-active button:before {
            color: white !important;
            opacity: 0.75;
          }
        `}
      </style>
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
            <div key={index} className='h-[400px] bg-white dark:bg-gradient-to-b dark:from-[#1d253a] dark:to-darkBackground dark:border-[#414141] border-1 rounded-xl flex flex-col m-2 shadow-[0_4px_7px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.1)]'>
              <div className='bg-[#DDECFF] rounded-t-xl h-[200px] flex justify-center items-center'> 
                <img 
                  src={d.img} 
                  alt="" 
                  className='w-full h-full object-cover rounded-t-xl' 
                />
              </div>
              <div className='flex flex-col flex-grow justify-between p-4'> 
                <div className='flex flex-col gap-2'>
                  <p className='font-semibold text-xl text-center'>{d.name}</p>
                  <p className="text-center text-[12px] md:text-[14px] line-clamp-3">{d.info}</p>
                </div>
                <Link to={d.link} className="flex justify-center">
                  <Button 
                    radius="full" 
                    className='bg-primary text-white text-lg px-3 md:px-4 py-2 rounded-full mt-5'
                  >
                    View Project
                  </Button>
                </Link>
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