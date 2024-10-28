import { useState } from 'react';
import AboutTools from '../components/AboutTools';

function About() {
  return (
    <>
    <div className="about-section ">
      <div className="md:relative">
      <h1 className="font-bold uppercase text-[45px] p-8 mt-35 pt-[8rem] pb-0 mb-0 text-[#2b2b2b] md:text-[88px] md:rotate-[90deg] md:absolute md:left-[75%] md:top-[200px]">
        <span className="text-primary">A</span>bout.
      </h1>
      </div>
      <h2 className="font-semibold text-[26px] mt-[2rem] p-8 pt-6 md:pt-[10rem] pb-4 text-[#2b2b2b] md:text-[36px] md:ml-6 ">
        Hi, I'm Nadia!
      </h2>
      <p className="font-normal text-[14px] p-8 pr-12 md:mr-28 md:ml-6  md:text-[16px] pt-2 text-[#2b2b2b]">
        As a recent graduate from BCIT and a qualified Front-End Web Developer,
        I am on a mission to create clean and functional websites that operate
        on dependable code and sleek user interfaces. I believe an accessible
        and optimized website is key to setting businesses up for success. Not
        only does a good website look good, but should also{' '}
        <span className="underline font-semibold text-[#86A6F6]">feel</span>{' '}
        good to use!
      </p>
      <p className="font-normal text-[14px] p-8 pr-12 pt-2 md:mr-24 md:ml-6 text-[#2b2b2b] md:text-[16px] ">
        Aside from development, I am also an enthusiastic astronomy nerd, matcha
        enthusiast (can’t go wrong with a good iced matcha latte), music and
        video game lover, and cat mom! 🧋
      </p>
      <h2 className="font-semibold text-[26px] p-8 pt-2 text-[#2b2b2b] md:ml-6 md:text-[36px]">
        Skill Stack
      </h2>
      {/* <div className="absolute right-5 top-[86%] md:top-[99%] md:right-14 transform -translate-y-1/2 h-full flex flex-col items-center ">
          <div className="border-l-1 border-[#222222] h-[3%] md:h-[4%]"></div>
          <div className="w-[5px] h-[5px] bg-purple-400 rounded-full mt-2"></div>
        </div> */}
      <AboutTools />
      </div>
    </>
  );
}

export default About;
