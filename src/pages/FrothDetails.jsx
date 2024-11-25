import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import {Button} from "@nextui-org/react";
import GitHub from '/src/assets/github.svg';
import FrothTools from '../components/FrothTools';
import FrothSlides from '../components/WorksCards';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import froth1 from '/src/assets/froth1.png';
import froth2 from '/src/assets/froth2.png';
import froth3 from '/src/assets/froth3.png';
import froth4 from '/src/assets/froth4.png';
import WorksCards from '../components/WorksCards';



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
      backgroundSize: '120px 120px',
    }}
  />
    <div className="relative z-10">
    <Nav />
      <div className="pt-[100px] md-plus:pt-[150px]">
        <Link to="" className="text-primary hover:opacity-70 transition-opacity pl-4 xs:ml-10 sm-plus:ml-[2rem] md:ml-[4rem] md:mr-[4rem] md-x:ml-[6rem] md-x:mr-[6rem] lg:ml-[7rem] full:ml-[9rem]">
          ← Back to Works
        </Link>
        
        <div className='ml-6 mr-8 xs:ml-12 sm-plus:ml-[3rem] sm-x:mr-[6rem] md:ml-[6rem] md-x:ml-[8rem] lg:ml-[9rem] full:ml-[13rem]'>
        <div className="relative mb-40">
         {/* XL screen buttons - absolute positioned beside title */}
         <div className="xl:flex xl:items-center xl:justify-start xl:gap-4">
         <h1 className="font-bold uppercase text-[60px] sm-plus:text-[70px] xl:text-[90px] pt-[1rem] mb-0 text-[#2b2b2b] md:text-[78px] lg-plus:text-[98px] dark:text-white text-left md:leading-tight">
          <span className="text-primary">F</span>roth Matcha.
        </h1>
          <div className="hidden xl:flex gap-4 mt-12">
            <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4">
              <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                <a href="https://matchacafe.bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer">Live Site</a>
              </span>
            </Button>
            <a href="https://github.com/nai-ada" className="hover:opacity-70 transition-opacity dark:invert">
              <img src={GitHub} alt="GitHub Logo" className='w-8 xs:w-9'/>
            </a>
          </div>
        </div>
                
          <h2 className='xl:text-[20px]'>// Project <span className="font-bold">02</span> | Wordpress Website</h2>

          {/* Mobile buttons - hidden in xl */}
          <div className='flex xl:hidden justify-left gap-4 mt-4'>
            <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4">
              <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                <a href="https://matchacafe.bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer">Live Site</a>
              </span>
            </Button>
            <a href="https://github.com/nai-ada" className="hover:opacity-70 transition-opacity dark:invert">
              <img src={GitHub} alt="GitHub Logo" className='w-8 xs:w-9'/>
            </a>
          </div>
        </div>
      </div>

     
      <div className="hidden lg-plus:block absolute lg-plus:-left-56 xl-plus:-left-32 top-[80%] -translate-y-1/2">
  <FadeIn>
    <div className="absolute left-1/2 bottom-[265%] -translate-x-1/2 flex flex-col items-center">
      <div className="w-[6px] h-[6px] bg-primary rounded-full mb-2"></div>
      <div className="border-l-1 border-[#222222] h-[170px] dark:border-white"></div>
    </div>
    <h1 className="font-bold uppercase text-[125px] origin-center -rotate-90 text-[#2b2b2b] dark:text-white whitespace-nowrap">
      <span className="text-primary">P</span>roject 01.
    </h1>
  </FadeIn>
