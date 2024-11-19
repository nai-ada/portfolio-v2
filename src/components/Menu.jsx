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

  return (
    <Navbar
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
            href="#" 
            className='md:text-[20px] text-[#232323] dark:text-white font-[400] hover:opacity-80'
          >
            About
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white opacity-70 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </NavbarItem>

        <NavbarItem className="relative group">
          <Link 
            color="foreground" 
            href="#" 
            className='md:text-[20px] text-[#232323] dark:text-white font-[400] hover:opacity-80'
          >
            Works
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black dark:bg-white opacity-70 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </NavbarItem>

        <NavbarItem className="relative group">
          <Link 
            color="foreground" 
            href="#" 
            className='md:text-[20px] text-[#232323] dark:text-white font-[400] hover:opacity-80'
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
            <Link
              className="mt-7 text-black dark:text-white text-[22px] text-right ml-2 pt-4 font-[400]"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className={`mt-10 ml-2 ${isMenuOpen ? 'flex flex-col gap-4' : 'hidden'} justify-start items-start`}>
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