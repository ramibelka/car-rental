import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "visible";
      };
    }
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-4" id="home">
        <Link to="/">
          <div className="flex items-center pl-2 space-x-4 cursor-pointer">
            <img src={Logo} alt="Logo" className="w-12 h-12" />
            <div className="text-sm font-bold">
              Car <br /> Rentals
            </div>
          </div>
        </Link>
        <div className="z-50 flex flex-col md:hidden">
          <button
            onClick={toggleNav}
            className={`text-gray-600 hover:text-gray-800 focus:outline-none transform transition-transform duration-300 ${
              isNavOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
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
        {/**Mobileeeeee */}

        {/**desktoooooooooop */}
        <div className="items-center hidden space-x-6 md:flex">
          <Link
            to="/"
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            About
          </Link>
          <Link
            to="/vehicles"
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Vehicle Models
          </Link>
          <Link
            to="/testimonials"
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Testimonials
          </Link>
          <Link
            to="/team"
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Our Team
          </Link>
          <Link
            to="/contact"
            className="cursor-pointer hover:text-yellow-400"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Contact
          </Link>
        </div>

        <div className="hidden space-x-4 font-extrabold md:inline">
          <a href="/" className="hover:text-yellow-400">
            Login
          </a>
          <a
            href="/"
            className="px-4 py-2 font-semibold text-white transition-colors bg-orange-500 shadow-lg hover:bg-orange-600 shadow-orange-500 duration-350"
          >
            Register
          </a>
        </div>
      </nav>

      {isNavOpen && (
        <div className="fixed top-0 z-10 w-full h-full pt-40 font-bold text-center bg-white bottom-5 md:hidden ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Link
            to="/"
            className="block px-4 py-4 text-xl text-gray-700"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-4 text-xl text-gray-700"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            About
          </Link>
          <Link
            to="/vehicles"
            className="block px-4 py-4 text-xl text-gray-700"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Vehicle Models
          </Link>
          <Link
            to="/testimonials"
            className="block px-4 py-2 text-xl text-gray-700"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Testimonials
          </Link>
          <Link
            to="/team"
            className="block px-4 py-4 text-xl text-gray-700"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Our Team
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-4 text-xl text-gray-700"
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            Contact
          </Link>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Navbar;
