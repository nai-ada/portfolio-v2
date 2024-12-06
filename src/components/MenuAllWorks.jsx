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
import { HashLink } from 'react-router-hash-link';

function MenuAllWorks() {
  const menuItems = ['Return Home']; 
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();


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
          <HashLink 
            smooth
            to="/" 
            className='md:text-[16px] text-[#232323] dark:text-white font-[500] hover:opacity-80 cursor-pointer'
          >
            Return Home
          </HashLink>
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
            {item === 'Return Home' ? (
              <HashLink 
                smooth
                to="/"
                className="mt-7 text-black dark:text-white text-[22px] text-right ml-2 pt-4 font-[400] cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </HashLink>
            ) : (
              <HashLink 
                smooth
                to="/pages/all-works"
                className="mt-7 text-black dark:text-white text-[22px] text-right ml-2 pt-4 font-[400] cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </HashLink>
            )}
          </NavbarMenuItem>
        ))}
        <div className="mt-10 ml-2 flex flex-col gap-4 justify-start items-start">
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

export default MenuAllWorks;