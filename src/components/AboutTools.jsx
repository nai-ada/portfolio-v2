import { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import mySqlLogo from "/src/assets/mysql.png";
import npmLogo from "/src/assets/npm.png";
import wordpressLogo from "/src/assets/wordpress.png";
import shopifyLogo from "/src/assets/shopify.png";
import woocommerceLogo from "/src/assets/woocommerce.png";
import figmaLogo from "/src/assets/figma.png";
import xdLogo from "/src/assets/xd.png";
import photoshopLogo from "/src/assets/photoshop.png";
import illustratorLogo from "/src/assets/illustrator.png";
import gitLogo from "/src/assets/git.png";
import javascriptLogo from "/src/assets/js.png";
import sassLogo from "/src/assets/sass.png";
import typescriptLogo from "/src/assets/typescript.png";
import phpLogo from "/src/assets/php.png";
import htmlLogo from "/src/assets/html.png";
import cssLogo from "/src/assets/css.png";
import tailwindLogo from "/src/assets/tailwind.png";
import nodejsLogo from "/src/assets/nodejs.svg";
import expressLogo from "/src/assets/expressjs.svg";
import postgresqlLogo from "/src/assets/postgresql.svg";
import supabaseLogo from "/src/assets/supabase.svg";
import solidLogo from "/src/assets/solid.png";
import framermotionLogo from "/src/assets/framermotion.png";
import nextuiLogo from "/src/assets/nextui.png";
import threejsLogo from "/src/assets/threejs.png";
import reactLogo from "/src/assets/react.png";
import designIcon from "/src/assets/design.svg";
import devIcon from "/src/assets/dev.svg";
import skillsIcon from "/src/assets/skills.svg";

const logos = {
  npm: { src: npmLogo, alt: "NPM", title: "NPM" },
  shopify: { src: shopifyLogo, alt: "Shopify", title: "Shopify" },
  woocommerce: {
    src: woocommerceLogo,
    alt: "Woocommerce",
    title: "WooCommerce",
  },
  figma: { src: figmaLogo, alt: "Figma", title: "Figma" },
  xd: { src: xdLogo, alt: "Adobe XD", title: "Adobe XD" },
  photoshop: { src: photoshopLogo, alt: "Photoshop", title: "Photoshop" },
  illustrator: {
    src: illustratorLogo,
    alt: "Adobe Illustrator",
    title: "Illustrator",
  },
  git: { src: gitLogo, alt: "Git", title: "Git" },
  javascript: { src: javascriptLogo, alt: "JavaScript", title: "JavaScript" },
  react: { src: reactLogo, alt: "React", title: "React" },
  sass: { src: sassLogo, alt: "SASS", title: "SASS" },
  typescript: { src: typescriptLogo, alt: "TypeScript", title: "TypeScript" },
  php: { src: phpLogo, alt: "PHP", title: "PHP" },
  html: { src: htmlLogo, alt: "HTML", title: "HTML" },
  css: { src: cssLogo, alt: "CSS", title: "CSS" },
  tailwind: { src: tailwindLogo, alt: "Tailwind", title: "Tailwind" },
  solidjs: { src: solidLogo, alt: "SolidJs", title: "SolidJS" },
  framermotion: {
    src: framermotionLogo,
    alt: "Framer Motion",
    title: "Framer Motion",
  },
  nextui: { src: nextuiLogo, alt: "HeroUI", title: "HeroUI" },
  threejs: { src: threejsLogo, alt: "ThreeJs", title: "ThreeJS" },
  mysql: { src: mySqlLogo, alt: "MySQL", title: "MySQL" },
  wordpress: { src: wordpressLogo, alt: "Wordpress", title: "WordPress" },
  nodejs: { src: nodejsLogo, alt: "Node.js", title: "Node.js" },
  express: { src: expressLogo, alt: "Express.js", title: "Express.js" },
  supabase: { src: supabaseLogo, alt: "Supabase", title: "Supabase" },
  postgresql: { src: postgresqlLogo, alt: "PostgreSQL", title: "PostgreSQL" },
};

const createLogoElements = (logoKeys) =>
  logoKeys.map((key) => (
    <div key={key} className="inline-flex items-center p-2 m-2 rounded-lg">
      <img
        src={logos[key].src}
        alt={logos[key].alt}
        className="md:w-12"
        width="40"
        height="40"
      />
      <span className="text-sm text-[#222222] dark:text-white ml-3 mr-3 font-[500] transition-colors duration-200">
        {logos[key].title}
      </span>
    </div>
  ));

const devContent = createLogoElements([
  "git",
  "javascript",
  "wordpress",
  "mysql",
  "nodejs",
  "express",
  "postgresql",
  "supabase",
  "react",
  "sass",
  "typescript",
  "php",
  "html",
  "css",
  "tailwind",
  "solidjs",
  "npm",
  "shopify",
]);

const designContent = createLogoElements([
  "illustrator",
  "photoshop",
  "xd",
  "figma",
]);

const skillsContent = [
  "Agile",
  "UX/UI",
  "Usability Testing",
  "Prototyping",
  "Wireframing",
  "Problem Solving",
  "Mockups",
  "Team Collaboration",
  "User Flow",
  "Information Architecture",
  "Style Guides",
  "SEO",
  "Rest API",
  "WordPress Plugins",
  "Stripe Setup",
];

function AboutTools() {
  return (
    <>
      <div className="mb-16 md:ml-6 md:mt-5">
        <div className="w-full max-w-[1000px] 4xl:w-full 4xl:max-w-[1260px]">
          <Accordion
            variant="splitted"
            className="px-6 transition-colors duration-200 accordion-component"
          >
            <AccordionItem
              key="1"
              className="devTools m-2 shadow-none py-1 rounded-[5px] border-none bg-gradient-to-r from-[#cfdeff] to-[white] md:py-2 dark:from-[#6379a9] dark:to-darkBackground overflow-hidden transition-colors duration-200 ease-in-out"
              aria-label="Accordion 1"
              title={
                <div className="flex items-center w-full">
                  <img
                    src={devIcon}
                    alt="Development Icon"
                    className="w-5 h-5 ml-2 mr-2 transition-transform border-none duration-300 group-data-[state=open]:rotate-180 dark:invert"
                  />
                  <span className="text-[#2b2b2b] dark:text-white transition-colors duration-200">
                    Development Tools
                  </span>
                </div>
              }
              classNames={{
                title: "text-md font-medium md:text-[20px] group",
                content: "text-sm py-4",
              }}
            >
              <div className="flex flex-wrap justify-start gap-2">
                {devContent}
              </div>
            </AccordionItem>

            <AccordionItem
              key="2"
              className="designTools m-2 shadow-none py-1 rounded-[5px] border-none bg-gradient-to-r from-[#cfdeff] to-[white] md:py-2 dark:from-[#6379a9] dark:to-darkBackground overflow-hidden transition-colors duration-200 ease-in-out"
              aria-label="Accordion 2"
              title={
                <div className="flex items-center w-full">
                  <img
                    src={designIcon}
                    alt="Design Icon"
                    className="w-5 h-5 ml-2 mr-2 transition-transform border-none duration-300 group-data-[state=open]:rotate-180 dark:invert"
                  />
                  <span className="text-[#2b2b2b] dark:text-white transition-colors duration-200">
                    Design Tools
                  </span>
                </div>
              }
              classNames={{
                title: "text-md font-medium md:text-[20px] group",
                content: "text-sm py-4",
              }}
            >
              <div className="flex flex-wrap justify-start gap-2">
                {designContent}
              </div>
            </AccordionItem>

            <AccordionItem
              key="3"
              className="designTools m-2 shadow-none py-1 rounded-[5px] border-none bg-gradient-to-r from-[#cfdeff] to-[white] md:py-2 dark:from-[#6379a9] dark:to-darkBackground overflow-hidden transition-colors duration-200 ease-in-out"
              aria-label="Accordion 3"
              title={
                <div className="flex items-center w-full">
                  <img
                    src={skillsIcon}
                    alt="Skills Icon"
                    className="w-5 h-5 ml-2 mr-2 dark:invert"
                  />
                  <span className="text-[#2b2b2b] dark:text-white transition-colors duration-200">
                    Other Skills
                  </span>
                </div>
              }
              classNames={{
                title: "text-md font-medium border-none md:text-[20px] group",
                content: "text-sm py-6",
              }}
            >
              <ul className="flex flex-wrap gap-4 text-sm md:text-[18px]">
                {skillsContent.map((skill, index) => (
                  <li
                    key={index}
                    className="rounded-lg px-3 py-3 text-[#222222] dark:text-white transition-colors duration-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default AboutTools;
