import React from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from '../assets/MoonIcon.jsx';
import { SunIcon } from '../assets/SunIcon.jsx';



export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['About', 'Works', 'Connect'];

  return (
    
    <Navbar
  onMenuOpenChange={setIsMenuOpen}
  classNames={{
    base: 'bg-hidden sm:relative sticky top-0 z-50',  // Added sm:relative
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
          className='md:text-[20px] text-[#232323] font-[400] hover:opacity-90'
        >
          About
        </Link>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black opacity-70 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
      </NavbarItem>

      <NavbarItem className="relative group">
        <Link 
          color="foreground" 
          href="#" 
          className='md:text-[20px] text-[#232323] font-[400] hover:opacity-90 '
        >
          Works
        </Link>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black opacity-70 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
      </NavbarItem>

      <NavbarItem className="relative group">
        <Link 
          color="foreground" 
          href="#" 
          className='md:text-[20px] text-[#232323] font-[400] hover:opacity-90'
        >
          Connect
        </Link>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black opacity-70 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
      </NavbarItem>

        <Switch
            defaultSelected
            size="md"
            style={{ '--nextui-colors-primary': '#86A6F6' }}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          />
      </NavbarContent>
      <NavbarMenu className=" bg-white fixed">
        
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="flex justify-start">
            <Link
              className="mt-7 text-black text-[22px] text-right ml-2 pt-4 font-[400]"
              href="#"
              size="lg"
            >
              {item}
            </Link>
            
          </NavbarMenuItem>
        ))}
     <div className={`mt-10  ml-2  ${isMenuOpen ? 'flex flex-col gap-4' : 'hidden'} justify-start items-start`}>
          <Switch
            defaultSelected
            size="md"
            style={{ '--nextui-colors-primary': '#86A6F6' }}
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
