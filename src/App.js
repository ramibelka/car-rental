import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import NoMatch from "./pages/NoMatch";
import Vehicles from "./pages/Vehicles";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
//import Contact from "./Contact"; <Route path="/contact" component={Contact} />

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="vehicles"
            element={
              <Suspense fallback={<Loading />}>
                <Vehicles />
              </Suspense>
            }
          />
          <Route
            path="testimonials"
            element={
              <Suspense fallback={<Loading />}>
                <Testimonials />
              </Suspense>
            }
          />
          <Route
            path="team"
            element={
              <Suspense fallback={<Loading />}>
                <Team />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<Loading />}>
                <Contact />
              </Suspense>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
