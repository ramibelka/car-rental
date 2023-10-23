import React, { useState } from "react";
import Sedan from "../img/sedan.png";
import Suv from "../img/suv.png";
import Convertible from "../img/convertible.png";

const Models = () => {
  const defaultModel = {
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
  }; //to be changed with only id
  const [selectedModel, setSelectedModel] = useState(defaultModel);

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
      index: 5,
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
      index: 6,
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
  ];

  const handleModelClick = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className="h-screen grid place-items-center grid-row-4">
      <div className="mt-10">
        <h1 className="text-2xl font-bold text-center my-2">Vehicle Models</h1>
        <h2 className="text-3xl font-bold text-center my-2">
          Our rental fleet
        </h2>
        <p className="text-center">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 sm:flex-row w-full place-items-center row-span-3">
        <div className="w-full p-11 flex flex-col items-center self-start">
          {models.map((model, index) => (
            <div
              key={index}
              className={`my-1 text-center cursor-pointer w-full border hover:bg-orange-500 transition-colors duration-350 p-4 ${
                model.index === selectedModel.index
                  ? "bg-orange-500"
                  : "bg-slate-200"
              }`}
              onClick={() => handleModelClick(model)}
            >
              {console.log(selectedModel.index)}
              <h3 className="text-xl font-semibold">{model.name}</h3>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center justify-center ">
          <img
            src={selectedModel.image}
            alt={selectedModel.name}
            className="w-full object-cover rounded-md"
          />
        </div>

        <div className="w-full p-10 flex flex-col items-center">
          <p className="text-white font-bold bg-orange-500 w-full text-center py-4 mb-0">
            ${selectedModel.expenses} per day
          </p>
          <table className="mt-0 border-collapse w-full">
            <tbody>
              {Object.entries(selectedModel.info).map(([key, value]) => (
                <tr key={key}>
                  <td className="px-4 py-2 border border-black">{key}</td>
                  <td className="px-4 py-2 border border-black">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="mt-4 px-6 py-3 w-full bg-orange-500 text-white font-semibold hover:bg-orange-600">
            RESERVE NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Models;
