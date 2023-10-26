import React, { useState } from "react";

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "1. What is special about comparing rental car deals??",
      answer:
        "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
    },
    {
      id: 2,
      question: "2. How do I find the car rental deals?",
      answer:
        "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
    },
    {
      id: 3,
      question: "3. How do I find such low rental car prices?",
      answer:
        "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
    },
  ];

  const toggleQuestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className="max-w-4xl p-4 mx-auto my-20">
      <div className="py-8">
        <h4 className="text-xl font-bold text-center">FAQ</h4>
        <h1 className="my-3 text-4xl font-extrabold text-center">
          Frequently Asked Questions
        </h1>
        <p className="px-10 text-center text-slate-600">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>
      <div className="p-0 bg-gray-100 shadow-lg">
        <ul>
          {questions.map((q) => (
            <li key={q.id} className="">
              <button
                className={`w-full p-5 text-left focus:outline-none ${
                  activeQuestion === q.id &&
                  "bg-orange-500 transition-colors duration-300 text-white shadow-md shadow-orange-500"
                }`}
                onClick={() => toggleQuestion(q.id)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold">{q.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                      activeQuestion === q.id ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`p-4 m-0 transform transition-transform duration-300 ${
                  activeQuestion === q.id ? "translate-y-0" : "-translate-y-4"
                }`}
              >
                {activeQuestion === q.id && <p className="">{q.answer}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
