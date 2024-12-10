import React from 'react';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { motion } from 'framer-motion';
import aisa from '/src/assets/aisa.png';
import indigo from '/src/assets/indigohome.png';
import clippr from '/src/assets/clippr.png';
import titan from '/src/assets/titan.png';
import portfolio from '/src/assets/portfolio1.png';
import galaxy from '/src/assets/gg.png';
import froth from '/src/assets/froth1.png';
import FadeIn from '../components/FadeIn';
import comingsoon from '/src/assets/comingsoon.svg';
import NavAllWorks from '../components/NavAllWorks';
import FooterAllWorks from '../components/FooterAllWorks';


const AllWorks = () => { 
  const projects = [
    {
      id: 'aisa',
      image: comingsoon,
      title: 'AISafeguard',
      link: '/projects/aisafeguard',
    },
    {
      id: 'portfolio',
      image: portfolio,
      title: 'Portfolio',
      link: '/projects/portfolio',
    },
    {
      id: 'clippr',
      image: clippr,
      title: 'Clippr DB',
      link: '/projects/clippr',
    },
    {
      id: 'titan',
      image: titan,
      title: 'Titan Tech',
      link: '/projects/titan',
    },   
    {
      id: 'galaxy',
      image: galaxy,
      title: 'Galaxy Grid II',
      link: '/projects/galaxy-grid-2',
    }, 
     {
      id: 'froth',
      image: froth,
      title: 'Froth',
      link: '/projects/froth-matcha',
    },
    {
      id: 'indigo',
      image: comingsoon,
      title: 'Indigo',
      link: '/projects/indigo',
    },
  
 
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
  
      <NavAllWorks />
      
    
             
    
      <div className="min-h-screen">
        <div className="max-w-[1200px] mx-auto px-4">
        <HashLink 
                  smooth
                  to="/#featured" 
                  className="text-primary hover:opacity-70 transition-opacity block pt-28 mb-4 text-center"
                >
                  ← Featured Works
                </HashLink>
          <FadeIn>
            <h1 className="font-bold uppercase text-[42px] xs:text-[53px] text-center  mb-0 text-[#2b2b2b] md:text-[78px] dark:text-white">
              <span className="text-primary">P</span>rojects.
            </h1>
            <h2 className="font-medium mb-0 pb-16 mt-2 text-[#2b2b2b] text-center md:text-[16px] dark:text-white">All my works in one place.</h2>
          </FadeIn>
          <div className="flex justify-center">
            <div className="max-w-[800px]">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 justify-items-center"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {projects.map((project) => (
                  <motion.div 
                    key={project.id}
                    variants={item}
                    className="w-[230px] bg-white dark:bg-gradient-to-b dark:from-[#1d253a] dark:to-darkBackground dark:border-[#414141] border-1 rounded-xl overflow-hidden shadow-[0_4px_7px_rgba(0,0,0,0.2)] dark:shadow-[0_6px_9px_rgba(0,0,0,0.2)]"
                  >
                    <img 
                      src={project.image} 
                      className="w-full h-[140px] object-cover" 
                      alt={project.title} 
                    />
                    <div className="p-4 text-center">
                      <h2 className="text-xl font-semibold mb-4 dark:text-white text-[#222222]">
                        {project.title}
                      </h2>
                      <Link to={project.link} className="flex justify-center">
                        <Button 
                          radius="full" 
                          className="bg-primary text-white px-6 py-2 mb-2 rounded-full font-[500] hover:opacity-70 transition-opacity"
                        >
                          View Project
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <FooterAllWorks />

      </div>
    </>
  );
};

export default AllWorks;