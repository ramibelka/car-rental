import React from "react";
import Member1 from "../img/member1.png";
import Member2 from "../img/member2.png";
import Member3 from "../img/member3.png";
import Member4 from "../img/member4.png";
import Member5 from "../img/member5.png";
import Member6 from "../img/member6.png";

const Team = () => {
  const members = [
    {
      id: 1,
      image: Member1,
      name: "Michael Diaz",
      role: "Business Owner",
    },
    {
      id: 2,
      image: Member2,
      name: "John Doe",
      role: "Salesman",
    },
    {
      id: 3,
      image: Member3,
      name: "Martin Reiss",
      role: "CEO",
    },
    {
      id: 4,
      image: Member4,
      name: "Luis figo",
      role: "Mechanic",
    },
    {
      id: 5,
      image: Member5,
      name: "Marc Bartra",
      role: "Mechanic",
    },
    {
      id: 6,
      image: Member6,
      name: "Bob Hunt",
      role: "Photographer",
    },
  ];

  return (
    <>
      <h1 className="pt-8 text-4xl font-extrabold text-center md:text-start md:px-12">
        Our Team
      </h1>
      <div className="m-4 border-t border-gray-300"></div>
      <div className="flex flex-wrap items-center justify-center mb-10">
        {members.map((member) => {
          return (
            <div
              className="flex flex-col pb-4 m-8 border border-gray-300 shadow-lg shadow-gray-300 w-80"
              key={member.id}
            >
              <div className="my-4 overflow-hidden h-60">
                <img src={member.image} alt="" loading="lazy" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-extraboldbold">{member.name}</h1>
                <h3>{member.role}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Team;
