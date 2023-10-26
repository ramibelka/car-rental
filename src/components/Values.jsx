import React from "react";
import Cars from "../img/values-cars.png";
import Value1 from "../img/value1-car.png";
import Value2 from "../img/value2-price.png";
import Value3 from "../img/value3-charges.png";
import { IoIosArrowForward } from "react-icons/io";

const Values = () => {
  return (
    <div className="my-14">
      <div className="flex flex-col items-center justify-center p-6 md:py-10 bg-neutral-800">
        <h1 className="p-4 text-4xl font-extrabold text-center text-white md:mr-7 ">
          Save big with our cheap car rental!
        </h1>
        <h2 className="p-2 text-2xl text-center text-white md:flex">
          Top Airports. Local Suppliers.
          <span className="mx-2 text-orange-500">24/7</span> Support.
        </h2>
      </div>
      <img src={Cars} alt="cars" className="mx-auto my-6 md:w-5/6" />
      <div className="grid md:grid-cols-2">
        <div className="p-8 md:p-16 md:child:text-start child:text-center child:mb-3">
          <h3 className="text-xl font-bold">Why Choose Us</h3>
          <h1 className="text-4xl font-extrabold">
            Best valued deals you will ever find
          </h1>
          <p className="py-5 text-slate-600">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="flex items-center px-6 py-3 mx-auto mt-4 font-semibold text-white transition-colors bg-orange-500 shadow-md md:mx-0 hover:bg-orange-600 shadow-orange-500 duration-350">
            Find Details <IoIosArrowForward className="ml-2" />
          </button>
        </div>
        <div className="flex flex-col px-4 md:px-16 md:pt-9">
          <div className="flex flex-col items-center justify-center p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
            <img src={Value1} alt="" />
            <div className="text-center md:text-start">
              <h3 className="mb-2 text-xl font-extrabold">
                Cross Country Drive
              </h3>
              <p className="">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
            <img src={Value2} alt="" />
            <div className="text-center md:text-start">
              <h3 className="mb-2 text-xl font-extrabold">
                All Inclusive Pricing
              </h3>
              <p className="">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
            <img src={Value3} alt="" />
            <div className="text-center md:text-start">
              <h3 className="mb-2 text-xl font-extrabold">No Hidden Charges</h3>
              <p className="">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
