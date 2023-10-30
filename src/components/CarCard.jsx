import React from "react";
import { AiOutlineStar, AiFillCar } from "react-icons/ai";

const CarCard = ({ car }) => {
  return (
    <div
      className="flex flex-col pb-4 m-8 border border-gray-300 shadow w-80"
      key={car.id}
    >
      <div className="h-48 overflow-hidden">
        <img src={car.image} alt="" />
      </div>
      <div className="grid grid-cols-2 gap-8 p-4 h-52 place-content-center">
        <div className="place-self-start">
          <h1 className="text-xl font-extrabold">{car.carName}</h1>
          <span className="flex items-center">
            {[1, 2, 3, 4, 5].map((value) => (
              <span key={value}>
                <AiOutlineStar />
              </span>
            ))}
          </span>
        </div>
        <div className="place-self-end">
          <h1 className="text-xl font-extrabold">{car.price}</h1>
          <span>Per day</span>
        </div>
        <div className="flex items-center text-slate-600 place-self-start">
          <AiFillCar className="mr-2" /> <span>{car.carModel}</span>
        </div>
        <div className="flex items-center text-slate-600 place-self-end">
          <span>{car.rating}</span>
          <AiFillCar className="ml-2" />
        </div>
        <div className="flex items-center text-slate-600 place-self-start">
          <AiFillCar className="mr-2" /> <span>{car.transmission}</span>
        </div>
        <div className="flex items-center text-slate-600 place-self-end">
          <span>{car.fuelType}</span>
          <AiFillCar className="ml-2" />
        </div>
      </div>
      <div className="m-4 border-t border-gray-300"></div>
      <button className="w-5/6 px-6 py-4 mx-auto text-lg font-semibold text-white transition-all duration-300 bg-orange-500 hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500">
        Book Ride
      </button>
    </div>
  );
};

export default CarCard;
