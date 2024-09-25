import { useState } from 'react';
import Logo from '/src/assets/NVLogo.svg';
import SwitchTheme from '../components/SwitchTheme';
import Menu from '../components/Menu';

function Nav() {
  return (
    <>
      <nav className="top-0 left-0 right-0 z-50">
        <div className="max-w-100 mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <a href="#" className="block">
              <img src={Logo} alt="Nadia Vespalec Logo" width={43} />
            </a>

            {/* Navigation Items and Switch */}
            <div className="flex items-center">
              {/* SwitchTheme is now outside the hidden ul */}
              <SwitchTheme className="mr-4" />
              <Menu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
