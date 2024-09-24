import { useState } from 'react';
import Logo from '/src/assets/NVLogo.svg';

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
      {/* Logo at the top-left */}
      <div className=" top-0 left-0 p-4 z-50">
        <a href="#" className="block">
          <img src={Logo} alt="Nadia Vespalec Logo" width={40} />
        </a>
      </div>

      {/* Navigation at the bottom */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[white] bg-opacity-90 shadow-lg">
        <div className="max-w-3xl mx-auto px-4">
          <ul className="flex justify-center items-center py-4">
            {NavigationObj.items.map((item) => (
              <li key={item.title} className="mx-2">
                <a
                  href={item.link}
                  className="inline-block text-lightTextColor text-lg hover:text-black"
                >
                  <span className="inline-block px-3 py-1 hover:bg-navHoverColor hover:rounded-full">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
