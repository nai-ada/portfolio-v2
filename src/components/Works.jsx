import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/react';
import Slides from '../components/Slides';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FadeIn from '../components/FadeIn';
import activeWork from '/src/assets/active-arrow.svg';

const blinkingArrowStyle = `
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const projectsList = [
  {
    title: 'Froth Matcha',
    description: ['WordPress', 'PHP', 'SASS'],
    link: '/projects/froth-matcha',
    button: (
      <Link to="/projects/froth-matcha">
        <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]">
          Info
        </Button>
      </Link>
    ),
  },
  {
    title: 'Indigo',
    description: ['TypeScript', 'Tailwind', 'Solid.js'],
    link: '#',
    button: (
      <Link to="/projects/indigo">
        <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]">
          Info
        </Button>
      </Link>
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
    title: 'Galaxy Grid 2.0',
    description: ['JavaScript', 'CSS', 'HTML'],
    link: '/projects/galaxy-grid-2',
    button: (
      <Link to="/projects/galaxy-grid-2">
        <Button radius="full" className="bg-primary text-white min-w-16 h-8 md:min-w-24 md:h-10 md:text-[16px]">
          Info
        </Button>
      </Link>
    ),
}, 
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
  const [activeIndex, setActiveIndex] = useState(Math.floor(projectsList.length / 2));
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
            const itemCenter = rect.top + rect.height / 2;
            const distance = Math.abs(containerCenter - itemCenter);

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          }
        });

        setActiveIndex(closestIndex);
      }
    };

    const scrollToMiddle = () => {
      if (scrollRef.current && itemRefs.current[activeIndex]) {
        const container = scrollRef.current;
        const item = itemRefs.current[activeIndex];
        const containerRect = container.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        
        const scrollTo = item.offsetTop - (containerRect.height / 2) + (itemRect.height / 2);
        container.scrollTo({
          top: scrollTo,
          behavior: 'instant'
        });
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      setTimeout(scrollToMiddle, 0);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  return (
    <div className="relative">
      <style>{blinkingArrowStyle}</style>
      
      <div className="hidden lg-plus:block absolute -left-12 top-[25%] -translate-y-1/2 mt-10">
        <FadeIn>
          <div className="absolute left-1/2 bottom-[185%] -translate-x-1/2 flex flex-col items-center ">
            <div className="w-[6px] h-[6px] bg-primary rounded-full mb-2 md:right-[-4px]"></div>
            <div className="border-l-1 border-[#222222] h-[170px] dark:border-white"></div>
          </div>
          <h1 className="font-bold uppercase text-[125px] origin-center -rotate-90 text-[#2b2b2b] dark:text-white">
            <span className="text-primary">W</span>orks.
          </h1>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="md-x:mx-[4rem] lg-plus:mx-[10rem] xl-x:mx-[10rem] mt-28">
          <h1 className="lg-plus:hidden font-bold uppercase text-[48px] pl-8 mt-35 pt-[3rem] pb-0 mb-0 text-[#2b2b2b] md:text-[78px] lg-plus:text-[98px] md:ml-4 dark:text-white">
            <span className="text-primary">W</span>orks.
          </h1>
        </div>
        <div
          ref={scrollRef}
          className="h-[800px] overflow-y-auto scrollbar-hide md:mx-[2rem] md-x:mx-[5rem] lg-plus:mx-[12rem] xl-x:mx-[12rem] lg-plus:ml-[25rem] lg-plus:mr-[10rem]"
        >
          <div className="py-[300px]">
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
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-[24px] md:text-[42px]">{project.title}</h2>
                    {index === activeIndex && (
                      <img 
                        src={activeWork} 
                        alt="Active work indicator" 
                        className="hidden xs:block w-3 h-3 md:w-5 md:h-5 dark:invert"
                        style={{
                          animation: 'blink 2s ease-in-out infinite'
                        }}
                      />
                    )}
                  </div>
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
        <div className="md-x:mx-[4rem] lg-plus:mx-[10rem] xl-x:mx-[10rem] pt-[5rem] lg-plus:pt-[10rem]">
          <h2 className="font-semibold text-[32px] p-8 pt-6 md:pt-[2rem] text-[#2b2b2b] md:text-[36px] md:ml-6 lg-plus:text-[45px] dark:text-white">
            Featured Works
          </h2>
          <Slides />
        </div>
      </FadeIn>
    </div>
  );
}

export default Works;