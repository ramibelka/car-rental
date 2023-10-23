import React, { useState } from "react";
import Logo from "../img/logo.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="p-4 flex justify-between items-center">
      {/* Left side of the Navbar - Logo and Navigation Links */}
      <div className="flex items-center space-x-4 pl-2 cursor-pointer">
        <img src={Logo} alt="Logo" className="w-12 h-12" />
        <div className="text-sm font-bold">
          Car <br /> Rentals
        </div>
      </div>

      {/* Hamburger Menu Icon (visible on mobile) */}
      <div className="md:hidden">
        <button
          onClick={toggleNav}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isNavOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links (visible on mobile when menu is open, and on desktop) */}
      <div
        className={`md:flex items-center space-x-6 ${
          isNavOpen ? "flex" : "hidden"
        }`}
      >
        <a href="#" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#" className="hover:text-yellow-400">
          About
        </a>
        <a href="#" className="hover:text-yellow-400">
          Vehicle Models
        </a>
        <a href="#" className="hover:text-yellow-400">
          Testimonials
        </a>
        <a href="#" className="hover:text-yellow-400">
          Our Team
        </a>
        <a href="#" className="hover:text-yellow-400">
          Contact
        </a>
      </div>

      {/* Right side of the Navbar - Login/Register Links (visible on all screen sizes) */}
      <div className="space-x-4">
        <a href="#" className="hover:text-yellow-400">
          Login
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-orange-500 text-white font-semibold hover:bg-orange-600 shadow-md rounded-md"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
