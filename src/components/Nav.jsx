import { useState } from 'react';
import Logo from '/src/assets/NVLogo.svg';
import SwitchTheme from '../components/SwitchTheme';

function Nav() {
  const NavigationObj = {
    items: [
      {
        title: 'About',
        link: '#',
      },
      {
        title: 'Works',
        link: '#',
      },
      {
        title: 'Connect',
        link: '#',
      },
    ],
  };

  return (
    <>
      <nav className=" top-0 left-0 right-0 z-50">
        <div className="max-w-100 mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="#" className="block">
              <img src={Logo} alt="Nadia Vespalec Logo" width={43} />
            </a>

            {/* Navigation Items and Switch */}
            <div className="flex items-center">
              <ul className="hidden md:flex items-center mr-4 font-medium text-[#2b2b2b]">
                {NavigationObj.items.map((item) => (
                  <li key={item.title} className="mx-4">
                    <a href={item.link} className="inline-block text-lg">
                      <span className="inline-block px-3 py-1 hover:text-gray-400">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Theme Switch */}
              <SwitchTheme />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