</div>


        <FadeIn>
          <div className='x-sm-plus:flex justify-center text-center'>
             <Button radius="full" className="border-primary hover:bg-primary hover:!opacity-[100%] p-4 xs:p-5 border-2 bg-transparent text-white min-w-16 h-8 md:min-w-20 md:h-10 ml-2 m-[0.5rem]">
              <span className="text-[12px] text-[#222222] dark:text-white md:text-[14px] font-medium whitespace-nowrap">
                Project Overview
              </span>
          </Button>

          <Button radius="full" className=" bg-primary border-primary xs:p-5 p-4 border-primary border-2 text-white min-w-16 h-8 md:min-w-20 md:h-10 m-[0.5rem]">
              <span className="text-[12px]  md:text-[14px] font-medium whitespace-nowrap">
                Key Takeaways
              </span>
          </Button>

          <Button radius="full" className=" bg-primary border-primary border-primary border-2 xs:p-5 p-4 text-white min-w-16 h-8 md:min-w-20 md:h-10 m-[0.5rem]">
              <span className="text-[12px]  md:text-[14px] font-medium whitespace-nowrap">
                My Roles
              </span>
          </Button>

          <Button radius="full" className=" bg-primary border-primary border-2 xs:p-5 p-4 text-white min-w-16 h-8 md:min-w-20 md:h-10 m-[0.5rem]">
              <span className="text-[12px]  md:text-[14px] font-medium whitespace-nowrap">
                Highlights
              </span>
          </Button>
    </div>
         
          <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[1000px] text-left mt-16'>
            <h2 className="font-bold text-[24px] mb-10  md:mx-8 lg:mx-16 xl:text-[36px] md:text-left">Project Overview</h2>
            <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 '>This project is the second rendition of its original version, Galaxy Grid. It is an In-Browser game created entirely using vanilla <span className='font-bold'>JavaScript</span>, <span className='font-bold'>HTML</span> <span className='font-bold'>CSS</span>. Ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. If you are interested in viewing the first rendition of this project, you can <a href="https://nadiavespalec.com/galaxy-grid/" className="text-primary underline font-semibold hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">view it here</a>.</p>
            <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 '>This project is the second rendition of its original version, Galaxy Grid. It is an In-Browser game created entirely using vanilla <span className='font-bold'>JavaScript</span>, <span className='font-bold'>HTML</span> <span className='font-bold'>CSS</span>. Ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. If you are interested in viewing the first rendition of this project, you can <a href="https://nadiavespalec.com/galaxy-grid/" className="text-primary underline font-semibold hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">view it here</a>.</p>

          </div>
          <div className="flex items-center justify-center">
            <div className="w-4/5 max-w-[600px] border-b border-[#222222] dark:border-white mt-8"></div>
            <div className="w-[6px] h-[6px] bg-primary rounded-full ml-2 mt-[1.9rem]"></div>
            </div>
        </FadeIn>
        </div>

        <FadeIn>
        <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[1000px] text-left mt-20 mb-28'>
          <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[36px] md:text-left">Project Tools</h2>
          <div className='md:mx-8 lg:mx-16'>
            <FrothTools />
          </div>
        </div>
      </FadeIn>
      </div>

      <FadeIn>
      <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[1000px] text-left mt-16'>
            <h2 className="font-bold text-[24px] mb-10  md:mx-8 lg:mx-16 xl:text-[36px] md:text-left">View Other Works</h2>
          </div>
          <div className='mt-16'>
        <WorksCards/>
          </div>
        </FadeIn>

       


        {/* <FadeIn>
        <div className='m-8 text-left mt-20 xs:ml-12 xs:mr-12 sm-plus:ml-[3rem] sm-plus:mr-[3rem] md:ml-[6rem] md:mr-[6rem] md-x:ml-[8rem] md-x:mr-[8rem] xl:w-[700px] lg:w-[800px] xl-plus:w-[1000px] lg:ml-[9rem] full:ml-[13rem]'>
            <h2 className="font-bold text-[24px] mb-8 xl:text-[36px]">Key Takeaways</h2>
            <p className='xl:text-[18px] mb-8 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
           
        </div>
        </FadeIn> */}

        {/* <div className='relative text-left mt-20'>
  <div className='flex flex-col items-center x-sm-plus:grid x-sm-plus:grid-cols-2 x-sm-plus:gap-4 x-sm-plus:max-w-[720px] x-sm-plus:mx-auto'>
    <div className='group h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px] bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground dark:border-[#414141] rounded-lg flex flex-col m-2 shadow-[0_4px_7px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.1)] transition-transform duration-300 x-sm-plus:hover:scale-105'>
      <div className='relative overflow-hidden rounded-lg h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px]'>
        <div className='h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px]'>
          <img 
            src={froth1} 
            alt="" 
            className='h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px] object-cover rounded-lg'
          />
          <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg hidden x-sm-plus:flex'>
            <h3 className='text-white text-2xl font-bold'>Homepage</h3>
          </div>
        </div>
      </div>
    </div>

    <div className='group h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px] bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground dark:border-[#414141] rounded-lg flex flex-col m-2 shadow-[0_4px_7px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.1)] transition-transform duration-300 x-sm-plus:hover:scale-105'>
      <div className='relative overflow-hidden rounded-lg h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px]'>
        <div className='h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px]'>
          <img 
            src={froth2} 
            alt="" 
            className='h-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px] object-cover rounded-lg'
          />
          <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg hidden x-sm-plus:flex'>
            <h3 className='text-white text-2xl font-bold'>Menu Items Page</h3>
          </div>
        </div>
      </div>
    </div>

    <div className='group h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px] bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground dark:border-[#414141] rounded-lg flex flex-col m-2 shadow-[0_4px_7px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.1)] transition-transform duration-300 x-sm-plus:hover:scale-105'>
      <div className='relative overflow-hidden rounded-lg h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px]'>
        <div className='h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px]'>
          <img 
            src={froth3} 
            alt="" 
            className='h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px] object-cover rounded-lg'
          />
          <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg hidden x-sm-plus:flex'>
            <h3 className='text-white text-2xl font-bold'>Project Title 3</h3>
          </div>
        </div>
      </div>
    </div>

    <div className='group h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px] bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground dark:border-[#414141] rounded-lg flex flex-col m-2 shadow-[0_4px_7px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.1)] transition-transform duration-300 x-sm-plus:hover:scale-105'>
      <div className='relative overflow-hidden rounded-lg h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px]'>
        <div className='h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px]'>
          <img 
            src={froth4} 
            alt="" 
            className='h-[250px] w-[250px] x-sm-plus:h-[300px] x-sm-plus:w-[300px] object-cover rounded-lg'
          />
          <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg hidden x-sm-plus:flex'>
            <h3 className='text-white text-2xl font-bold'>Project Title 4</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */}
     

        
        {/* <FadeIn>
        <div className='m-8 text-left mt-20 xs:ml-12 xs:mr-12 sm-plus:ml-[3rem] sm-plus:mr-[3rem] md:ml-[6rem] md:mr-[6rem] md-x:ml-[8rem] md-x:mr-[8rem] xl:w-[700px] lg:w-[800px] xl-plus:w-[1000px] lg:ml-[9rem] full:ml-[13rem]'>
            <h2 className="font-bold text-[24px] mb-8 xl:text-[36px]">My Role</h2>
            <p className='xl:text-[18px] mb-8 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            <div className="flex items-center justify-center xl:justify-start">
            <div className="w-4/5 max-w-[600px] border-b border-[#222222] dark:border-white mt-8"></div>
            <div className="w-[6px] h-[6px] bg-primary rounded-full ml-2 mt-[1.9rem]"></div>
            </div>
        </div>
        </FadeIn> */}


     
    
        <Footer />
      </div>
   

  );
}

export default FrothDetails;