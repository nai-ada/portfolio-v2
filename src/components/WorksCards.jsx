import React from 'react';
import { Button } from '@nextui-org/react';
import aisa from '/src/assets/aisa.png';
import clippr from '/src/assets/clippr.png';
import titan from '/src/assets/titan.png';
import portfolio from '/src/assets/portfolio.png';
import galaxy from '/src/assets/gg.png';
import FadeIn from './FadeIn';

const WorksCards = () => {
  const projectData = [
    {
      name: `AiSafeguard`,
      img: aisa,
      info: `Chrome extension designed to block AI art while browsing the internet.`
    },
    {
      name: `Galaxy Grid 2.0`,
      img: galaxy,
      info: `Tic Tac Toe in-browser game, with an intergalactic take!`
    },
    {
      name: `Portfolio`,
      img: portfolio,
      info: `My web portfolio. Designed to showcase my skills and abilities as a developer.`
    },
    {
      name: `Titan Tech`,
      img: titan,
      info: `Landing page for Titan Technologies, with design having been provided.`
    },
    {
      name: `ClipprDB`,
      img: clippr,
      info: `Movie database which utilizes data from the TMDb Database (Rest API)`
    },
  ];

  return (
    <FadeIn>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10 mb-20 m-6">
        <div className="w-[230px] bg-white dark:bg-gradient-to-b dark:from-[#1d253a] dark:to-darkBackground dark:border-[#414141] border-1 rounded-xl overflow-hidden shadow-[0_4px_7px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.1)]">
          <img src={aisa} className="w-full h-[140px] object-cover" alt="AiSafeguard" />
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-4 dark:text-white text-[#222222]">AiSafeguard</h2>
            <Button className="bg-[#7289DA] text-white px-6 py-2 mb-2 rounded-full font-[500] hover:opacity-70 transition-opacity">
              View Project
            </Button>
          </div>
        </div>
  
        <div className="w-[230px] bg-white dark:bg-gradient-to-b dark:from-[#1d253a] dark:to-darkBackground dark:border-[#414141] border-1 rounded-xl overflow-hidden shadow-[0_4px_7px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.1)]">
          <img src={portfolio} className="w-full h-[140px] object-cover" alt="Portfolio" />
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-4 dark:text-white text-[#222222]">Portfolio</h2>
            <Button className="bg-[#7289DA] text-white px-6 py-2 rounded-full mb-2 font-[500] hover:opacity-70 transition-opacity">
              View Project
            </Button>
          </div>
        </div>
  
        <div className="w-[230px] bg-white dark:bg-gradient-to-b dark:from-[#1d253a] dark:to-darkBackground dark:border-[#414141] border-1 rounded-xl overflow-hidden shadow-[0_4px_7px_rgba(0,0,0,0.1)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.1)]">
          <img src={galaxy} className="w-full h-[140px] object-cover" alt="Galaxy Grid 2.0" />
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold mb-4 dark:text-white text-[#222222]">Galaxy Grid 2.0</h2>
            <Button className="bg-[#7289DA] text-white px-6 py-2 rounded-full font-[500] mb-2 hover:opacity-70 transition-opacity">
              View Project
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default WorksCards;