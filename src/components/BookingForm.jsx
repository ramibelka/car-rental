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
    <div className="h-screen flex justify-center items-center text-center">
      <div className="bg-white p-6 rounded-lg shadow-lg md:w-2/3 md:flex md:flex-col md:items-center">
        <h2 className="text-3xl font-bold mb-5">Book a Ride</h2>
        <form
          onSubmit={handleFormSubmit}
          className="w-full flex flex-col justify-stretch"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:mr-4 w-full flex-grow pb-2">
              <div className="flex items-center mb-1">
                <AiFillCar className="text-gray-500 mr-2" />
                <label
                  htmlFor="carType"
                  className="block text-gray-600 font-medium"
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
            <div className="md:mr-4 mb-4 w-full flex-grow">
              <div className="flex items-center mb-1">
                <FiMapPin className="text-gray-500 mr-2" />
                <label
                  htmlFor="pickupLocation"
                  className="block text-gray-600 font-medium"
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
            <div className="mb-4 flex-grow w-full">
              <div className="flex items-center mb-1">
                <FiMapPin className="text-gray-500 mr-2" />
                <label
                  htmlFor="dropoffLocation"
                  className="block text-gray-600 font-medium"
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
            <div className="mb-4 md:w-1/2 md:mr-2 flex-grow">
              <div className="flex items-center mb-1">
                <FiCalendar className="text-gray-500 mr-2" />
                <label
                  htmlFor="pickupDate"
                  className="block text-gray-600 font-medium"
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
            <div className="mb-4 md:w-1/2 md:ml-2 flex-grow">
              <div className="flex items-center mb-1">
                <FiCalendar className="text-gray-500 mr-2" />
                <label
                  htmlFor="dropoffDate"
                  className="block text-gray-600 font-medium"
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
          <div className="mt-6 flex-grow self-center">
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-3 bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 rounded-md"
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
