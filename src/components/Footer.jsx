import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center py-5 md:flex-row bg-neutral-800 h-1/2">
        <h1 className="px-4 py-4 text-3xl font-extrabold text-center text-white md:mr-7 ">
          Book a car by getting in touch with us
        </h1>
        <span className="flex text-3xl font-extrabold text-center text-orange-500">
          <AiOutlinePhone className="md:mr-2" />
          (123) 456-7869
        </span>
      </div>
      <div className="flex flex-col grid-cols-4 px-12 py-10 md:h-full md:grid gap-9 md:py-24 md:child:text-start child:text-center">
        <div className="text-center child:mb-4 ">
          <h1 className="text-2xl font-extrabold">CAR Rental</h1>
          <p className="text-slate-600">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div
            href="#"
            className="flex items-center justify-center font-bold cursor-pointer hover:text-yellow-400 md:justify-normal"
          >
            <AiOutlinePhone className="mr-2" />
            (123) -456-789
          </div>
          <div
            href="#"
            className="flex items-center justify-center font-bold cursor-pointer md:justify-normal hover:text-yellow-400"
          >
            <AiOutlineMail className="mr-2" />
            carrental@gmail.com
          </div>
        </div>
        <div className="child:mb-4">
          <h1 className="text-2xl font-extrabold">COMPANY</h1>
          <h2 href="#" className="cursor-pointer hover:text-yellow-400">
            New York
          </h2>
          <h2 href="#" className="cursor-pointer hover:text-yellow-400">
            Careers
          </h2>
          <h2 href="#" className="cursor-pointer hover:text-yellow-400">
            Mobile
          </h2>
          <h2 href="#" className="cursor-pointer hover:text-yellow-400">
            Blog
          </h2>
          <h2 href="#" className="cursor-pointer hover:text-yellow-400">
            How we work
          </h2>
        </div>
        <div className="child:mb-4">
          <h1 className="text-2xl font-extrabold">WORKING HOURS</h1>
          <h2>Mon - Fri: 9:00AM - 9:00PM</h2>
          <h2>Sat: 9:00AM - 19:00PM</h2>
          <h2>Sun: Closed</h2>
        </div>
        <div className="child:mb-4">
          <h1 className="text-2xl font-extrabold">SUBSCRIPTION</h1>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Enter your email"
          />
          <button className="w-full px-6 py-3 mt-4 font-semibold text-white transition-colors bg-orange-500 shadow-lg hover:bg-orange-600 shadow-orange-500 duration-350">
            RESERVE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
