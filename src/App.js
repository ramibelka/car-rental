import { Suspense } from "react";
import "./App.css";
import BookingForm from "./components/BookingForm";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Models from "./components/Models";
import Plan from "./components/Plan";
import Reviews from "./components/Reviews";
import Values from "./components/Values";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
      <BookingForm />
      <Plan />
      <Models />
      <Values />
      <Reviews />
      <FAQ />
      <Download />
      <Footer />
    </Suspense>
  );
}

export default App;
