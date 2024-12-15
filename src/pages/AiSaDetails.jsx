import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import FadeLeft from '../components/FadeLeft';
import FadeRight from '../components/FadeRight';
import NavWorks from '../components/NavWorks';
import {Button} from "@nextui-org/react";
import GitHub from '/src/assets/github.svg';
import AiSaTools from '../components/AiSaTools';
import FooterWorks from '../components/FooterWorks';
import FadeIn from '../components/FadeIn';
import comingsoon1 from '/src/assets/comingsoonmock1.svg';
import comingsoon2 from '/src/assets/comingsoonmock2.svg';
import WorksCards from '../components/WorksCards';



function AiSaDetails() {
  const [activeSection, setActiveSection] = useState('overview');
  return (
    <div className="relative overflow-hidden">
  <div 
  className="absolute top-0 left-0 right-0 h-[460px] bg-gradient-to-b from-gray-100 to-transparent -z-100 dark:opacity-[8%]" 
  style={{
    width: '500%',
    marginLeft: '-18%',
    backgroundImage: `
      linear-gradient(to right, rgba(229, 231, 235, 0.25) 2px, transparent 2px),
      linear-gradient(to bottom, rgba(229, 231, 235, 0.25) 2px, transparent 2px)
    `,
    backgroundSize: '100px 100px',
  }}
/>


<div className="relative z-10">
  <NavWorks />
  <div className="pt-[100px] md:pt-[150px]">
    <div className="container mx-auto px-4 xl-x:px-0 lg-x:ml-20 xl-x:ml-0 pl-[0.2rem]">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1920px] flex flex-col xl-x:flex-row xl-x:items-start xl-x:justify-center gap-8">
      
            <div className='ml-4 mr-4 xs:ml-6 sm-plus:ml-8 lg:ml-[9rem] xl-x:m-0'>
              <HashLink 
                smooth
                to="/#works" 
                className="text-primary hover:opacity-70 transition-opacity block"
              >
                ← Back to Works
              </HashLink>

              <div className="relative mb-16">
                <div className="xl-x:flex xl-x:items-center xl-x:justify-start xl-x:gap-4">
                  <h1 className="font-bold uppercase text-[38px] xs:text-[45px] sm-plus:text-[55px] xl-x:text-[90px] pt-[1rem] mb-0 text-[#2b2b2b] md:text-[78px] md:ml-0 lg-plus:text-[98px] dark:text-white text-left md:leading-tight xl-x:whitespace-nowrap">
                    <span className="text-primary">A</span>ISafeguard.
                  </h1>
                  <div className="hidden xl-x:flex gap-4 mt-12">
                    <Button 
                      radius="full" 
                      className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4"
                    >
                      <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                        <a>Coming Soon</a>
                      </span>
                    </Button>
                  </div>
                </div>
                <h2 className='xl-x:text-[20px]'>// Project <span className="font-bold">05</span> | Chrome Extension & Website</h2>
                <div className='flex xl-x:hidden justify-left gap-4 mt-4'>
                  <Button 
                    radius="full" 
                    className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4"
                  >
                    <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                      <a>Coming Soon</a>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
      

   
            <div className='hidden xl-x:block w-[420px]'>
              <div className='relative bottom-32'>
                <div className='relative w-[400px] -z-10'>
                  <img 
                    src={comingsoon2} 
                    alt="Project Preview 3" 
                    className='w-[400px] h-auto'
                  />
                  <div className='absolute w-[250px] -right-[6rem] top-[8rem]'>
                    <img 
                      src={comingsoon1} 
                      alt="Menu Items Preview" 
                      className='w-[250px] h-auto'
                    />
                  </div>
                </div>
              </div>
            </div>
       
        </div>
      </div>

      <div className="hidden 2xl:block absolute lg:-left-56 xl-plus:-left-32 4xl:left-32" style={{ top: '1050px' }}>
        <div className="absolute left-1/2 bottom-[265%] -translate-x-1/2 flex flex-col items-center">
          <div className="w-[6px] h-[6px] bg-primary rounded-full mb-2"></div>
          <div className="border-l-1 border-[#222222] h-[170px] dark:border-white"></div>
        </div>
        <h1 className="font-bold uppercase text-[125px] origin-center -rotate-90 text-[#2b2b2b] dark:text-white whitespace-nowrap">
          <span className="text-primary">P</span>roject 05.
        </h1>
      </div>
    </div>

    {/* Mobile Images */}
    <FadeIn>
      <div className='xl-x:hidden flex justify-center mb-16'>
        <div className='relative w-fit'>
          <div className='relative w-[295px] xs:w-[330px] sm-plus:w-[380px] sm-x:w-[420px] -z-10'>
            <img 
              src={comingsoon2} 
              alt="Project Preview 3" 
              className='w-[295px] xs:w-[330px] sm-plus:w-[380px] sm-x:w-[420px] h-auto'
            />
            <div className='absolute w-[170px] xs:w-[180px] sm-plus:w-[200px] sm-x:w-[240px] sm-x:-right-16 -right-8 -bottom-[1rem]'>
              <img 
                src={comingsoon1} 
                alt="Menu Items Preview" 
                className='w-[170px] xs:w-[180px] sm-plus:w-[200px] sm-x:w-[240px] h-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>

        
            <div className='x-sm-plus:flex justify-center text-center'> 

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
                className={`border-primary ${activeSection === 'execution' ? 'bg-primary text-white' : 'bg-transparent text-[#222222] dark:text-white'} p-4 xs:p-5 border-2 min-w-16 h-8 md:min-w-20 md:h-10 m-[0.5rem]`}
                onClick={() => setActiveSection('execution')}
              >
                <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                  Project Execution
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
            
             
            </div>

            <FadeIn>
            {/* Overview Section */}
            <div style={{ display: activeSection === 'overview' ? 'block' : 'none' }} className='mx-8 sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-16'>
            <div className="flex items-center gap-4 mb-10 md:mx-8 lg:mx-16">
              <h2 className="font-bold text-[24px] xl:text-[30px] text-[#222222] dark:text-white">Project Overview</h2>
            </div>
            <p className='mb-6 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
              AISafeguard is a Chrome extension which is currently in development! Stay tuned for more information.
            </p>
    
          </div>
          </FadeIn>
          
            {/* Key Takeaways Section */}
            <div style={{ display: activeSection === 'takeaways' ? 'block' : 'none' }} className='mx-8 sm-plus:mx-16  md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
              <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Key Takeaways</h2>
              <p className='mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
                Stay tuned for more information to come!
              </p>
             
            </div>

            {/* execution Section */}
            <div style={{ display: activeSection === 'execution' ? 'block' : 'none' }} className='mx-8  sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
              <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Project Execution</h2>
              <p className='mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
               Stay tuned for more information to come!
              </p>
              {/* <ul className='mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white list-disc pl-6'>
                  <li className="mb-2">
                    <span className="font-semibold"></span> 
                  </li>
                  <li className="mb-2">
                  
                  </li>
                  <li className="mb-2">
                
                  </li>
                  <li className="mb-2">
               
                  </li>
                  <li className="mb-2">
                  
                  </li>
                  <li className="mb-2">
               
                  </li>
                  <li className="mb-2">
             
                  </li>
                </ul> */}
            </div>
       
            </div>

</div>

  

       
        <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-20 mb-28  sm-plus:mx-16'>
          <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Project Tools</h2>
          <div className='md:mx-8 lg:mx-16'>
            <AiSaTools />
          </div>
        </div>
     
  


      <FadeIn>
      <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16  sm-plus:mx-16'  id="other-works">
            <h2 className="font-bold text-[24px] mb-10  md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">My Other Works</h2>
          </div>
          <div className='mt-16'>
          <WorksCards currentProject="aisa" />
          </div>
        </FadeIn>
        <FooterWorks />
      </div>
   

  );
}

export default AiSaDetails;