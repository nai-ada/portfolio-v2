import React, { useRef } from 'react';
import galaxy2 from '/src/assets/gg2.png';
import galaxy3 from '/src/assets/gg3.png';
import galaxy4 from '/src/assets/gg4.png';
import galaxy from '/src/assets/gg.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nxt from '/src/assets/next.svg';
import prev from '/src/assets/prev.svg';


  const GalaxyGridSlides = () => {
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
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
  
    const projectData = [
      {
        img: galaxy,
        
      },
      {
        img: galaxy2,
       
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
          <div className='mt-16'>
            <button
              className="hidden md:block absolute left-[-70px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
              onClick={previous}
            >
              <img src={prev} alt="prev" width={50} className='invert'/>
            </button>
            
            <button
              className="hidden md:block absolute right-[-70px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-primary/80 transition-colors duration-300"
              onClick={next}
            >
              <img src={nxt} alt="next" width={50} className='invert'/>
            </button>
            <Slider ref={sliderRef} {...settings}>
              {projectData.map((d, index) => (
                <div key={index} className='h-[250px] md:h-[325px] max-w-auto bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground dark:border-[#414141] border-1 rounded-xl flex flex-col m-2 shadow-[0_4px_7px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.1)]'>
                  <div className='relative group overflow-hidden rounded-xl h-full w-full'>
                    <div className=' h-full w-full'>
                      <img 
                        src={d.img} 
                        alt="" 
                        className='w-full h-full object-cover rounded-xl'
                      />
                      <div className='absolute inset-0 bg-gradient-to-br from-black/50 to-transparent opacity-0 overlay'></div>
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 overlay'>
                        <span className='text-white text-xl font-bold'>{d.title}</span>
                      </div>
                    </div>
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