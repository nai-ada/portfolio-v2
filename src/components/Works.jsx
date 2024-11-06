import { useState, useEffect, useRef } from 'react';
import { Button } from '@nextui-org/react';
import Slides from '../components/Slides';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const projectsList = [
  {
    title: 'AiSafeguard',
    description: ['JavaScript', 'MongoDB', 'CSS'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8">
        Info
      </Button>
    ),
  },
  {
    title: 'Galaxy Grid 2.0',
    description: ['JavaScript', 'CSS', 'HTML'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8">
        Info
      </Button>
    ),
  },
  {
    title: 'Indigo',
    description: ['TypeScript', 'Tailwind', 'Solid.js'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8">
        Info
      </Button>
    ),
  },
  {
    title: 'Froth Matcha',
    description: ['WordPress', 'PHP', 'SASS'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8">
        Info
      </Button>
    ),
  },
  {
    title: 'Clippr DB',
    description: ['React', 'CSS', 'Rest API'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8">
        Info
      </Button>
    ),
  },
  {
    title: 'Portfolio',
    description: ['React', 'Tailwind', 'NextUI'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8">
        Info
      </Button>
    ),
  },
  
  {
    title: 'Titan Tech',
    description: ['JavaScript', 'CSS', 'HTML'],
    link: '#',
    button: (
      <Button radius="full" className="bg-primary text-white min-w-16 h-8">
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
        const containerCenter = containerRect.top + containerRect.height / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        itemRefs.current.forEach((item, index) => {
          if (item) {
            const rect = item.getBoundingClientRect();
            const distance = Math.abs(
              rect.top + rect.height / 2 - containerCenter,
            );
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          }
        });

        setActiveIndex(closestIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  return (
    <div className="relative">
      <h1 className="font-bold uppercase text-[48px] p-8 pb-2 mt-28 mb-0 text-[#2b2b2b] z-10 md:absolute md:right-[67%] md:top-[182px] md:rotate-[-90deg] md:text-[86px]">
        <span className="text-primary">P</span>rojects.
      </h1>

      <div
        ref={scrollRef}
        className="w-full h-[500px] overflow-y-auto scrollbar-hide md:w-[83%] md:ml-auto"
      >
        <div className="pb-[150px] pt-[150px] relative p-1">
          {projectsList.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`p-6 transition-opacity duration-300 ${
                index !== projectsList.length - 1 ? 'border-b-2' : ''
              }`}
              style={{
                opacity:
                  Math.abs(index - activeIndex) <= 1
                    ? 1 - Math.abs(index - activeIndex) * 0.8
                    : 0.2,
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-bold text-[24px]">{project.title}</h2>
                {project.button}
              </div>
              <p className="text-[#888888] text-[12px]">
                {project.description.join(' | ')}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute transform -translate-y-1/2 h-full flex flex-col items-center md:bottom-[21%] md:left-[7%] rotate-[180deg]">
        <div className="border-l-1 border-[#222222] h-[20%]"></div>
        <div className="w-[5px] h-[5px] bg-purple-400 rounded-full mt-2"></div>
      </div> */}
      <h2 className="font-semibold mt-[2rem] text-[32px] p-8 pt-6 md:pt-[10rem] pb-4 text-[#2b2b2b] md:text-[36px] md:ml-6 ">
        Featured Projects
      </h2>
      <Slides />
    </div>
    
  );
}

export default Works;