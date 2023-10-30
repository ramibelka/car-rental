import React from "react";
import Reviews from "../components/Reviews";

const Testimonials = () => {
  return (
    <div>
      <h1 className="pt-8 text-4xl font-extrabold text-center md:text-start md:px-12">
        Testimonials
      </h1>
      <div class="border-t border-gray-300 m-4"></div>
      <Reviews />
    </div>
  );
};

export default Testimonials;
