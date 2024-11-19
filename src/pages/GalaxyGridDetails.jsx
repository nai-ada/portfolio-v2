import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import {Button} from "@nextui-org/react";
import GitHub from '/src/assets/github.svg';
import AboutTools from '../components/AboutTools';
import Slides from '../components/Slides';
import Footer from '../components/Footer';


function GalaxyGridDetails() {
  return (
    <div className="">
    <Nav />
      <div className="pt-[100px]">
        <Link to="" className="text-primary hover:opacity-80 pl-4">
          ← Back to Works
        </Link>
        
        <div className='ml-6 mt-2'>
        <h1 className="font-bold uppercase text-[52px] pt-[1rem] pb-2 mb-0 text-[#2b2b2b] md:text-[78px] lg-plus:text-[98px] dark:text-white text-left">
          <span className="text-primary">G</span>alaxy Grid 2.0
        </h1>
        </div>
        
        <div className='text-left ml-6'>
           <h2>// Project <span className="font-bold">01</span> | In-Browser Game</h2>
        </div>
        
        <div className='flex justify-left gap-4 mt-4 ml-6'>
        <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-20 md:h-9 ">
            <span className="text-[12px] md:text-[16px] font-medium whitespace-nowrap">Live Site</span>
        </Button> 
        <a href="https://github.com/nai-ada" className="hover:opacity-70 transition-opacity dark:invert">
            <img src={GitHub} alt="GitHub Logo" className='w-8'/>
        </a> 
        </div>
       
        <div className='m-8 text-left mt-28'>
            <h2 className="font-bold text-[24px] mb-8">Project Overview</h2>
            <p className=''>This project is the second rendition of it’s original version, Galaxy Grid. It is an In-Browser game created entirely using vanilla <span className='font-bold'>JavaScript</span>, <span className='font-bold'>HTML</span> <span className='font-bold'>CSS</span>. Ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque. If you are interested in viewing the first rendition of this project, you can <a href="#" className="text-primary underline font-semibold ">view it here</a>.</p>
        </div>

        <div className=' text-left mt-20 md:hidden'>
            <h2 className="font-bold ml-8 mr-8 text-[22px]">Project Highlights</h2>
            <div className='mb-28'>
            <Slides />
            </div>
        </div>
        
        <div className='m-8 text-left mt-20'>
            <h2 className="font-bold text-[24px] mb-8">Project Takeaway</h2>
            <p className=''>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
        </div>

        <div className='text-left mt-20'>
            <h2 className="font-bold ml-8 mr-8 text-[24px]">Project Tools</h2>
            <div className='mt-8'>
            <AboutTools />
            </div>
        </div>

        <h2 className="font-bold ml-8 mr-8 text-[24px]">Notes</h2>
        <ul className="list-disc pl-5 space-y-3 marker:text-[#86A6F6] m-8 text-[14px] mb-20">
            <li>Lorem, ipsumid, tempora incidunt cumque dolore necessitatibus quia. Ex, quasi.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore et illo in ipsum dicta consectetur obcaecati! Similique odit, at repudiandae, magnam quae saepe quibusdam error quo sit porro praesentium!</li>
            <li>Lorem Loremdi pariatur illo dolor, in magnam, animi assumenda laborum minima fuga consectetur quod repellendus!</li>
            <li>lorem Los molestiae quidem, id velit accusantium nemo omnis repellendus sit, consequuntur ea eos vel iure. Eum?</li>
            <li>Lorem ium perspiciatis eos necessitatibus vero, laboriosam voluptate voluptatibus autem!</li>
        </ul>

        
        <Footer />

      </div>
    </div>
  );
}

export default GalaxyGridDetails;