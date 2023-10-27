import React, { useEffect, useState } from "react";
import Sedan from "../img/sedan.png";
import Suv from "../img/suv.png";
import Convertible from "../img/convertible.png";
import Hatchback from "../img/hatchback.png";
import Coupe from "../img/coupe.png";
import Sports from "../img/sports.png";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Models = () => {
  const models = [
    {
      index: 1,
      name: "SUV",
      image: Suv,
      expenses: 80,
      info: {
        Model: "XUV200",
        Mark: "Ford",
        Year: 2023,
        Doors: 4,
        AC: "Yes",
        Transmission: "Automatic",
        Fuel: "Petrol",
      },
    },
    {
      index: 2,
      name: "Sedan",
      image: Sedan,
      expenses: 70,
      info: {
        Model: "Sedan XL",
        Mark: "Toyota",
        Year: 2023,
        Doors: 4,
        AC: "Yes",
        Transmission: "Automatic",
        Fuel: "Petrol",
      },
    },
    {
      index: 3,
      name: "Convertible",
      image: Convertible,
      expenses: 90,
      info: {
        Model: "Roadster",
        Mark: "Tesla",
        Year: 2023,
        Doors: 2,
        AC: "Yes",
        Transmission: "Automatic",
        Fuel: "Electric",
      },
    },
    {
      index: 4,
      name: "Hatchback",
      image: Hatchback,
      expenses: 80,
      info: {
        Model: "XUV200",
        Mark: "Ford",
        Year: 2023,
        Doors: 4,
        AC: "Yes",
        Transmission: "Automatic",
        Fuel: "Petrol",
      },
    },
    {
      index: 5,
      name: "Coupe",
      image: Coupe,
      expenses: 70,
      info: {
        Model: "Sedan XL",
        Mark: "Toyota",
        Year: 2023,
        Doors: 4,
        AC: "Yes",
        Transmission: "Automatic",
        Fuel: "Petrol",
      },
    },
    {
      index: 6,
      name: "Sports",
      image: Sports,
      expenses: 90,
      info: {
        Model: "Roadster",
        Mark: "Tesla",
        Year: 2023,
        Doors: 2,
        AC: "Yes",
        Transmission: "Automatic",
        Fuel: "Electric",
      },
    },
  ];

  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [isLoading, setIsLoading] = useState(true);

  const handleModelClick = (model) => {
    setIsLoading(true);

    const img = new Image();
    img.onload = () => {
      setSelectedModel(model);
      setIsLoading(false);
    };
    img.src = model.image;
  };

  useEffect(() => {
    // When the component mounts, hide the initial loader
    setIsLoading(false);
  }, []);

  return (
    <div className="grid md:h-screen place-items-center grid-row-4" id="models">
      <div className="mt-10">
        <h1 className="my-2 text-2xl font-bold text-center">Vehicle Models</h1>
        <h2 className="my-2 text-3xl font-bold text-center">
          Our rental fleet
        </h2>
        <p className="text-center">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="grid w-full row-span-3 gap-4 md:grid-cols-3 sm:flex-row place-items-center">
        <div className="flex flex-col items-center self-start w-full p-11">
          {models.map((model, index) => (
            <div
              key={index}
              className={`my-1 text-center cursor-pointer w-full border hover:bg-orange-500 hover:text-white transition-colors duration-350 p-4 ${
                model.index === selectedModel.index
                  ? "bg-orange-500 text-white"
                  : "bg-slate-200 "
              }`}
              onClick={() => handleModelClick(model)}
            >
              <h3 className="text-xl font-semibold">{model.name}</h3>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center w-full">
          {isLoading ? (
            <AiOutlineLoading3Quarters className="text-2xl animate-spin" />
          ) : (
            <img
              src={selectedModel.image}
              alt={selectedModel.name}
              className="object-cover w-full rounded-md"
            />
          )}
        </div>

        <div className="flex flex-col items-center w-full p-10">
          <p className="z-10 w-full py-2 -mb-1 font-bold text-center text-white bg-orange-500">
            <span className="text-3xl"> ${selectedModel.expenses} </span> per
            day
          </p>
          <table className="w-full mt-0 text-center border-collapse">
            <tbody>
              {Object.entries(selectedModel.info).map(([key, value]) => (
                <tr key={key}>
                  <td className="px-4 py-2 border border-black">{key}</td>
                  <td className="px-4 py-2 border border-black">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="w-full px-6 py-3 mt-4 font-semibold text-white transition-colors bg-orange-500 shadow-lg hover:bg-orange-600 shadow-orange-500 duration-350">
            RESERVE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Models;
