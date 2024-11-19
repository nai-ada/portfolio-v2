import React, { useRef } from 'react';
import galaxy2 from '/src/assets/gg2.png';
import galaxy3 from '/src/assets/gg3.png';
import galaxy4 from '/src/assets/gg4.png';
import galaxy from '/src/assets/gg.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalaxyGridSlides = () => {

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    speed: 800,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,      
    arrows: false, 
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const projectData = [
    {
      img: galaxy2,
    },
    {
      img: galaxy,
    },
    {
      img: galaxy3,
    },
    {
        img: galaxy4,
      },
  ];

  return (
    <>
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
        <Slider ref={sliderRef} {...settings} >
            {projectData.map((d, index) => (
            <div key={index} className='h-[230px] max-w-auto bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground dark:border-[#414141] border-1 rounded-xl flex flex-col m-2 shadow-[0_4px_7px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.1)]'>
                <div className='bg-[#DDECFF] rounded-xl h-full w-full overflow-hidden'> 
                <img 
                    src={d.img} 
                    alt="" 
                    className='w-full h-full object-cover rounded-xl' 
                />
                </div>
            </div>
            ))}
        </Slider>
        </div>
      </div>
    </>
  );
};

export default GalaxyGridSlides;