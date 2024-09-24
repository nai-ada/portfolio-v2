import { useState } from 'react';
import AboutTools from '../components/AboutTools';

function About() {
  return (
    <>
      <h1 className="font-bold uppercase text-[90px]">About.</h1>
      <h2>Hi, I'm Nadia!</h2>
      <p>
        As a recent graduate from BCIT and a qualified Front End Web Developer,
        I am on a mission to create clean and functional websites that operate
        on dependable code and sleek user interfaces. I believe an accessible
        and optimized website is key to setting businesses up for success. Not
        only does a good website look good, but also should <span>feel</span>{' '}
        good to use.
      </p>
      <h2>Skill Stack</h2>
      <AboutTools />
    </>
  );
}

export default About;
