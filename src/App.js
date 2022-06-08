import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Divider from "./components/Divider";
import Testimonials from "./components/Testimonials";
import WhySection from "./components/WhySection";
import Location from "./components/Location.jsx";
import Cta from "./components/Cta";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Divider />
      <Services />
      <Cta />
      <WhySection />
      <Location />
      <Testimonials/>
      <Contact />
    </div>
  );
}

export default App;
