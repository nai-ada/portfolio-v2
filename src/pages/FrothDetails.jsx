import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import NavWorks from '../components/NavWorks';
import {Button} from "@nextui-org/react";
import GitHub from '/src/assets/github.svg';
import FrothTools from '../components/FrothTools';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';
import froth1 from '/src/assets/froth1.png';
import froth2 from '/src/assets/froth2.png';
import froth3 from '/src/assets/froth3.png';
import froth4 from '/src/assets/froth4.png';
import WorksCards from '../components/WorksCards';


function FrothDetails() {
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
                  <span className="text-primary">F</span>roth Matcha.
                </h1>
                <div className="hidden xl:flex gap-4 mt-12">
                  <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4">
                    <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                      <a href="https://matchacafe.bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </span>
                  </Button>
                  <a href="https://github.com/htpwebdesign/matchacafe-theme" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity dark:invert">
                    <img src={GitHub} alt="GitHub Logo" className='w-8 xs:w-9'/>
                  </a>
                </div>
              </div>
              <h2 className='xl:text-[20px]'>// Project <span className="font-bold">01</span> | Wordpress Capstone</h2>
              <div className='flex xl:hidden justify-left gap-4 mt-4'>
                <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 xs:p-5 p-4">
                  <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">
                    <a href="https://matchacafe.bcitwebdeveloper.ca/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </span>
                </Button>
                <a href="https://github.com/htpwebdesign/matchacafe-theme" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity dark:invert">
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
            <span className="text-primary">P</span>roject 01.
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
            <p className='mb-6 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
            This project is a dynamic cafe website developed as the final <span className="font-semibold text-[#86A6F6]">Capstone project</span> for the BCIT Front-End Web Developer program. 
            This project was built with <span className="font-semibold text-[#86A6F6]">WordPress</span>, using advanced development techniques like <span className="font-semibold text-[#86A6F6]">custom taxonomies and post types</span>, 
            which allows for a fully customized user experience.
            </p>

            <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
            This website features an interactive menu system where visitors can explore individual menu items, alongside a homepage that integrates
            live Instagram feed detailing the cafe's menu items. 
            Additional features include <span className="font-semibold text-[#86A6F6]">cafe locations</span>, <span className="font-semibold text-[#86A6F6]">career opportunities</span>, and a <span className="font-semibold text-[#86A6F6]">contact page</span>. 
            The development process utilized essential WordPress 
            tools such as <span className="font-semibold text-[#86A6F6]">Jetpack</span> for enhanced functionality, and <span className="font-semibold text-[#86A6F6]">WP Migrate</span> for deployment management.
            </p>
          </div>
          
            {/* Key Takeaways Section */}
            <div style={{ display: activeSection === 'takeaways' ? 'block' : 'none' }} className='mx-8 sm-plus:mx-16  md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
              <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Key Takeaways</h2>
              <p className='mb-6 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
              Since this project was highly collaborative, I feel I've gained valuable <span className="font-semibold text-[#86A6F6]">experience working with a team</span>. I learned to overcome 
              various challenges, including <span className="font-semibold text-[#86A6F6]">proper task delegation</span>, <span className="font-semibold text-[#86A6F6]">conflict-free GitHub merging</span>, 
              and effective <span className="font-semibold text-[#86A6F6]">team communication</span>. This experience enhanced my understanding of <span className="font-semibold text-[#86A6F6]">version control best practices
              </span>, <span className="font-semibold text-[#86A6F6]">WordPress development workflows</span>, and the importance 
              of communication when multiple developers work on the same codebase. Additionally, I developed skills in<span className="font-semibold text-[#86A6F6]"> maintaining consistent 
              styling</span> across different developers' contributions, which I initally found to be a challenge.
              </p>

              <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
              Initially, I found WordPress development to be quite challenging. However, after working on this larger-scale project, 
              I've developed much more confidence in my abilities and look forward to taking on more WordPress projects in the future. 
              </p>
             
            </div>

            {/* Roles Section */}
            <div style={{ display: activeSection === 'roles' ? 'block' : 'none' }} className='mx-8  sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
              <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">My Roles</h2>
              <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
              My responsibilities included utilizing an <span className="font-semibold text-[#86A6F6]">Instagram Feed plugin</span> to display images on the homepage. I was also in charge of 
              creating <span className="font-semibold text-[#86A6F6]">custom taxonomies and CPTs</span> (Custom Post Types) to display individual menu items. 
              For the <span className="font-semibold text-[#86A6F6]">individual menu items page</span>, I deployed a <span className="font-semibold text-[#86A6F6]">"You May Also Like"</span> section, 
              which relied on a WordPress query for randomization and display purposes. I also included an option for users to 
              submit reviews, which utilized a <span className="font-semibold text-[#86A6F6]">plugin to display reviews</span> and provide a form for submissions.
              </p>
              <p className='mb-6 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
              I created and formatted the <span className="font-semibold text-[#86A6F6]">about page</span>, which displays content regarding café staff members and testimonials 
              by leveraging <span className="font-semibold text-[#86A6F6]">Advanced Custom Fields</span> (ACF) and Custom Post Type data. I implemented all content and styling to
              provide a clean, consistent interface that aligned with the website theme. 
              </p>
              <p className='mb-8 xl:text-[18px] md:mx-8 lg:mx-16 text-[#222222] dark:text-white'>
              Additionally, I implemented and customized the <span className="font-semibold text-[#86A6F6]">footer</span> with the goal of displaying the café's information as simply as possible.
              </p>
            </div>
      
            </div>
{/* Highlights Section */}
<div style={{ display: activeSection === 'highlights' ? 'block' : 'none' }} className='mx-8  sm-plus:mx-16 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16'>
<h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Project Highlights</h2>
  <div className='grid grid-cols-1 gap-8 max-w-[600px] mx-auto px-4'>
    <div className='bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground border-1 dark:border-[#414141] rounded-lg shadow-[0_4px_7px_rgba(0,0,0,0.3)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.3)]'>
      <div className='relative overflow-hidden rounded-lg h-[260px]'>
        <img 
          src={froth1} 
          alt="Homepage Preview" 
          className='w-full h-full object-cover'
        />
      </div>
    </div>

    <div className='bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground border-1 dark:border-[#414141] rounded-lg shadow-[0_4px_7px_rgba(0,0,0,0.3)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.3)]'>
      <div className='relative overflow-hidden rounded-lg h-[260px]'>
        <img 
          src={froth2} 
          alt="Menu Items Preview" 
          className='w-full h-full object-cover'
        />
      </div>
    </div>

    <div className='bg-white dark:bg-gradient-to-b dark:from-[#212738] dark:to-darkBackground border-1 dark:border-[#414141] rounded-lg shadow-[0_4px_7px_rgba(0,0,0,0.3)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.3)]'>
      <div className='relative overflow-hidden rounded-lg h-[260px]'>
        <img 
          src={froth3} 
          alt="Project Preview 3" 
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  </div>
        
</div>
</div>

  
       
        <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px] text-left mt-20 mb-28  sm-plus:mx-16'>
          <h2 className="font-bold text-[24px] mb-10 md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">Project Tools</h2>
          <div className='md:mx-8 lg:mx-16'>
            <FrothTools />
          </div>
        </div>
    


      <FadeIn>
      <div className='mx-8 md:mx-auto md:max-w-[800px] lg:max-w-[950px]  text-left mt-16  sm-plus:mx-16' id="other-works">
            <h2 className="font-bold text-[24px] mb-10  md:mx-8 lg:mx-16 xl:text-[30px] md:text-left text-[#222222] dark:text-white">My Other Works</h2>
          </div>
          <div className='mt-16'>
          <WorksCards currentProject="froth" />
          </div>
        </FadeIn>

       


   
       
      

  


     
    
        <Footer />
      </div>
   

  );
}

export default FrothDetails;