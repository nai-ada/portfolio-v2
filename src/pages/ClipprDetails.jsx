import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

import NavWorks from '../components/NavWorks';
import {Button} from "@nextui-org/react";
import GitHub from '/src/assets/github.svg';
import ClipprTools from '../components/ClipprTools';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import clippr1 from '/src/assets/clippr.png';
import clippr2 from '/src/assets/clippr2.png';
import clippr3 from '/src/assets/clippr3.png';
import WorksCards from '../components/WorksCards';



function ClipprDetails() {
  const [activeSection, setActiveSection] = useState('highlights');
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[460px] bg-gradient-to-b from-gray-100 to-transparent -z-100 dark:opacity-[15%]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229, 231, 235, 0.3) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(229, 231, 235, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: '120px 120px',
        }}
      />
      <div className="relative z-10">
        <NavWorks />
        <div className="pt-[100px] md-plus:pt-[150px]">
        <HashLink 
          smooth
          to="/#works" 
          className="text-primary hover:opacity-70 transition-opacity pl-4 xs:ml-2 sm-plus:ml-[2rem] md:ml-[4rem] md:mr-[4rem] md-x:ml-[6rem] md-x:mr-[6rem] lg:ml-[7rem] full:ml-[9rem]"
        >
          ← Back to All Works
        </HashLink>

          <div className='ml-6 mr-8 xs:ml-8 sm-plus:ml-[3rem] sm-x:mr-[6rem] md:ml-[6rem] md-x:ml-[8rem] lg:ml-[9rem] full:ml-[13rem]'>
            <div className="relative mb-40">
              <div className="xl:flex xl:items-center xl:justify-start xl:gap-4">
                <h1 className="font-bold uppercase text-[60px] sm-plus:text-[70px] xl:text-[90px] pt-[1rem] mb-0 text-[#2b2b2b] md:text-[78px] md:ml-0 lg-plus:text-[98px] dark:text-white text-left md:leading-tight">
                  <span className="text-primary">C</span>lippr DB.
                </h1>
                <div className="hidden xl:flex gap-4 mt-12">
                  <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4">
                    <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                    <a href="https://nadiavespalec.com/clippr-database/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </span>
                  </Button>
                  <a href="https://github.com/nai-ada/clippr" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity dark:invert">
                    <img src={GitHub} alt="GitHub Logo" className='w-8 xs:w-9'/>
                  </a>
                </div>
              </div>
              <h2 className='xl:text-[20px]'>// Project <span className="font-bold">06</span> | React Movie Database</h2>
              <div className='flex xl:hidden justify-left gap-4 mt-4'>
                <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4">
                  <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                  <a href="https://nadiavespalec.com/clippr-database/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </span>
                </Button>
                <a href="https://github.com/nai-ada/clippr" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity dark:invert">
                  <img src={GitHub} alt="GitHub Logo" className='w-8 xs:w-9'/>
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute lg:-left-56 xl-plus:-left-32" style={{ top: '1050px' }}>
          <div className="absolute left-1/2 bottom-[265%] -translate-x-1/2 flex flex-col items-center">
            <div className="w-[6px] h-[6px] bg-primary rounded-full mb-2"></div>
            <div className="border-l-1 border-[#222222] h-[170px] dark:border-white"></div>
          </div>
          <h1 className="font-bold uppercase text-[125px] origin-center -rotate-90 text-[#2b2b2b] dark:text-white whitespace-nowrap">
            <span className="text-primary">P</span>roject 06.
          </h1>
      </div>

          
            <div className='x-sm-plus:flex justify-center text-center'> 
              <Button 
                radius="full" 
                className={`border-primary ${activeSection === 'highlights' ? 'bg-primary text-white' : 'bg-transparent text-[#222222] dark:text-white'} p-4 xs:p-5 border-2 min-w-16 h-8 md:min-w-20 md:h-10 m-[0.5rem]`}
                onClick={() => setActiveSection('highlights')}
              >
                <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                  Highlights
                </span>
              </Button>
              <Button 
                radius="full" 
                className={`border-primary ${activeSection === 'overview' ? 'bg-primary text-white' : 'bg-transparent text-[#222222] dark:text-white'} p-4 xs:p-5 border-2 min-w-16 h-8 md:min-w-20 md:h-10 ml-2 m-[0.5rem]`}
                onClick={() => setActiveSection('overview')}
              >
                <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                  Project Overview
                </span>
              </Button>
             
              <Button 
                radius="full" 
                className={`border-primary ${activeSection === 'takeaways' ? 'bg-primary text-white' : 'bg-transparent text-[#222222] dark:text-white'} p-4 xs:p-5 border-2 min-w-16 h-8 md:min-w-20 md:h-10 m-[0.5rem]`}
                onClick={() => setActiveSection('takeaways')}
              >
                <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                  Key Takeaways
                </span>
              </Button>
              <Button 
                radius="full" 
                className={`border-primary ${activeSection === 'roles' ? 'bg-primary text-white' : 'bg-transparent text-[#222222] dark:text-white'} p-4 xs:p-5 border-2 min-w-16 h-8 md:min-w-20 md:h-10 m-[0.5rem]`}
                onClick={() => setActiveSection('roles')}
              >
                <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                  My Roles
                </span>
              </Button>
              
            </div>

            {/* Overview Section */}
            <div style={{ display: activeSection === 'overview' ? 'block' : 'none' }} className='mx-8 sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-16'>
            <div className="flex items-center gap-4 mb-10 md:mx-8 lg:mx-16">
              <h2 className="font-bold text-[24px] xl:text-[30px] text-[#222222] dark:text-white">Project Overview</h2>
            </div>
            <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quia aperiam sequi odio beatae neque atque ad labore suscipit perspiciatis provident voluptas a, incidunt soluta veniam, qui eveniet temporibus fuga.
            </p>
          </div>
          
            {/* Key Takeaways Section */}
            <div style={{ display: activeSection === 'takeaways' ? 'block' : 'none' }} className='mx-8 sm-plus:mx-16  md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
              <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Key Takeaways</h2>
              <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates sed corporis voluptate natus quibusdam cum, excepturi earum numquam dolores veritatis suscipit ipsam? Nihil temporibus soluta vitae quod neque nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi veniam aliquam culpa sint nostrum, consequatur odit laboriosam neque provident voluptatum magni esse eum exercitationem, voluptatibus ad cupiditate hic soluta quam!
              </p>
             
            </div>

            {/* Roles Section */}
            <div style={{ display: activeSection === 'roles' ? 'block' : 'none' }} className='mx-8  sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
              <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">My Roles</h2>
              <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio ex eum cupiditate rerum quibusdam dolore, necessitatibus fugiat placeat debitis, eaque distinctio omnis quisquam quod adipisci alias sequi quo nemo?
              </p>
              <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio ex eum cupiditate rerum quibusdam dolore, necessitatibus fugiat placeat debitis, eaque distinctio omnis quisquam quod adipisci alias sequi quo nemo?
              </p>
              
            </div>
            </div>

    {/* Highlights Section */}
    <div style={{ display: activeSection === 'highlights' ? 'block' : 'none' }} className='mx-8  sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
    <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Project Highlights</h2>
    <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio ex eum cupiditate rerum quibusdam dolore, necessitatibus fugiat placeat debitis, eaque distinctio omnis quisquam quod adipisci alias sequi quo nemo?
              </p>
  <div className='grid grid-cols-1 gap-8 max-w-[600px] mx-auto px-4'>
    <div className='group bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground border-1 dark:border-[#414141] rounded-lg  shadow-[0_4px_7px_rgba(0,0,0,0.3)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.3)]  transition-transform duration-300 hover:scale-105'>
      <div className='relative overflow-hidden rounded-lg h-[260px]'>
        <img 
          src={clippr1} 
          alt="Homepage Preview" 
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <h3 className='text-white text-xl font-bold'>Homepage</h3>
        </div>
      </div>
    </div>

    <div className='group bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground border-1 dark:border-[#414141] rounded-lg  shadow-[0_4px_7px_rgba(0,0,0,0.3)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.3)]  transition-transform duration-300 hover:scale-105'>
      <div className='relative overflow-hidden rounded-lg h-[260px]'>
        <img 
          src={clippr2} 
          alt="Homepage Preview" 
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <h3 className='text-white text-xl font-bold'>Movies</h3>
        </div>
      </div>
    </div>


    <div className='group bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground  border-1  dark:border-[#414141] rounded-lg shadow-[0_4px_7px_rgba(0,0,0,0.3)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.3)]  transition-transform duration-300 hover:scale-105'>
      <div className='relative overflow-hidden rounded-lg h-[260px]'>
        <img 
          src={clippr3} 
          alt="Menu Items Preview" 
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <h3 className='text-white text-xl font-bold'>Favorites</h3>
        </div>
      </div>
    </div>
    </div>
        
</div>
</div>

  
       
        <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-20 mb-28  sm-plus:mx-16 '>
          <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Project Tools</h2>
          <div className='md:mx-8 lg:mx-16'>
            <ClipprTools />
          </div>
        </div>
     


      <FadeIn>
      <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16  sm-plus:mx-16'  id="other-works">
            <h2 className="font-bold text-[24px] mb-10  md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">My Other Works</h2>
          </div>
          <div className='mt-16'>
          <WorksCards currentProject="clippr" />
          </div>
        </FadeIn>
        <Footer />
      </div>
   

  );
}

export default ClipprDetails;