import React from "react";
import Phone from "../img/phone-download.JPG";
import Play from "../img/play-store.svg";
import App from "../img/app-store.svg";

const Download = () => {
  return (
    <div className="grid-cols-2 px-8 md:grid place-items-start bg-slate-50">
      <div className="py-12 md:child:text-start child:text-center md:mx-10">
        <h1 className="text-4xl font-extrabold">
          Download our app to get most out of it
        </h1>
        <p className="my-10 text-slate-600">
          Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you.
        </p>
        <div className="my-4 md:flex md:child:mx-2 child:mx-auto">
          <img src={Play} alt="" className="mb-5 cursor-pointer md:mb-0" />
          <img src={App} alt="" className="cursor-pointer" />
        </div>
      </div>
      <img src={Phone} alt="" className="hidden md:block" />
    </div>
  );
};

export default Download;
