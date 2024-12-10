import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import FadeLeft from '../components/FadeLeft';
import FadeRight from '../components/FadeRight';
import NavWorks from '../components/NavWorks';
import {Button} from "@nextui-org/react";
import GitHub from '/src/assets/github.svg';
import FigmaIcon from '/src/assets/figmalink.svg';
import TitanTools from '../components/TitanTools';
import FooterWorks from '../components/FooterWorks';
import FadeIn from '../components/FadeIn';
import titan1 from '/src/assets/titan1.svg';
import titan2 from '/src/assets/titan2.svg';
import WorksCards from '../components/WorksCards';



function TitanDetails() {
  const [activeSection, setActiveSection] = useState('overview');
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
  <div className="pt-[100px] md:pt-[150px]">
    <div className="container mx-auto px-4 xl-x:px-0 lg-x:ml-20 xl-x:ml-0">
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
                  <h1 className="font-bold uppercase text-[60px] sm-plus:text-[70px] xl-x:text-[90px] pt-[1rem] mb-0 text-[#2b2b2b] md:text-[78px] md:ml-0 lg-plus:text-[98px] dark:text-white text-left md:leading-tight xl-x:whitespace-nowrap">
                    <span className="text-primary">T</span>itan Tech.
                  </h1>
                  <div className="hidden xl-x:flex gap-4 mt-12">
                    <Button 
                      radius="full" 
                      className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4"
                    >
                      <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                        <a href="https://nadiavespalec.com/titan-tech-homepage/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                      </span>
                    </Button>
                    <a href="https://www.figma.com/design/yj4cQAMZUmqemq0xycaFmc/Untitled?node-id=0-1" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity dark:invert">
                      <img src={FigmaIcon} alt="Figma Logo" className='w-8 xs:w-9'/>
                    </a>
                  </div>
                </div>
                <h2 className='xl-x:text-[20px]'>// Project <span className="font-bold">07</span> | Landing Page Recreation</h2>
                <div className='flex xl-x:hidden justify-left gap-4 mt-4'>
                  <Button 
                    radius="full" 
                    className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4"
                  >
                    <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                      <a href="https://nadiavespalec.com/titan-tech-homepage/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </span>
                  </Button>
                  <a href="https://www.figma.com/design/yj4cQAMZUmqemq0xycaFmc/Untitled?node-id=0-1" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity dark:invert">
                    <img src={FigmaIcon} alt="Figma Logo" className='w-8 xs:w-9'/>
                  </a>
                </div>
              </div>
            </div>
   

     
            <div className='hidden xl-x:block w-[420px]'>
              <div className='relative bottom-32'>
                <div className='relative w-[400px] -z-10'>
                  <img 
                    src={titan2} 
                    alt="Project Preview 3" 
                    className='w-[400px] h-auto'
                  />
                  <div className='absolute w-[250px] -right-[6rem] top-[8rem]'>
                    <img 
                      src={titan1} 
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
          <span className="text-primary">P</span>roject 07.
        </h1>
      </div>
    </div>

    {/* Mobile Images */}
    <FadeIn>
      <div className='xl-x:hidden flex justify-center mb-16'>
        <div className='relative w-fit'>
          <div className='relative w-[295px] xs:w-[330px] sm-plus:w-[380px] sm-x:w-[420px] -z-10'>
            <img 
              src={titan2} 
              alt="Project Preview 3" 
              className='w-[295px] xs:w-[330px] sm-plus:w-[380px] sm-x:w-[420px] h-auto'
            />
            <div className='absolute w-[170px] xs:w-[180px] sm-plus:w-[200px] sm-x:w-[240px] sm-x:-right-16 -right-8 -bottom-[1rem]'>
              <img 
                src={titan1} 
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

            {/* Overview Section */}
            <div style={{ display: activeSection === 'overview' ? 'block' : 'none' }} className='mx-8 sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-16'>
            <div className="flex items-center gap-4 mb-10 md:mx-8 lg:mx-16">
              <h2 className="font-bold text-[24px] xl:text-[30px] text-[#222222] dark:text-white">Project Overview</h2>
            </div>
            <p className='mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
            For this project, I was able to execute a precise implementation of Titan Technologies' landing page, transforming their Figma mockup into a fully functional webpage. 
            I was able to maintain strict adherence to design specifications while strategically integrating enhanced features to improve user experience.
            </p>
          </div>
          
            {/* Key Takeaways Section */}
            <div style={{ display: activeSection === 'takeaways' ? 'block' : 'none' }} className='mx-8 sm-plus:mx-16  md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
              <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Key Takeaways</h2>
              <p className='mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
              Through the completion of this project, I learned to deliver pixel-perfect implementations while enhancing user experience through strategic customizations. 
              I feel I was able to demonstrate strong attention to detail and efficient execution while maintaining design fidelity under tight deadlines, which is something I hadn't experienced prior to 
              completing this project.
              </p>
             
            </div>

            {/* execution Section */}
            <div style={{ display: activeSection === 'execution' ? 'block' : 'none' }} className='mx-8  sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
              <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Project Execution</h2>
              <ul className='mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white list-disc pl-6'>
                  <li className="mb-2">
                  Used JavaScript for <span className="text-primary font-semibold">subtle animations</span> to make the page stand out. Predominantly used HTML and CSS to <span className="text-primary font-semibold">recreate the mockup</span> that was provided
                  </li>
                  <li className="mb-2">
                    Included all aspects of the design that the client requested, accurately displaying information and styling to adhere to the original design
                  </li>
                </ul>
              
            </div>
            </div>

    {/* Highlights Section */}
    <div style={{ display: activeSection === 'highlights' ? 'block' : 'none' }} className='mx-8  sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
    <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Project Highlights</h2>
    <p className='mb-8 xl:text-[16px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio ex eum cupiditate rerum quibusdam dolore, necessitatibus fugiat placeat debitis, eaque distinctio omnis quisquam quod adipisci alias sequi quo nemo?
              </p>
  <div className='grid grid-cols-1 gap-8 max-w-[600px] mx-auto px-4'>
    <div className='group bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground border-1 dark:border-[#414141] rounded-lg  shadow-[0_4px_7px_rgba(0,0,0,0.3)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.3)]  transition-transform duration-300 hover:scale-105'>
      <div className='relative overflow-hidden rounded-lg h-[260px]'>
        <img 
          src={titan1} 
          alt="Homepage Preview" 
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <h3 className='text-white text-xl font-bold'>Landing</h3>
        </div>
      </div>
    </div>

    <div className='group bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground border-1 dark:border-[#414141] rounded-lg  shadow-[0_4px_7px_rgba(0,0,0,0.3)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.3)]  transition-transform duration-300 hover:scale-105'>
      <div className='relative overflow-hidden rounded-lg h-[260px]'>
        <img 
          src={titan2} 
          alt="Homepage Preview" 
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <h3 className='text-white text-xl font-bold'>About</h3>
        </div>
      </div>
    </div>


</div>
        
</div>
</div>

  
  
        <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-20 mb-28  sm-plus:mx-16 '>
          <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Project Tools</h2>
          <div className='md:mx-8 lg:mx-16'>
            <TitanTools />
          </div>
        </div>



      <FadeIn>
      <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16  sm-plus:mx-16' id="other-works">
            <h2 className="font-bold text-[24px] mb-10  md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">My Other Works</h2>
          </div>
          <div className='mt-16'>
          <WorksCards currentProject="titan" />
          </div>
        </FadeIn>
        <FooterWorks />
      </div>
   

  );
}

export default TitanDetails;