import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-4 text-center">
      <h2 className="mb-6 text-5xl">Nothing to see here!</h2>
      <div class="border-t border-gray-300 m-4"></div>
      <p className="text-2xl font-bold text-orange-500">
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};

export default NoMatch;
