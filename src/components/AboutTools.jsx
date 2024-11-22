import { useState } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

import mySqlLogo from '/src/assets/mysql.png';
import npmLogo from '/src/assets/npm.png';
import wordpressLogo from '/src/assets/wordpress.png';
import shopifyLogo from '/src/assets/shopify.png';
import woocommerceLogo from '/src/assets/woocommerce.png';
import figmaLogo from '/src/assets/figma.png';
import xdLogo from '/src/assets/xd.png';
import photoshopLogo from '/src/assets/photoshop.png';
import illustratorLogo from '/src/assets/illustrator.png';
import gitLogo from '/src/assets/git.png';
import javascriptLogo from '/src/assets/js.png';
import sassLogo from '/src/assets/sass.png';
import typescriptLogo from '/src/assets/typescript.png';
import phpLogo from '/src/assets/php.png';
import htmlLogo from '/src/assets/html.png';
import cssLogo from '/src/assets/css.png';
import tailwindLogo from '/src/assets/tailwind.png';
import solidLogo from '/src/assets/solid.png';
import framermotionLogo from '/src/assets/framermotion.png';
import nextuiLogo from '/src/assets/nextui.png';
import threejsLogo from '/src/assets/threejs.png';
import reactLogo from '/src/assets/react.png';
import designIcon from '/src/assets/design.svg';
import devIcon from '/src/assets/dev.svg';
import skillsIcon from '/src/assets/skills.svg';

const logos = {
  npm: { src: npmLogo, alt: 'NPM Icon' },
  shopify: { src: shopifyLogo, alt: 'Shopify Icon' },
  woocommerce: { src: woocommerceLogo, alt: 'Woocommerce Icon' },
  figma: { src: figmaLogo, alt: 'Figma Icon' },
  xd: { src: xdLogo, alt: 'Adobe XD Icon' },
  photoshop: { src: photoshopLogo, alt: 'Photoshop Icon' },
  illustrator: { src: illustratorLogo, alt: 'Adobe Illustrator Icon' },
  git: { src: gitLogo, alt: 'Git Icon' },
  javascript: { src: javascriptLogo, alt: 'JavaScript Icon' },
  react: { src: reactLogo, alt: 'React Icon' },
  sass: { src: sassLogo, alt: 'SASS Icon' },
  typescript: { src: typescriptLogo, alt: 'TypeScript Icon' },
  php: { src: phpLogo, alt: 'PHP Icon' },
  html: { src: htmlLogo, alt: 'HTML Icon' },
  css: { src: cssLogo, alt: 'CSS Icon' },
  tailwind: { src: tailwindLogo, alt: 'Tailwind Icon' },
  solidjs: { src: solidLogo, alt: 'SolidJs Icon' },
  framermotion: { src: framermotionLogo, alt: 'Framer Motion Icon' },
  nextuilogo: { src: nextuiLogo, alt: 'NextUI Icon' },
  agile: 'Agile',
  ux: 'UX/UI',
  threejs: { src: threejsLogo, alt: 'ThreeJs Icon' },
  mysql: { src: mySqlLogo, alt: 'MySQL Icon' },
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
  'npm',
  'shopify',
  'git',
  'javascript',
  'react',
  'sass',
  'typescript',
  'php',
  'html',
  'css',
  'tailwind',
  'solidjs',
  'framermotion',
  'nextuilogo',
  'threejs',
  'mysql',
  'wordpress',
]);

const designContent = createLogoElements([
  'illustrator',
  'photoshop',
  'xd',
  'figma',
]);

const skillsContent = [
  'Agile',
  'UX/UI',
  'Usability Testing',
  'Prototyping',
  'Wireframing',
  'Problem Solving',
  'Mockups',
  'Team Collaboration',
  'User Flow',
  'Information Architecture',
  'Style Guides',
  'SEO',
];

function AboutTools() {
  return (
    <>
    <div className="mb-16 md:ml-6 md:mt-10">
      <Accordion variant="splitted" className="max-w-[1000px] px-6">
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
              <span className="text-[#2b2b2b] dark:text-white">Development Tools</span>
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
              <span className="text-[#2b2b2b] dark:text-white">Design Tools</span>
            </div>
          }
          classNames={{
            title: 'text-md font-medium md:text-[20px] group',
            content: 'text-sm py-3',
          }}
        >
          {designContent}
        </AccordionItem>

        <AccordionItem
          key="3"
          className="designTools m-2 shadow-none py-1 rounded-[5px] bg-gradient-to-r from-[#abc3ff] to-[white] md:py-2 dark:from-[#607bc1] dark:to-darkBackground"
          aria-label="Accordion 3"
          title={
            <div className="flex items-center w-full">
              <img 
                src={skillsIcon} 
                alt="Skills Icon" 
                className="w-5 h-5 ml-2 mr-2 dark:invert"
              />
              <span className="text-[#2b2b2b] dark:text-white">Other Skills</span>
            </div>
          }
          classNames={{
            title: 'text-md font-medium md:text-[20px] group',
            content: 'text-sm py-6',
          }}
        >
          <ul className="flex flex-wrap gap-4 text-sm md:text-[18px] text-[#2b2b2b] dark:text-white">
            {skillsContent.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#86A6F6] rounded-full mr-1"></span>
                {skill}
              </li>
            ))}
          </ul>
        </AccordionItem>
      </Accordion>
      </div>
    </>
  );
}

export default AboutTools;
