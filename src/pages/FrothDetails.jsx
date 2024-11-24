import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import {Button} from "@nextui-org/react";
import GitHub from '/src/assets/github.svg';
import FrothTools from '../components/FrothTools';
import FrothSlides from '../components/FrothSlides';
import froth1 from '/src/assets/froth1.png';
import froth2 from '/src/assets/froth2.png';
import froth3 from '/src/assets/froth3.png';
import froth4 from '/src/assets/froth4.png';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';



function FrothDetails() {
  return (
    <div className="relative overflow-hidden">
     <div
    className="absolute top-0 left-0 right-0 h-[460px] bg-gradient-to-b from-gray-100 to-transparent -z-100 dark:opacity-[15%]"
    style={{
      backgroundImage: `
      linear-gradient(to right, rgba(229, 231, 235, 0.3) 2px, transparent 2px),
      linear-gradient(to bottom, rgba(229, 231, 235, 0.3) 2px, transparent 2px)
      `,
      backgroundSize: '130px 130px',
    }}
  />
    <div className="relative z-10">
    <Nav />
      <div className="pt-[100px] md-plus:pt-[130px]">
        <Link to="" className="text-primary hover:opacity-70 transition-opacity pl-4 xs:ml-10 sm-plus:ml-[2rem] md:ml-[4rem] md:mr-[4rem] md-x:ml-[6rem] md-x:mr-[6rem] lg:ml-[7rem] full:ml-[9rem]">
          ← Back to Works
        </Link>
        
        <div className='ml-6 mr-8 xs:ml-12 sm-plus:ml-[3rem] sm-x:mr-[6rem] md:ml-[6rem] md-x:ml-[8rem] lg:ml-[9rem] full:ml-[13rem]'>
        <div className="relative">
         {/* XL screen buttons - absolute positioned beside title */}
         <div className="xl:flex xl:items-center xl:justify-start xl:gap-8">
         <h1 className="font-bold uppercase text-[60px] sm-plus:text-[70px] xl:text-[90px] pt-[1rem] mb-0 text-[#2b2b2b] md:text-[78px] lg-plus:text-[98px] dark:text-white text-left md:leading-tight">
          <span className="text-primary">F</span>roth Matcha
        </h1>
          <div className="hidden xl:flex gap-4">
            <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9">
              <span className="text-[12px] md:text-[16px] font-medium whitespace-nowrap">
                <a href="https://matchacafe.bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer">Live Site</a>
              </span>
            </Button>
            <a href="https://github.com/nai-ada" className="hover:opacity-70 transition-opacity dark:invert">
              <img src={GitHub} alt="GitHub Logo" className='w-8'/>
            </a>
          </div>
        </div>
                
          <h2 className='xl:text-[20px]'>// Project <span className="font-bold">02</span> | Wordpress Website</h2>

          {/* Mobile buttons - hidden in xl */}
          <div className='flex xl:hidden justify-left gap-4 mt-4'>
            <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9">
              <span className="text-[12px] md:text-[16px] font-medium whitespace-nowrap">
                <a href="https://matchacafe.bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer">Live Site</a>
              </span>
            </Button>
            <a href="https://github.com/nai-ada" className="hover:opacity-70 transition-opacity dark:invert">
              <img src={GitHub} alt="GitHub Logo" className='w-8'/>
            </a>
          </div>
        </div>
      </div>

        <FadeIn>
        <div className='m-8 text-left mt-[12rem] md-plus:mt-[18rem] xs:ml-12 xs:mr-12 sm-plus:ml-[3rem] sm-plus:mr-[3rem] md:ml-[6rem] md:mr-[6rem] md-x:ml-[8rem] md-x:mr-[8rem] xl:w-[700px] lg:w-[800px] xl-plus:w-[1000px] lg:ml-[9rem] full:ml-[13rem]'>
            <h2 className="font-bold text-[24px] mb-8 xl:text-[30px]">Project Overview</h2>
            <p className='mb-8 xl:text-[18px]'>This project is the second rendition of it's original version, Galaxy Grid. It is an In-Browser game created entirely using vanilla <span className='font-bold'>JavaScript</span>, <span className='font-bold'>HTML</span> <span className='font-bold'>CSS</span>. Ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. If you are interested in viewing the first rendition of this project, you can <a href="https://nadiavespalec.com/galaxy-grid/" className="text-primary underline font-semibold hover:opacity-70 transition-opacity" target="_blank" 
            rel="noopener noreferrer">view it here</a>.</p>
            <div className="flex items-center justify-center xl:justify-start">
            <div className="w-4/5 max-w-[600px] border-b border-[#222222] dark:border-white mt-4"></div>
            <div className="w-[6px] h-[6px] bg-primary rounded-full ml-2 mt-4"></div>
            </div>
        </div>
        </FadeIn>

        
      <div className='relative text-left mt-20'>
        <FadeIn>
        {/* Content Section */}
        <div>
          {/* Mobile Slides */}
          <div className='mb-28 xl:hidden'>
          <h2 className="font-bold ml-8 mr-8 text-[24px] xs:ml-12 xs:mr-12 sm-plus:ml-[3rem] sm-plus:mr-[3rem] md:ml-[6rem] md:mr-[6rem] md-x:ml-[8rem] md-x:mr-[8rem] xl:text-[30px]">Project Highlights</h2>
            <FrothSlides />
          </div>
        </div>
        </FadeIn>

        {/* Desktop Images - Absolute positioning */}
        <div className="hidden xl:block xl:absolute xl:right-[6rem] lg-plus:right-[10rem] full:right-[14rem] xl:-top-[310px] xl:space-y-20">


        <FadeIn>
    <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 dark:border-[#414141] border-1">
      <img 
        src={froth1} 
        alt="Galaxy Grid Screenshot" 
        className="w-[280px] h-[280px] object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-white text-xl font-bold">Home</span>
      </div>
    </div>
  </FadeIn>

  <FadeIn>
    <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 dark:border-[#414141] border-1">
      <img 
        src={froth2} 
        alt="Galaxy Grid Screenshot" 
        className="w-[280px] h-[280px] object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-white text-xl font-bold">Menu</span>
      </div>
    </div>
  </FadeIn>

  <FadeIn>
    <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 dark:border-[#414141] border-1">
      <img 
        src={froth3} 
        alt="Galaxy Grid Screenshot" 
        className="w-[280px] h-[280px] object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-white text-xl font-bold">Menu Item</span>
      </div>
    </div>
  </FadeIn>


  <FadeIn>
    <div className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 dark:border-[#414141] border-1">
      <img 
        src={froth4} 
        alt="Galaxy Grid Screenshot" 
        className="w-[280px] h-[280px] object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="text-white text-xl font-bold">Locations</span>
      </div>
    </div>
  </FadeIn>
</div>
          </div>


        <FadeIn>
        <div className='m-8 text-left mt-20 xs:ml-12 xs:mr-12 sm-plus:ml-[3rem] sm-plus:mr-[3rem] md:ml-[6rem] md:mr-[6rem] md-x:ml-[8rem] md-x:mr-[8rem] xl:w-[700px] lg:w-[800px] xl-plus:w-[1000px] lg:ml-[9rem] full:ml-[13rem]'>
            <h2 className="font-bold text-[24px] mb-8 xl:text-[30px]">Key Takeaways</h2>
            <p className='xl:text-[18px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            <div className="flex items-center justify-center xl:justify-start">
            <div className="w-4/5 max-w-[600px] border-b border-[#222222] dark:border-white mt-10"></div>
            <div className="w-[6px] h-[6px] bg-primary rounded-full ml-2 mt-10"></div>
            </div>
        </div>
        </FadeIn>


        <FadeIn>
          <div className='text-left mt-20 xl:w-[800px] xl-plus:w-[1000px]'>
              <h2 className="font-bold ml-8 mr-8 text-[24px] xs:ml-12 xs:mr-12 sm-plus:ml-[3rem] sm-plus:mr-[3rem] md:ml-[6rem] md:mr-[6rem] md-x:ml-[8rem] md-x:mr-[8rem] xl:text-[30px] lg:ml-[9rem] full:ml-[13rem]">Project Tools</h2>
              <div className='mt-8 xs:ml-4 xs:mr-4 md:ml-[2.5rem] md:mr-[2.5rem] md-x:ml-[4.5rem] md-x:mr-[4.5rem] xl:mr-0 lg:ml-[5.5rem] full:ml-[9.5rem]'>
              <FrothTools />
              </div>
          </div>
        </FadeIn>

        <FadeIn>
        <div className='sm-plus:ml-[3rem] sm-plus:mr-[3rem] ml-8 mr-8 xs:ml-10 xs:mr-10 md:ml-[6rem] md:mr-[6rem] md-x:ml-[8rem] md-x:mr-[8rem] xl:w-[700px] lg:w-[800px] xl-plus:w-[1000px] lg:ml-[9rem] full:ml-[13rem]'>
          <h2 className="font-bold text-[24px] xl:text-[30px]">Notes</h2>
          <ul className="list-disc pl-5 space-y-3 marker:text-[#86A6F6] mt-8 mb-[28rem] xl:text-[18px]">
            <li>Lorem, ipsumid, tempora incidunt cumque dolore necessitatibus quia. Ex, quasi.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore et illo in ipsum dicta consectetur obcaecati! Similique odit, at repudiandae, magnam quae saepe quibusdam error quo sit porro praesentium!</li>
            <li>Lorem Loremdi pariatur illo dolor, in magnam, animi assumenda laborum minima fuga consectetur quod repellendus!</li>
          </ul>
        </div>
      </FadeIn>
        <div className='p-10'>

        </div>
  
        
        <Footer />
      </div>
    </div>
    </div>
  );
}

export default FrothDetails;