import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/about";
import Services from "./components/Servicess/services";
import Features from "./components/Features/Features";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
