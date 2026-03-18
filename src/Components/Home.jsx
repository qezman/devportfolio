import React from "react";
import Herosection from "./Herosection";
import Services from "./Services";
import ProductDesignProjects from "./ProductDesignProjects";
import FrontendProjects from "./FrontendProjects";
import CloudDevOpsProjects from "./CloudDevOpsProjects";
import Skills from "./Skills";
import PreFooter from "./Prefooter";
import Footer from "./Footer";

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
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <Herosection />
        </div>
      </div>

      {/* Sections with IDs */}
      <section id="about" className="w-full">
        <Services />
      </section>

      <section id="cloud-&-devops" className="w-full">
        <CloudDevOpsProjects />
      </section>

      <section id="product-design" className="w-full">
        <ProductDesignProjects />
      </section>

      <section id="frontend-projects" className="w-full">
        <FrontendProjects />
      </section>

      <section id="skills" className="w-full">
        <Skills />
      </section>

      <div className="w-full">
        <PreFooter />
        <section id="contact" className="w-full">
          <Footer />
        </section>
      </div>
    </section>
  );
};

export default Home;
