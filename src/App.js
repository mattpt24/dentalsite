import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Divider from "./components/Divider";
import Testimonials from "./components/Testimonials";
import WhySection from "./components/WhySection";
import Location from "./components/Location.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Divider />
      <Services />
      <Testimonials/>
      <WhySection />
      <Location />
    </div>
  );
}

export default App;
