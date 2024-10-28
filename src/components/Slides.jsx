import React, { useRef, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import aisa from '/src/assets/aisa.png';
import clippr from '/src/assets/clippr.png';
import titan from '/src/assets/titan.png';
import portfolio from '/src/assets/portfolio.png';
import galaxy from '/src/assets/gg.png';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // add arrows (THAT LOOK GOOD)
    // arrows: true,
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
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Galaxy Grid 2.0`,
      img: galaxy,
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Portfolio`,
      img: portfolio,
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Titan Tech`,
      img: titan,
      info: `Responsive web application where users can explore and interact with movie data from The Movie Database (TMDB) API. Team project.`
    },
    {
      name: `ClipprDB`,
      img: clippr,
      info: `Responsive web application where users can explore and interact with movie data from The Movie Database (TMDB) API. Team project.`
      
    },
  ];

  return (
    <div className='w-3/4 m-auto relative'>
      <div className='mt-10'>
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
  );
};

export default Slides;