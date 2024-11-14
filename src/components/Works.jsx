import { useState, useEffect, useRef } from 'react';
import { Button } from '@nextui-org/react';
import Slides from '../components/Slides';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FadeIn from '../components/FadeIn';

const projectsList = [
  {
    title: 'AiSafeguard',
    description: ['JavaScript', 'MongoDB', 'CSS'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]">
        Info
      </Button>
    ),
  },
  {
    title: 'Galaxy Grid 2.0',
    description: ['JavaScript', 'CSS', 'HTML'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]">
        Info
      </Button>
    ),
  },
  {
    title: 'Indigo',
    description: ['TypeScript', 'Tailwind', 'Solid.js'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]">
        Info
      </Button>
    ),
  },
  {
    title: 'Froth Matcha',
    description: ['WordPress', 'PHP', 'SASS'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]">
        Info
      </Button>
    ),
  },
  {
    title: 'Clippr DB',
    description: ['React', 'CSS', 'Rest API'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]">
        Info
      </Button>
    ),
  },
  {
    title: 'Portfolio',
    description: ['React', 'Tailwind', 'NextUI'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]">
        Info
      </Button>
    ),
  },
  {
    title: 'Titan Tech',
    description: ['JavaScript', 'CSS', 'HTML'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]">
        Info
      </Button>
    ),
  },
];

function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
  
        // Find which item is most visible
        let maxVisibleIndex = 0;
        let maxVisibleRatio = 0;
  
        itemRefs.current.forEach((item, index) => {
          if (item) {
            const rect = item.getBoundingClientRect();
            const itemTop = rect.top - containerTop;
            const itemBottom = rect.bottom - containerTop;
            
            // Calculate how much of the item is visible in the container
            const visibleTop = Math.max(0, itemTop);
            const visibleBottom = Math.min(containerHeight, itemBottom);
            const visibleHeight = visibleBottom - visibleTop;
            const visibleRatio = visibleHeight / rect.height;
  
            if (visibleRatio > maxVisibleRatio) {
              maxVisibleRatio = visibleRatio;
              maxVisibleIndex = index;
            }
  
            // Special handling for first and last items
            if (index === 0 && itemTop > -rect.height/2 && itemTop < containerHeight/2) {
              maxVisibleIndex = 0;
            }
            if (index === itemRefs.current.length - 1 && 
                itemBottom > containerHeight/2 && 
                itemBottom < containerHeight + rect.height/2) {
              maxVisibleIndex = itemRefs.current.length - 1;
            }
          }
        });
  
        setActiveIndex(maxVisibleIndex);
      }
    };
  
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }
  
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  return (
    <div className="relative">
      {/* Rotated heading for lg-plus screens */}
      <div className="hidden lg-plus:block absolute -left-12 top-[25%] -translate-y-1/2 mt-10">
        <FadeIn>
          {/* Border and dot positioned above the rotated heading */}
          <div className="absolute left-1/2 bottom-[185%] -translate-x-1/2 flex flex-col items-center ">
            <div className="w-[6px] h-[6px] bg-purple-400 rounded-full mb-2 md:right-[-4px]"></div>
            <div className="border-l-1 border-[#222222] h-[170px]"></div>
          </div>
          <h1 className="font-bold uppercase text-[125px] origin-center -rotate-90 text-[#2b2b2b]">
            <span className="text-primary">W</span>orks.
          </h1>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="md-x:mx-[4rem] lg-x:mx-[10rem] xl-x:mx-[13rem] mt-28">
          <h1 className="lg-plus:hidden font-bold uppercase text-[48px] pl-8 mt-35 pt-[3rem] pb-0 mb-0 text-[#2b2b2b] md:text-[78px] lg-x:text-[98px] md:ml-4">
            <span className="text-primary">W</span>orks.
          </h1>
        </div>
        <div
          ref={scrollRef}
          className="h-[800px] overflow-y-auto scrollbar-hide md:mx-[2rem] md-x:mx-[5rem] lg-x:mx-[12rem] xl-x:mx-[15rem] lg-plus:ml-[25rem] lg-plus:mr-[10rem]"
        >
         <div className="pb-[50px] pt-[50px] relative p-1">
  {projectsList.map((project, index) => (
    <div
      key={project.title}
      ref={(el) => (itemRefs.current[index] = el)}
      className={`p-6 transition-opacity duration-300 ${
        index !== projectsList.length - 1 ? 'border-b-2' : ''
      }`}
      style={{
        opacity: index === activeIndex ? 1 : 0.2,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold text-[24px] md:text-[42px]">{project.title}</h2>
        {project.button}
      </div>
      <p className="text-[#888888] text-[12px] md:text-[18px]">
        {project.description.join(' | ')}
      </p>
    </div>
  ))}
</div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="md-x:mx-[4rem] lg-x:mx-[10rem] xl-x:mx-[13rem] pt-[5rem] lg-plus:pt-[20rem]">
          <h2 className="font-semibold text-[32px] p-8 pt-6 md:pt-[2rem] text-[#2b2b2b] md:text-[36px] md:ml-6 lg-x:text-[45px]">
            Featured Works
          </h2>
          <Slides />
        </div>
      </FadeIn>
    </div>
  );
}

export default Works;