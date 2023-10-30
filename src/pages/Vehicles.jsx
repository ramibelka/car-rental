import React from "react";
import CarCard from "../components/CarCard";
import Bmw from "../img/bmw.png";
import Camry from "../img/camry.png";
import A1 from "../img/a1.png";
import Mercedes from "../img/mercedes.png";
import Passat from "../img/passat.png";
import Golf from "../img/golf6.png";

const Vehicles = () => {
  const cars = [
    {
      id: 1,
      carName: "Bmw",
      price: 35000,
      carModel: "2023",
      rating: 4.5,
      transmission: "Automatic",
      fuelType: "Gas",
      image: Bmw,
    },
    {
      id: 2,
      carName: "Camry",
      price: 32000,
      carModel: "Hyundai",
      rating: 4.2,
      transmission: "Automatic",
      fuelType: "Gas",
      image: Camry,
    },
    {
      id: 3,
      carName: "A1",
      price: 50000,
      carModel: "Audi",
      rating: 4.8,
      transmission: "Automatic",
      fuelType: "Gas",
      image: A1,
    },
    {
      id: 4,
      carName: "Mercedes",
      price: 45000,
      carModel: "EQ6",
      rating: 4.9,
      transmission: "Electric",
      fuelType: "Electric",
      image: Mercedes,
    },
    {
      id: 5,
      carName: "Passat",
      price: 30000,
      carModel: "Volkswagen",
      rating: 4.0,
      transmission: "Automatic",
      fuelType: "Gas",
      image: Passat,
    },
    {
      id: 6,
      carName: "Golf 6",
      price: 40000,
      carModel: "Volkswagen",
      rating: 4.7,
      transmission: "Automatic",
      fuelType: "Gas",
      image: Golf,
    },
  ];
  return (
    <>
      <h1 className="pt-8 text-4xl font-extrabold text-center md:text-start md:px-12">
        Vehicle Models
      </h1>
      <div className="m-4 border-t border-gray-300"></div>
      <div className="flex flex-wrap justify-center md:p-16">
        {cars.map((car) => {
          return <CarCard car={car} />;
        })}
      </div>
    </>
  );
};

export default Vehicles;
