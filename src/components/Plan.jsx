import React from "react";
import selectCar from "../img/select-car.png";
import drive from "../img/drive.png";
import contact from "../img/contact.png";

const Plan = () => {
  return (
    <div
      className="flex flex-col items-center justify-center md:h-screen"
      id="plan"
    >
      <div className="flex flex-col text-center">
        <h4 className="text-xl font-extrabold md:text-2xl">
          Plan your trip now
        </h4>
        <h1 className="text-2xl font-extrabold md:text-4xl">
          Quick & easy car rental
        </h1>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col items-center justify-center px-4 pb-10 m-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <img src={selectCar} alt="" />
          <h3 className="mb-3 text-xl font-extrabold">Select Car</h3>
          <p className="text-center">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-4 pb-10 m-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <img src={contact} alt="" />
          <h3 className="mb-3 text-xl font-extrabold">Contact Operator</h3>
          <p className="text-center">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-4 pb-10 m-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <img src={drive} alt="" />
          <h3 className="mb-3 text-xl font-extrabold">Let's Drive</h3>
          <p className="text-center">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
