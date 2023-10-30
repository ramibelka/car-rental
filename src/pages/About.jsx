import React from "react";
import Man from "../img/about.jpg";
import Icon1 from "../img/about-icon1.png";
import Icon2 from "../img/about-icon2.png";
import Icon3 from "../img/about-icon3.png";
import Plan from "../components/Plan";

const About = () => {
  return (
    <>
      <h1 className="pt-8 text-4xl font-extrabold text-center md:text-start md:px-12">
        About
      </h1>
      <div className="m-4 border-t border-gray-300"></div>
      <div className="grid-cols-2 pt-20 mb-20 md:mb-0 md:h-screen md:grid">
        <img src={Man} alt="" className="w-4/5 mx-auto mb-6 md:w-3/5" />
        <div className="px-10 text-center md:px-20 md:text-start">
          <h4 className="text-2xl font-bold">About Company</h4>
          <h1 className="my-2 text-4xl font-bold">
            You start the engine and your adventure begins
          </h1>
          <p className="my-10 text-slate-600">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="flex flex-col items-center md:justify-between md:flex-row child:mb-10">
            <div className="grid grid-rows-2 gap-3">
              <img src={Icon1} alt="" className="place-self-center" />
              <p className="flex items-end justify-center">
                <span className="text-4xl font-extrabold">20</span>
                <span className="ml-2 text-slate-600">
                  Car <br />
                  Types
                </span>
              </p>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <img src={Icon2} alt="" className="place-self-center" />
              <p className="flex items-end justify-center">
                <span className="text-4xl font-extrabold">85</span>
                <span className="ml-2 text-slate-600">
                  Rental <br />
                  Outlets
                </span>
              </p>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <img src={Icon3} alt="" className="place-self-center" />
              <p className="flex items-end justify-center">
                <span className="text-4xl font-extrabold">75</span>
                <span className="ml-2 text-slate-600">
                  Repair <br />
                  Shops
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Plan />
    </>
  );
};

export default About;
