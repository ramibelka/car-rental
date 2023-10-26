import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Use useEffect to conditionally apply scroll lock
  useEffect(() => {
    if (isNavOpen) {
      // Lock the body scroll
      document.body.style.overflow = "hidden";

      // Ensure the scroll is re-enabled when the component unmounts
      return () => {
        document.body.style.overflow = "visible";
      };
    }
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4">
      {/* Left side of the Navbar - Logo and Navigation Links */}
      <div className="flex items-center pl-2 space-x-4 cursor-pointer">
        <img src={Logo} alt="Logo" className="w-12 h-12" />
        <div className="text-sm font-bold">
          Car <br /> Rentals
        </div>
      </div>
      {/* Hamburger Menu Icon (visible on mobile) */}
      <div className="z-50 flex flex-col md:hidden">
        <button
          onClick={toggleNav}
          className={`text-gray-600 hover:text-gray-800 focus:outline-none transform ${
            isNavOpen ? "rotate-180" : "rotate-0"
          } duration-1000`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={"h-6 w-6"}
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
        className={`${
          isNavOpen
            ? "fixed right-0 top-0 z-10 mt-2 w-full h-full pt-36 text-center origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            : "md:flex items-center space-x-6 hidden"
        }`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={800}
          className={`${
            isNavOpen
              ? "text-gray-700 block px-4 py-4 text-sm"
              : "hover:text-yellow-400 cursor-pointer"
          }`}
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          to="plan"
          spy={true}
          smooth={true}
          duration={800}
          className={`${
            isNavOpen
              ? "text-gray-700 block px-4 py-4 text-sm"
              : "hover:text-yellow-400 cursor-pointer"
          }`}
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          About
        </Link>
        <Link
          to="models"
          spy={true}
          smooth={true}
          duration={800}
          className={`${
            isNavOpen
              ? "text-gray-700 block px-4 py-4 text-sm"
              : "hover:text-yellow-400 cursor-pointer"
          }`}
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          Vehicle Models
        </Link>
        <Link
          to="/"
          spy={true}
          smooth={true}
          duration={800}
          className={`${
            isNavOpen
              ? "text-gray-700 block px-4 py-2 text-sm"
              : "hover:text-yellow-400 cursor-pointer"
          }`}
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          Testimonials
        </Link>
        <Link
          to="/"
          spy={true}
          smooth={true}
          duration={800}
          className={`${
            isNavOpen
              ? "text-gray-700 block px-4 py-4 text-sm"
              : "hover:text-yellow-400 cursor-pointer"
          }`}
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          Our Team
        </Link>
        <Link
          to=""
          spy={true}
          smooth={true}
          duration={800}
          className={`${
            isNavOpen
              ? "text-gray-700 block px-4 py-4 text-sm"
              : "hover:text-yellow-400 cursor-pointer"
          }`}
          onClick={() => {
            setIsNavOpen(false);
          }}
        >
          Contact
        </Link>
      </div>
      {/* Right side of the Navbar - Login/Register Links (visible on all screen sizes) */}
      <div className="hidden space-x-4 md:inline">
        <a href="#" className="hover:text-yellow-400 ">
          Login
        </a>
        <a
          href="#"
          className="px-4 py-2 font-semibold text-white transition-colors bg-orange-500 shadow-lg hover:bg-orange-600 shadow-orange-500 duration-350"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
