import React from 'react';
import AboutTools from '../components/AboutTools';

function About() {
  return (
    <>
    <div className="about-section relative md:overflow-hidden"> {/* Added relative and overflow-hidden */}
      <div className="md:absolute md:left-[74%] md:top-[200px] md:w-0"> {/* Added fixed positioning container */}
        <h1 className="font-bold uppercase text-[48px] p-8 mt-35 pt-[8rem] pb-0 mb-0 text-[#2b2b2b] 
          md:text-[92px] 
          md:rotate-[90deg] 
          md:absolute 
          md:left-0 {/* Changed from left-[75%] to left-0 */}
          md:top-0 {/* Changed from top-[200px] to top-0 */}
          md:transform-origin-top-left {/* Added to ensure rotation origin */}
        ">
          <span className="text-primary">A</span>bout.
        </h1>
      </div>
      {/* Rest of your existing code remains unchanged */}
      <h2 className="font-semibold text-[32px] mt-[1rem] p-8 pt-6 md:pt-[10rem] text-[#2b2b2b] md:text-[36px] md:ml-6 ">
        Hi, I'm Nadia!
      </h2>
      <p className="font-normal text-[16px] p-8 pr-12 md:mr-28 md:ml-6  pt-2 text-[#2b2b2b]">
        As a recent graduate from BCIT and a qualified Front-End Web Developer,
        I am on a mission to create clean and functional websites that operate
        on dependable code and sleek user interfaces. I believe an accessible
        and optimized website is key to setting businesses up for success. Not
        only does a good website look good, but should also{' '}
        <span className=" font-semibold text-[#86A6F6] underline">feel</span>{' '}
        good to use!
      </p>
      <p className="font-normal text-[16px] p-8 pr-12 pt-2 pb-16 md:mr-24 md:ml-6 text-[#2b2b2b] ">
        Aside from development or planning my next project, I like to watch space documentaries, listen to music, play video games, and hang out with my cat Benny. I'm also a huge matcha
        enthusiast (can’t go wrong with a good iced matcha latte) and occasional coffee enjoyer. ผ(•̀_•́ผ)
      </p>
      <h2 className="font-semibold text-[32px] p-8 pt-2 text-[#2b2b2b] md:ml-6 md:text-[36px]">
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
