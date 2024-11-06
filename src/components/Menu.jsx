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
        <NavbarItem>
          <Link color="foreground" href="#" className='md:text-[20px] font-[500]'>
            ABOUT 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className='md:text-[20px] font-[500]'>
            PROJECTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className='md:text-[20px] font-[500]'>
            CONNECT
          </Link>
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
          <NavbarMenuItem key={`${item}-${index}`} className="flex justify-start uppercase">
            <Link
              className="mt-7 text-black text-[22px] text-right ml-2 pt-4 font-[500]"
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
