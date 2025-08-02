import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import PreFooter from "./Prefooter";
import Footer from "./Footer";
import FAQs from "./FAQs";

const Home = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div
        id="home"
        className="relative min-h-screen bg-cover w-full bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/4.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <Navbar />
          <Herosection />
        </div>
      </div>

      {/* Sections with IDs */}
      <section id="about" className="w-full">
        <Services />
      </section>

      <section id="projects" className="w-full">
        <Projects />
      </section>

      <section id="skills" className="w-full">
        <Skills />
      </section>

      <div className="w-full">
        <FAQs />
        <PreFooter />
        <section id="contact" className="w-full">
          <Footer />
        </section>
      </div>
    </section>
  );
};

export default Home;
