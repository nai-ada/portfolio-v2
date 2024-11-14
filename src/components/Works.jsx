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
            <FadeIn>
      <div className="md-x:mx-[4rem] lg-x:mx-[10rem] xl-x:mx-[13rem] mt-28">
      <h1 className="font-bold uppercase text-[48px] pl-8 mt-35 pt-[3rem] pb-0 mb-0 text-[#2b2b2b]  md:text-[78px] lg-x:text-[98px] md:ml-4">
        <span className="text-primary">W</span>orks.
      </h1>
      </div>
      <div
        ref={scrollRef}
        className=" h-[500px] overflow-y-auto scrollbar-hide md:mx-[2rem] md-x:mx-[5rem] lg-x:mx-[12rem] xl-x:mx-[15rem]"
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
      <div className="hidden md-x:block absolute transform -translate-y-1/2 h-full flex flex-col items-center md:bottom-[21%] md:left-[3%] rotate-[180deg]">
  <div className="border-l-1 border-[#222222] h-[18%]"></div>
  <div className="w-[5px] h-[5px] bg-purple-400 rounded-full absolute md:right-[-2px] mt-2"></div>
</div>
<FadeIn>
<div className="md-x:mx-[4rem] lg-x:mx-[10rem] xl-x:mx-[13rem]">
      <h2 className="font-semibold text-[32px] mt-[1rem] md:mt-[10rem] p-8 pt-6 md:pt-[2rem] text-[#2b2b2b] md:text-[36px] md:ml-6 lg-x:text-[45px]">
        Featured Works
      </h2>
      <Slides />
    </div>
    </FadeIn>
    </div>
    
  );
}

export default Works;