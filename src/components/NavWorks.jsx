import React from 'react';
import Logo from '/src/assets/NVLogo.svg';
import darkLogo from '/src/assets/nv-logo-dark.svg';
import MenuWorks from '../components/MenuWorks';

function NavWorks() {
  return (
    <>
      <nav className="top-0 bg-white dark:bg-darkBackground  shadow-md md:shadow-none  left-0 right-0 z-50 justify-end fixed ">
        <div className="max-w-100 mx-auto px-4">
          <div className="flex justify-between items-center py-0">
            <a href="/">
              <img src={Logo} alt="Nadia Vespalec Logo" width={40} className="dark:hidden"/>
              <img src={darkLogo} alt="Nadia Vespalec Logo" width={40} className="hidden dark:block"/>
            </a>
            <div className="flex items-center">
              <MenuWorks />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavWorks;
