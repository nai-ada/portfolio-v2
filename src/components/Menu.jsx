import React from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Switch,
} from '@nextui-org/react';
import { MoonIcon } from '../assets/MoonIcon.jsx';
import { SunIcon } from '../assets/SunIcon.jsx';
import { useTheme } from '../providers/ThemeProvider';

function Menu() {
  const menuItems = ['About', 'Works', 'Connect']; 
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      setIsMenuOpen(false); // Close menu after scrolling
    }
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: 'bg-hidden sm:relative sticky top-0 z-50',
        wrapper: 'max-w-full p-2',
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-24">
        <NavbarItem className="relative group">
          <Link 
            color="foreground" 
            onClick={() => scrollToSection('about')}
            className='md:text-[15px] text-[#232323] dark:text-white uppercase  font-[500] hover:opacity-80 cursor-pointer'
          >
            About
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white opacity-70 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </NavbarItem>

        <NavbarItem className="relative group">
          <Link 
            color="foreground" 
            onClick={() => scrollToSection('works')}
            className='md:text-[15px] text-[#232323] dark:text-white uppercase font-[500] hover:opacity-80 cursor-pointer'
          >
            Works
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white opacity-70 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </NavbarItem>

        <NavbarItem className="relative group">
          <Link 
            color="foreground" 
            onClick={() => scrollToSection('connect')}
            className='md:text-[15px] text-[#232323] dark:text-white uppercase font-[500] hover:opacity-80 cursor-pointer'
          >
            Connect
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white opacity-70 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </NavbarItem>

        <Switch
          isSelected={theme === 'dark'}
          size="md"
          color="primary"
          onChange={toggleTheme}
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              <MoonIcon className={className} />
            )
          }
        />
      </NavbarContent>

      <NavbarMenu className="bg-white dark:bg-darkBackground">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="flex justify-start">
            <div
              onClick={() => scrollToSection(item.toLowerCase())}
              className="mt-7 text-black dark:text-white text-[17px] uppercase text-right ml-6 pt-4 font-[400] cursor-pointer"
            >
              {item}
            </div>
          </NavbarMenuItem>
        ))}
        <div className="mt-10 ml-6 flex flex-col gap-4 justify-start items-start">
          <Switch
            isSelected={theme === 'dark'}
            size="md"
            color="primary"
            onChange={toggleTheme}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}

export default Menu;