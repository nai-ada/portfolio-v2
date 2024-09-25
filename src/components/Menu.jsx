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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['Home', 'About', 'Works', 'Connect'];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: 'bg-transparent',
        wrapper: 'max-w-full p-2',
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 " justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Connect
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-transparent mt-1">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="flex justify-end">
            <Link
              className="mt-7 text-black text-[22px] text-right pr-2 pt-4 font-normal"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
