import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

import wordpressLogo from '/src/assets/wordpress.png';
import figmaLogo from '/src/assets/figma.png';
import gitLogo from '/src/assets/git.png';
import sassLogo from '/src/assets/sass.png';
import phpLogo from '/src/assets/php.png';
import designIcon from '/src/assets/design.svg';
import devIcon from '/src/assets/dev.svg';

const logos = {
  figma: { src: figmaLogo, alt: 'Figma Icon' },
  git: { src: gitLogo, alt: 'Git Icon' },
  sass: { src: sassLogo, alt: 'SASS Icon' },
  php: { src: phpLogo, alt: 'PHP Icon' },
  wordpress: { src: wordpressLogo, alt: 'Wordpress Icon' },

};

const createLogoElements = (logoKeys) =>
  logoKeys.map((key) => (
    <img
      key={key}
      src={logos[key].src}
      alt={logos[key].alt}
      className="inline p-1 md:w-12 md:mr-4" 
      width="40"
      height="40" 
    />
  ));

const devContent = createLogoElements([
  'wordpress',
  'php',
  'sass',
  'git',
]);

const designContent = createLogoElements([
    'figma'
  ]);


function FrothTools() {
  return (
    <>
    <div className="mb-16 md:ml-6 md:mt-10">
      <Accordion variant="splitted" className="max-w-[800px] px-6">
        {' '}

        <AccordionItem
          key="1"
          className="devTools m-2 shadow-none py-1 rounded-[5px] bg-gradient-to-r from-[#abc3ff] to-[white] md:py-2 dark:from-[#607bc1] dark:to-darkBackground"
          aria-label="Accordion 1"
          title={
            <div className="flex items-center w-full">
              <img 
                src={devIcon} 
                alt="Development Icon" 
                className="w-5 h-5 ml-2 mr-2 transition-transform duration-300 group-data-[state=open]:rotate-180 dark:invert"
              />
              <span className="text-[#2b2b2b] dark:text-white">Development</span>
            </div>
          }
          classNames={{
            title: 'text-md font-medium md:text-[20px] group',
            content: 'text-sm py-3',
          }}
        >
          {devContent}
        </AccordionItem>

        <AccordionItem
          key="2"
          className="designTools m-2 shadow-none py-1 rounded-[5px] bg-gradient-to-r from-[#abc3ff] to-[white] md:py-2 dark:from-[#607bc1] dark:to-darkBackground"
          aria-label="Accordion 2"
          title={
            <div className="flex items-center w-full">
              <img 
                src={designIcon} 
                alt="Design Icon" 
                className="w-5 h-5 ml-2 mr-2 transition-transform duration-300 group-data-[state=open]:rotate-180 dark:invert"
              />
              <span className="text-[#2b2b2b] dark:text-white">Design</span>
            </div>
          }
          classNames={{
            title: 'text-md font-medium md:text-[20px] group',
            content: 'text-sm py-3',
          }}
        >
          {designContent}
        </AccordionItem>
      </Accordion>
      </div>
    </>
  );
}

export default FrothTools;
