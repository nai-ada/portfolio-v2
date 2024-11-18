import React from 'react';
import Logo from '/src/assets/NVLogo.svg';
import darkLogo from '/src/assets/nv-logo-dark.svg';
import Menu from '../components/Menu';

function Nav() {
  return (
    <>
      <nav className="top-0 bg-white dark:bg-darkBackground dark:md:bg-transparent shadow-md md:shadow-none md:bg-transparent  left-0 right-0 z-50 justify-end fixed md:relative bg-hidden">
        <div className="max-w-100 mx-auto px-4">
          <div className="flex justify-between items-center py-0">
            {/* Logo */}
            <a href="#">
              <img src={Logo} alt="Nadia Vespalec Logo" width={40} className="dark:hidden"/>
              <img src={darkLogo} alt="Nadia Vespalec Logo" width={40} className="hidden dark:block"/>
            </a>
            {/* Navigation Items and Menu */}
            <div className="flex items-center">
              <Menu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
