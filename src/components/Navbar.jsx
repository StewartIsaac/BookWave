import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Ensures that the menu closes when clicking on a link
  };

  return (
    <nav className="bg-gradient-to-tr from-green-500 to-green-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center">
            <img className="w-7" src="/logo-w.png" alt="BookWave Logo" />
            <h1 className="text-white text-2xl font-bold ml-2">BookWave</h1>
          </div>
        </Link>

        {/* Hamburger Menu Button */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none z-50 relative">
            {isOpen ? (
              // X icon for closing menu (updated visibility and styling)
              <svg
                className="w-8 h-8 text-white z-50" // Ensure z-index is higher to make the icon appear above the menu
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon for opening menu
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${isOpen
            ? "fixed inset-0 bg-gradient-to-bl from-green-500 to-green-700 h-screen flex flex-col items-center justify-center z-40" // Added z-index to the background
            : "hidden md:flex"
            }`}
        >
          {/* Logo in mobile menu */}
          <div className="flex flex-col items-center mb-10 md:hidden">
            <img className="w-8" src="/logo-w.png" alt="BookWave Logo" />
            <h1 className="text-white text-2xl font-bold mt-2">BookWave</h1>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-8 text-white text-center md:flex-row md:space-x-6 md:space-y-0">
            <li>
              <Link to="/" className="text-xl font-sans hover:opacity-70" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/my-books" className="text-xl font-sans hover:opacity-70" onClick={closeMenu}>
                My Books
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-xl font-sans hover:opacity-70" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-xl font-sans hover:opacity-70" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
