import "./App.css";
import BookingForm from "./components/BookingForm";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Models from "./components/Models";
import Plan from "./components/Plan";
import Reviews from "./components/Reviews";
import Values from "./components/Values";

function App() {
  return (
    <>
      <Home />
      <BookingForm />
      <Plan />
      <Models />
      <Values />
      <Reviews />
      <FAQ />
      <Download />
      <Footer />
    </>
  );
}

export default App;
