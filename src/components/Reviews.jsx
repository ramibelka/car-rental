import React from "react";
import Harry from "../img/harry.jpg";
import Ron from "../img/ron.jpg";
import { FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="mb-24 bg-slate-50">
      <div className="max-w-4xl p-4 mx-auto md:my-20">
        <h3 className="text-xl font-bold text-center">Reviewed by People</h3>
        <h1 className="my-3 text-4xl font-extrabold text-center">
          Client's Testimonials
        </h1>
        <p className="px-10 text-center text-slate-600">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="grid mx-5 md:px-28 md:grid-cols-2 gap-14 place-items-center">
        <div className="bg-white shadow-xl px-9 md:px-16 py-14 shadow-slate-300">
          <p className="text-xl font-semibold">
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <img src={Harry} alt="" className="w-16 h-16 mr-2 rounded-full" />
              <span>
                <b>Harry Potter</b> <br /> Contantine
              </span>
            </div>
            <FaQuoteRight className="text-4xl text-orange-500" />
          </div>
        </div>
        <div className="hidden px-16 bg-white shadow-xl md:block py-14 shadow-slate-300">
          <p className="text-xl font-semibold">
            "The car was in great condition and made our trip even better.
            Highly recommend for this car rental website!"
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <img src={Ron} alt="" className="w-16 h-16 mr-2 rounded-full" />
              <span>
                <b>Ron Grizzly</b> <br /> Algiers
              </span>
            </div>
            <FaQuoteRight className="text-4xl text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
