import React from "react";
import CarHome from "../img/car-home.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="h-screen bg-hero-bg">
      <Navbar />
      <div className="flex flex-col mt-10 md:flex-row items-center">
        {/* Left Side: Title, Greeting, and Buttons */}
        <div className="md:w-1/2 p-8 text-gray-800">
          <h1 className="text-4xl font-extrabold">Discover Your Dream Car</h1>
          <p className="text-lg my-4">
            Welcome to our car rental service. Find the perfect car for your
            next adventure.
          </p>
          <div className="grid gap-2 py-8 md:flex md:flex-row">
            <button className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 rounded-md">
              Book a Ride
            </button>
            <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold hover:bg-blue-600 rounded-md">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Car Image */}
        <div className="md:w-1/2 hidden sm:inline ">
          <img src={CarHome} alt="Car" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
