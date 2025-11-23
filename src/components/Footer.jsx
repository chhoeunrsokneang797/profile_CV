import React from "react";
import { FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 lg:gap-16 pb-10">
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Chhoeunr Sokneang
            </h3>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Social Media
              </h3>
              <div className="flex space-x-4 py-12">
                <a
                  href="https://linkedin.com/in/chhoeunr-sokneang-51a75b374"
                  target="_blank" // Recommended: Opens the link in a new tab
                  rel="noopener noreferrer" // Recommended: Security measure for target="_blank"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-teal-500 transition duration-300">
                    <FaLinkedin size={20} />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@chhoeunrsokneang"
                  target="_blank" // Recommended: Opens the link in a new tab
                  rel="noopener noreferrer" // Recommended: Security measure for target="_blank"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-teal-500 transition duration-300">
                    <FaYoutube size={20} />
                  </div>
                </a>
                <a
                  href="https://telegram.org/"
                  target="_blank" // Recommended: Opens the link in a new tab
                  rel="noopener noreferrer" // Recommended: Security measure for target="_blank"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full hover:bg-teal-500 transition duration-300">
                    <FaTelegram size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-150"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-150"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-150"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-150"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-teal-400 transition duration-150"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="block">
                  Front-end Development (**React.js**)
                </span>
              </li>
              <li>
                <span className="block">API Development & Integration</span>
              </li>
              <li>
                <span className="block">Responsive & Mobile-first Design</span>
              </li>
              <li>
                <span className="block">Performance Optimization</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"
                  ></path>
                </svg>
                <div>
                  <span className="text-sm block">Email</span>
                  <a
                    href="mailto:Sal.kimheng1212@gmail.com"
                    className="hover:text-white transition duration-150"
                  >
                    chhoeunrsokneag5@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <div>
                  <span className="text-sm block">Phone</span>
                  <a
                    href="tel:+85598886847"
                    className="hover:text-white transition duration-150"
                  >
                    +855 962912796
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-teal-400 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div>
                  <span className="text-sm block">Address</span>
                  <span className="block">Phnom Penh, Cambodia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; 2025 Chhoeunr Sokneang. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
