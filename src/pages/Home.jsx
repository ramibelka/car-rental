import React from "react";
import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import Plan from "../components/Plan";
import Models from "../components/Models";
import Values from "../components/Values";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";
import Download from "../components/Download";
import Up from "../components/Up";

const Home = () => {
  return (
    <>
      <Hero />
      <BookingForm />
      <Plan />
      <Models />
      <Values />
      <Reviews />
      <FAQ />
      <Download />
      <Up />
    </>
  );
};

export default Home;
