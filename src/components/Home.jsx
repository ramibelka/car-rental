import React from "react";
import { useEffect, useState } from "react";
import CarHome from "../img/heroCar.png";
import Navbar from "./Navbar";
import { AiFillDownCircle } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="h-screen bg-hero-bg" id="home">
      <Navbar />
      <div className="flex flex-col items-center mt-10 md:flex-row">
        {/* Left Side: Title, Greeting, and Buttons */}
        <div className="p-8 text-center md:text-start md:w-1/2">
          <h1 className="text-5xl font-extrabold md:text-6xl">
            Discover Your Dream Car
          </h1>
          <p className="my-4 text-xl font-medium">
            Welcome to our car rental service. Find the perfect car for your
            next adventure.
          </p>
          <div className="grid gap-4 py-8 text-center md:flex md:flex-row">
            <Link to="booking" spy={true} smooth={true} duration={800}>
              <button className="flex items-center justify-center w-full px-6 py-3 text-lg font-semibold text-white transition-shadow duration-500 bg-orange-500 hover:shadow-lg hover:shadow-orange-500">
                Book a Ride
                <AiFillDownCircle className="ml-2" />
              </button>
            </Link>
            <Link to="plan" spy={true} smooth={true} duration={800}>
              <button className="justify-center w-full px-6 py-3 text-lg font-semibold text-white transition-colors duration-500 bg-black border border-black hover:bg-white hover:text-black">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Car Image */}
        <div className="hidden md:w-1/2 sm:inline ">
          <img
            src={CarHome}
            alt="Car"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
      <Link to="home" spy={true} smooth={true} duration={800}>
        {scrollPosition > 600 && (
          <button className="fixed w-10 h-12 bg-orange-500 bottom-4 right-4">
            <FaArrowCircleUp className="ml-2 text-2xl text-white" />
          </button>
        )}
      </Link>
    </div>
  );
};

export default Home;
