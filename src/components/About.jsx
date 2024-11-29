import React from 'react';
import AboutTools from '../components/AboutTools';
import FadeIn from '../components/FadeIn';


function About() {
  return (
    <>
        <div className="about-section relative md:overflow-hidden mt-10 lg-plus:pt-[100px]" id="about"> 
  <div className="hidden lg-plus:block absolute right-0 top-[35%] -translate-y-1/2">
    {/* Rotated heading */}
    <FadeIn>
    <h1 className="font-bold uppercase text-[125px] origin-center rotate-90 text-[#2b2b2b] dark:text-white">
      <span className="text-primary">A</span>bout.
    </h1>
    </FadeIn>
    
    {/* Border and dot positioned below the rotated heading */}
    <div className="absolute left-1/2 top-[185%] -translate-x-1/2 flex flex-col items-center">
      <div className="border-l-1 border-[#222222] h-[170px] dark:border-white"></div>
      <div className="w-[6px] h-[6px] bg-primary rounded-full mt-2 md:right-[-4px]"></div>
    </div> 
   
  </div>


        <div className="md-x:mx-[4rem] lg-plus:mx-[10rem] xl-x:mx-[10rem]">
          <FadeIn>
            {/* Original heading visible only below lg-plus */}
            <h1 className="lg-plus:hidden font-bold uppercase text-[48px] pl-8 mt-35 pt-[8rem] pb-0 mb-0 text-[#2b2b2b] md:text-[78px] lg-plus:text-[98px] md:ml-4 dark:text-white">
              <span className="text-primary">A</span>bout.
            </h1>
          </FadeIn>
   
        <FadeIn>
          <h2 className="font-semibold text-[32px] mt-[1rem] p-8 pt-6 md:pt-[2rem] text-[#2b2b2b] md:text-[36px] md:ml-6 lg-plus:text-[45px] dark:text-white">
            Hey, I'm Nadia.
          </h2>
          <p className="font-normal text-[16px] p-8 pr-12 md:mr-2 md:ml-6 pt-2 text-[#2b2b2b] lg-x:text-[20px] lg-plus:w-[78%] dark:text-white">
            As a recent graduate from <span className="font-semibold text-[#86A6F6]">BCIT</span> and a qualified <span className="font-semibold text-[#86A6F6]"> Front-End Web Developer</span>,
            I am on a mission to create clean and functional websites that operate
            on dependable code and sleek user interfaces. As someone aspiring to become a freelance developer on the side, I believe an accessible
            and optimized website is key to setting a business up for success. Not
            only does a good website look good, but also{' '}
            <span className="italic">feels</span>{' '}
            good to use!
          </p>
          <p className="font-normal text-[16px] p-8 pr-12 pt-0 pb-20 md:mr-2 md:ml-6 text-[#2b2b2b] lg-x:text-[20px] lg-plus:w-[78%] dark:text-white">
            My favorite aspect of my career is always being able to learn something new. I find myself becoming excited to see what I'm going to learn with every new project I take on.
            Aside from development I spend my free time playing video games, listening to music, and spending time with my cat Benny. ผ(•̀_•́ผ)
          </p>
          </FadeIn>
   

          <FadeIn>
          <h2 className="font-semibold text-[32px] p-8 pt-2 text-[#2b2b2b] md:ml-6 md:text-[36px] lg-plus:text-[45px] dark:text-white">
            Skill Stack
          </h2>
   <div className='lg-plus:mb-[5rem]'>
          <AboutTools />
          </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}

export default About;