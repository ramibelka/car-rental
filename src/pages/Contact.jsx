import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { TbLocation } from "react-icons/tb";

const Contact = () => {
  return (
    <>
      <h1 className="pt-8 text-4xl font-extrabold text-center md:text-start md:px-12">
        Contact
      </h1>
      <div className="m-4 border-t border-gray-300"></div>
      <div className="flex flex-col items-center justify-center p-10 md:p-20 md:flex-row md:h-screen">
        <div className="md:w-full md:px-16">
          <h1 className="text-4xl font-extrabold text-center md:text-start md:text-5xl">
            Need additional information?
          </h1>
          <p className="my-10 text-center md:text-start text-slate-600">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
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
            className="flex items-center justify-center my-4 font-bold cursor-pointer md:justify-normal hover:text-yellow-400"
          >
            <AiOutlineMail className="mr-2" />
            carrental@gmail.com
          </div>
          <div
            href="#"
            className="flex items-center justify-center font-bold cursor-pointer md:justify-normal hover:text-yellow-400"
          >
            <TbLocation className="mr-2" />
            Constantine, Algeria
          </div>
        </div>
        <div className="mt-10 md:w-full">
          <form
            action=""
            className="flex flex-col child:mb-4 child:text-center child:md:text-start"
          >
            <label htmlFor="name" className="text-lg font-extrabold">
              Full name
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              type="text"
              name="name"
              placeholder="i.g: John Doe"
            />
            <label htmlFor="email" className="text-lg font-extrabold">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Enter your email"
              name="email"
            />
            <label htmlFor="about" className="text-lg font-extrabold">
              Tell us about it
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              name="about"
              placeholder="Write something here ..."
              rows="4"
            />
          </form>
          <button className="w-full px-6 py-3 mt-4 font-semibold text-white transition-colors bg-orange-500 shadow-lg hover:bg-orange-600 shadow-orange-500 duration-350">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
