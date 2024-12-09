import React from 'react';
import { Link } from '@nextui-org/react';
import FadeIn from '../components/FadeIn';

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
 
    <footer className="bg-gradient-to-t from-[#b3c6f6] to-white dark:from-[#1d253a] dark:to-darkBackground py-12 px-6 md:p-[6rem] relative -z-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col space-y-8">
          {/* Social Links Section */}
          <div className="space-y-4">
            <h2 className="text-[22px]  font-bold text-[#222222] dark:text-white mb-4 uppercase">Links</h2>
            <div className="flex flex-row space-x-4 md:space-x-8">
              <a 
                href="https://linkedin.com/in/nadiavespalec" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-70 transition-opacity text-[#222222] dark:text-white underline"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/nai-ada" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-70 transition-opacity  text-[#222222] dark:text-white underline"
              >
                GitHub
              </a>
              <a 
                href="mailto:nadiavespalec00@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-70 transition-opacity  text-[#222222] dark:text-white underline"
              >
                Email
              </a>
            </div>
          </div>

               {/* Border Divider */}
               <div className="border-t border-[#222222] dark:border-white opacity-20"></div>


          {/* Navigation Section */}
          <div className="space-y-4">
            <h2 className="text-[22px] font-bold  text-[#222222] dark:text-white mb-4 uppercase">Navigation</h2>
            <div className="flex flex-row space-x-4 md:space-x-8">
              {['about', 'works', 'connect'].map((section) => (
                <Link 
                  key={section}
                  color="foreground" 
                  onClick={() => scrollToSection(section)}
                  className="text-sm md:text-base  text-[#222222] dark:text-white font-[500] hover:opacity-80 cursor-pointer capitalize"
                >
                  {section}
                </Link>
              ))} 
              <Link 
                href="/pages/all-works"
                color="foreground"
                className="text-sm md:text-base  text-[#222222] dark:text-white font-[500] hover:opacity-80 cursor-pointer capitalize"
              >
                All Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-12 text-center md:text-left">
          <p className="text-[10px] md:text-xs text-[#222222] dark:text-white font-medium">
            © Nadia Vespalec | 2024
          </p>
        </div>
      </div>
    </footer>

  );
}

export default Footer;