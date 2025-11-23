import React, { useEffect, useState } from "react";

const SunIcon = () => (
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.847 5.163a.75.75 0 10-1.06-1.06l-1.59 1.59a.75.75 0 101.06 1.06l1.59-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM17.59 17.59a.75.75 0 00-1.06 1.06l1.59 1.59a.75.75 0 001.06-1.06l-1.59-1.59zM5.163 18.847a.75.75 0 00-1.06 1.06l1.59 1.59a.75.75 0 001.06-1.06l-1.59-1.59zM3 12.75a.75.75 0 01-.75-.75h-2.25a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM5.163 5.163L3.573 3.573a.75.75 0 00-1.06 1.06l1.59 1.59a.75.75 0 001.06-1.06zm7.5 15.75a.75.75 0 01-.75.75H9.75a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75z" />
  </svg>
);

// 🌙 SVG for the Moon icon (Displayed when in Light Mode - option to switch to Dark)
const MoonIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    ></path>
  </svg>
);
const NavigationHeader = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const htmlElement = document.documentElement;

    // Remove classes to ensure only the current preference is applied
    htmlElement.classList.remove("light", "dark");

    if (isDarkMode) {
      // Add the 'dark' class: This triggers Tailwind's dark: styles.
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      // Remove 'dark': Default (light) styles apply. Explicitly add 'light' for consistency.
      htmlElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    // Optional cleanup function
    return () => {
      htmlElement.classList.remove("light", "dark");
    };
  }, [isDarkMode]);
  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const navLinks = [
    { name: "About", href: "/about", current: true },
    { name: "Skill", href: "/skill", current: false },
    { name: "Services", href: "/services", current: false },
    { name: "Portfolio", href: "/portfolio", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];

  return (
    <div className="bg-gray-50 w-full dark:bg-gray-800 font-inter">
      <nav className="bg-white border-b border-gray-200 shadow-lg dark:bg-gray-900 rounded-b-xl">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo and Name */}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse border-2 p-1"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">
              SOKNEANG
            </span>
          </a>

          <div className="flex items-center lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
            {/* Mobile Menu Button (Hamburger/X Icon) - Now functional via React state */}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>

              {/* Conditional rendering for Hamburger (closed) or X (open) icons */}
              {!isMenuOpen ? (
                // Hamburger Icon
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              ) : (
                // Close Icon (X)
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Menu Links - Visibility toggled using Tailwind 'hidden' class based on state */}
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700 uppercase">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block py-2 px-3 rounded lg:p-0 transition duration-150 ease-in-out
                      ${
                        link.current
                          ? "text-white bg-purple-700 lg:bg-transparent lg:text-purple-700 dark:text-white lg:dark:text-purple-500"
                          : "text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-purple-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                      }
                    `}
                    aria-current={link.current ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click (mobile friendly)
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pl-5">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full border 
                     bg-gray-100 text-gray-800 border-gray-300
                     dark:bg-gray-700 dark:text-white dark:border-gray-600
                     hover:ring-2 hover:ring-purple-400 dark:hover:ring-purple-400
                     transition-all duration-300"
                aria-label={
                  isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                }
              >
                {/* Display the Sun icon in Dark Mode, Moon icon in Light Mode */}
                {isDarkMode ? (
                  <span className="text-yellow-400">
                    <SunIcon />
                  </span>
                ) : (
                  <MoonIcon />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationHeader;
