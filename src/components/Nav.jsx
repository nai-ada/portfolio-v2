import React from 'react';
import Logo from '/src/assets/NVLogo.svg';
import Menu from '../components/Menu';

function Nav() {
  return (
    <>
      <nav className="top-0 bg-white shadow-md md:shadow-none md:bg-transparent left-0 right-0 z-50 justify-end fixed md:relative bg-hidden">
        <div className="max-w-100 mx-auto px-4">
          <div className="flex justify-between items-center py-0">
            {/* Logo */}
            <a href="#" className="hidden md:block">
              <img src={Logo} alt="Nadia Vespalec Logo" width={38} />
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
