import React from "react";
import Logo from "/src/assets/NVLogo.svg";
import darkLogo from "/src/assets/nv-logo-dark.svg";
import Menu from "../components/Menu";

function Nav() {
  return (
    <>
      <nav
        className="top-0 fixed left-0 right-0 z-50 justify-end
        bg-white/30 dark:bg-darkBackground/30
        backdrop-filter backdrop-blur-lg
        border-b border-white/20 dark:border-gray-800/20
        shadow-sm dark:shadow-lg"
      >
        <div className="max-w-100 mx-auto px-4">
          <div className="flex justify-between items-center py-0">
            <a href="/">
              <img
                src={Logo}
                alt="Nadia Vespalec Logo"
                width={40}
                className="dark:hidden"
              />
              <img
                src={darkLogo}
                alt="Nadia Vespalec Logo"
                width={40}
                className="hidden dark:block"
              />
            </a>
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
