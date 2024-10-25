import { useState, useEffect, useRef } from 'react';
import { Button } from '@nextui-org/react';

const projectsList = [
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
    title: 'MiniFo',
    description: ['TypeScript', 'CSS', 'HTML'],
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
      <h1 className="font-bold uppercase text-[45px] p-8 pb-2 mt-16 mb-0 text-[#2b2b2b] z-10">
        <span className="text-primary">W</span>orks.
      </h1>

      <div
        ref={scrollRef}
        className="w-full h-[500px] overflow-y-auto scrollbar-hide"
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
    </div>
  );
}

export default Works;