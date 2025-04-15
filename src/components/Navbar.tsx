import React, { useState } from 'react';
import { Code2, ChevronDown, Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full shadow-md z-50 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Code2 className="h-8 w-8 text-pink-600" />
            </motion.div>
            <span
              className={`ml-2 text-xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              DayBreak Tech-Innovations
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                className={`hover:text-pink-600 transition-colors duration-300 cursor-pointer ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                activeClass="text-pink-600"
              >
                {item.label}
              </Link>
            ))}

            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors duration-300"
              >
                Get Started
              </motion.button>
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md hover:text-pink-600 focus:outline-none ${
                darkMode ? 'text-white' : 'text-gray-700'
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className={`md:hidden overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                className={`block px-3 py-2 rounded-md hover:text-pink-600 hover:bg-pink-50 cursor-pointer ${
                  darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full mt-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}