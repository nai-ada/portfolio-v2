import { useState } from 'react';
import AboutTools from '../components/AboutTools';

function About() {
  return (
    <>
      <h1 className="font-bold uppercase text-[38px] p-8 mt-35 pb-0 mb-0 text-[#2b2b2b]">
        <span className="text-primary">A</span>bout.
      </h1>
      <h2 className="font-semibold text-[23px] p-8 pt-6 pb-4 text-[#2b2b2b]">
        Hi, I'm Nadia!
      </h2>
      <p className="font-normal text-[14px] p-8 pr-12 pt-2 text-[#2b2b2b]">
        As a recent graduate from BCIT and a qualified Front-End Web Developer,
        I am on a mission to create clean and functional websites that operate
        on dependable code and sleek user interfaces. I believe an accessible
        and optimized website is key to setting businesses up for success. Not
        only does a good website look good, but should also{' '}
        <span className="underline font-semibold text-[#86A6F6]">feel</span>{' '}
        good to use!
      </p>
      <p className="font-normal text-[14px] p-8 pr-12 pt-2 text-[#2b2b2b]">
        Aside from development, I am also an enthusiastic astronomy nerd, matcha
        enthusiast (can’t go wrong with a good iced matcha latte), music and
        video game lover, and cat mom! 🧋
      </p>
      <h2 className="font-semibold text-[23px] p-8 pt-2 text-[#2b2b2b]">
        Skill Stack
      </h2>
      <AboutTools />
    </>
  );
}

export default About;
