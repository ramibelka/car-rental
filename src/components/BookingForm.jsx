import React, { useState } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi"; // Added AiFillCar for Car Type icon
import { AiFillCar } from "react-icons/ai";

const BookingForm = () => {
  const [carType, setCarType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission, e.g., send data to a server
    console.log("Form submitted with data:", {
      carType,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      dropoffDate,
    });
  };

  return (
    <div
      className="flex items-center justify-center h-screen text-center"
      id="booking"
    >
      <div className="p-6 bg-white rounded-lg shadow-lg md:w-2/3 md:flex md:flex-col md:items-center">
        <h2 className="mb-5 text-3xl font-bold">Book a Ride</h2>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col w-full justify-stretch"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow w-full pb-2 md:mr-4">
              <div className="flex items-center justify-center mb-1 md:justify-normal">
                <AiFillCar className="mr-2 text-gray-500" />
                <label
                  htmlFor="carType"
                  className="block font-medium text-gray-600"
                >
                  Car Type
                </label>
              </div>
              <input
                type="text"
                id="carType"
                name="carType"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex-grow w-full mb-4 md:mr-4">
              <div className="flex items-center justify-center mb-1 md:justify-normal">
                <FiMapPin className="mr-2 text-gray-500" />
                <label
                  htmlFor="pickupLocation"
                  className="block font-medium text-gray-600"
                >
                  Pick-up Location
                </label>
              </div>
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex-grow w-full mb-4">
              <div className="flex items-center justify-center mb-1 md:justify-normal">
                <FiMapPin className="mr-2 text-gray-500" />
                <label
                  htmlFor="dropoffLocation"
                  className="block font-medium text-gray-600"
                >
                  Drop-off Location
                </label>
              </div>
              <input
                type="text"
                id="dropoffLocation"
                name="dropoffLocation"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-grow mb-4 md:w-1/2 md:mr-2">
              <div className="flex items-center justify-center mb-1 md:justify-normal">
                <FiCalendar className="mr-2 text-gray-500" />
                <label
                  htmlFor="pickupDate"
                  className="block font-medium text-gray-600"
                >
                  Pick-up Date
                </label>
              </div>
              <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex-grow mb-4 md:w-1/2 md:ml-2">
              <div className="flex items-center justify-center mb-1 md:justify-normal">
                <FiCalendar className="mr-2 text-gray-500" />
                <label
                  htmlFor="dropoffDate"
                  className="block font-medium text-gray-600"
                >
                  Drop-off Date
                </label>
              </div>
              <input
                type="date"
                id="dropoffDate"
                name="dropoffDate"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="self-center flex-grow mt-6">
            <button
              type="submit"
              className="w-full px-10 py-3 text-lg font-semibold text-white transition-colors bg-orange-500 shadow-lg md:w-auto hover:bg-orange-600 shadow-orange-500 duration-350"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
