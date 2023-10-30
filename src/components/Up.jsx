import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Up = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <Link to="home" spy={true} smooth={true} duration={800}>
      {scrollPosition > 600 && (
        <button className="fixed w-10 h-12 bg-orange-500 bottom-4 right-4">
          <FaArrowCircleUp className="ml-2 text-2xl text-white" />
        </button>
      )}
    </Link>
  );
};

export default Up;
