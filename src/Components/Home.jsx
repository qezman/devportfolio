import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Services from "../Services";
import Projects from "./Projects";
import Skills from "./Skills";
import PreFooter from "./Prefooter";
import Footer from "./Footer";
import FAQs from "./FAQs";

const Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <div
        id="home"
        className="relative h-[80vh] bg-cover w-full bg-center p-4"
        style={{
          backgroundImage: "url('/4.jpg')",
        }}
      >
        <Navbar />
        <Herosection />
      </div>

      {/* Sections with IDs */}
      <section id="about">
        <Services />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <FAQs />

      <div className="w-full">
        <PreFooter />
        <section id="contact">
          <Footer />
        </section>
      </div>
    </section>
  );
};

export default Home;
