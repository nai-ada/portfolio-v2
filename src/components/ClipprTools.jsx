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
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const logos = {
  npm: { src: npmLogo, alt: 'NPM', title: 'NPM' },
  shopify: { src: shopifyLogo, alt: 'Shopify', title: 'Shopify' },
  woocommerce: { src: woocommerceLogo, alt: 'WooCommerce', title: 'WooCommerce' },
  figma: { src: figmaLogo, alt: 'Figma', title: 'Figma' },
  xd: { src: xdLogo, alt: 'Adobe XD', title: 'Adobe XD' },
  photoshop: { src: photoshopLogo, alt: 'Photoshop', title: 'Photoshop' },
  illustrator: { src: illustratorLogo, alt: 'Adobe Illustrator', title: 'Illustrator' },
  git: { src: gitLogo, alt: 'Git', title: 'Git' },
  javascript: { src: javascriptLogo, alt: 'JavaScript', title: 'JavaScript' },
  react: { src: reactLogo, alt: 'React', title: 'React' },
  sass: { src: sassLogo, alt: 'SASS', title: 'SASS' },
  typescript: { src: typescriptLogo, alt: 'TypeScript', title: 'TypeScript' },
  php: { src: phpLogo, alt: 'PHP', title: 'PHP' },
  html: { src: htmlLogo, alt: 'HTML', title: 'HTML' },
  css: { src: cssLogo, alt: 'CSS', title: 'CSS' },
  tailwind: { src: tailwindLogo, alt: 'Tailwind', title: 'Tailwind' },
  solidjs: { src: solidLogo, alt: 'SolidJs', title: 'SolidJS' },
  framermotion: { src: framermotionLogo, alt: 'Framer Motion', title: 'Framer Motion' },
  nextui: { src: nextuiLogo, alt: 'NextUI', title: 'NextUI' },
  threejs: { src: threejsLogo, alt: 'ThreeJs', title: 'ThreeJS' },
  mysql: { src: mySqlLogo, alt: 'MySQL', title: 'MySQL' },
  wordpress: { src: wordpressLogo, alt: 'Wordpress', title: 'WordPress' },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const createLogoElements = (logoKeys) =>
  logoKeys.map((key) => (
    <motion.div 
      key={key} 
      variants={item}
      className="inline-flex items-center p-2 m-2 rounded-lg"
    >
      <img
        src={logos[key].src}
        alt={logos[key].alt}
        className="md:w-12" 
        width="40"
        height="40" 
      />
      <span className="text-sm text-[#222222] dark:text-white ml-3 mr-3 font-[500]">{logos[key].title}</span>
    </motion.div>
  ));

const devTools = ['git', 'css', 'react'];
const designTools = ['xd', 'photoshop'];
const skillsContent = [
  'Agile',
  'Prototyping',
  'Wireframing',
  'Problem Solving',
  'Mockups',
  'Team Collaboration',
  'Rest API'
];

function ClipprTools() {
  const devControl = useAnimation();
  const designControl = useAnimation();
  const skillsControl = useAnimation();
  
  const [devRef, devInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [designRef, designInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (devInView) devControl.start("show");
  }, [devControl, devInView]);

  useEffect(() => {
    if (designInView) designControl.start("show");
  }, [designControl, designInView]);

  useEffect(() => {
    if (skillsInView) skillsControl.start("show");
  }, [skillsControl, skillsInView]);

  return (
    <div className="space-y-8">
      <motion.div
        ref={devRef}
        variants={container}
        initial="hidden"
        animate={devControl}
      >
        <h3 className="text-[#2b2b2b] dark:text-white text-xl font-medium mb-4">Development Tools</h3>
        <div className="flex flex-wrap justify-start gap-2">
          {createLogoElements(devTools)}
        </div>
      </motion.div>

      <motion.div
        ref={designRef}
        variants={container}
        initial="hidden"
        animate={designControl}
      >
        <h3 className="text-[#2b2b2b] dark:text-white text-xl font-medium mb-4">Design Tools</h3>
        <div className="flex flex-wrap justify-start gap-2">
          {createLogoElements(designTools)}
        </div>
      </motion.div>

      <motion.div
        ref={skillsRef}
        variants={container}
        initial="hidden"
        animate={skillsControl}
      >
        <h3 className="text-[#2b2b2b] dark:text-white text-xl font-medium mb-4">Other Skills</h3>
        <ul className="flex flex-wrap gap-4">
          {skillsContent.map((skill, index) => (
            <motion.li 
              key={index}
              variants={item}
              className="rounded-lg px-3 py-3 text-transparent bg-clip-text bg-gradient-to-r from-[#6591ff] to-[#5ad3ff] text-sm md:text-[18px]"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
export default ClipprTools;