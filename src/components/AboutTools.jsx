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

const logos = {
  mysql: { src: mySqlLogo, alt: 'MySQL Icon' },
  npm: { src: npmLogo, alt: 'NPM Icon' },
  wordpress: { src: wordpressLogo, alt: 'Wordpress Icon' },
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
  threejs: { src: threejsLogo, alt: 'ThreeJs Icon' },
};

const createLogoElements = (logoKeys) =>
  logoKeys.map((key) => (
    <img
      key={key}
      src={logos[key].src}
      alt={logos[key].alt}
      className="inline p-2"
      width="50"
      height="50"
    />
  ));

const devContent = createLogoElements([
  'mysql',
  'npm',
  'wordpress',
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
  'Mockups',
  'User Flow',
  'Information Architecture',
  'Style Guides',
];

function AboutTools() {
  return (
    <>
      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          className="devTools m-4 shadow-none rounded-[5px] bg-gradient-to-r from-[#d8eaff] to-[white] font-[450]"
          aria-label="Accordion 1"
          title="Development Tools"
        >
          {devContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          className="designTools m-4 shadow-none rounded-[5px] bg-gradient-to-r from-[#d8eaff] to-[white] font-[450]"
          aria-label="Accordion 2"
          title="Design Tools"
        >
          {designContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          className="designTools m-4 shadow-none rounded-[5px] bg-gradient-to-r from-[#d8eaff] to-[white] font-[450]"
          aria-label="Accordion 2"
          title="Other Skills"
        >
          <ul className="flex flex-wrap gap-4">
            {skillsContent.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {skill}
              </li>
            ))}
          </ul>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default AboutTools;