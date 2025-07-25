import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDown, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  // Project Categories
  const categories = ["All", "Web Development", "UI/UX", "Web Design"];

  // Project Data with Category Tags
  const projects = [
    {
      image: "/motivv.png",
      title: "Mottiv",
      desc: "This website showcases a complete React structure, allowing users to enroll in courses of their choice and enabling designers to apply for suitable job opportunities.",
      tools: ["Figma, React, TailwindCSS, NodeJs"],
      livelink: "https://motivv-eight.vercel.app/",
      category: "Web Development",
    },
    {
      image: "/comfy.png",
      title: "Comfy-Store Ecommerce",
      desc: "This website features a fully functional eCommerce store built with React and Next.js, providing users with a seamless shopping and ordering experience.",
      tools: ["React, NextJs, TailwindCSS"],
      livelink: "https://comfy-store-ten-eta.vercel.app/",
      category: "Web Development",
    },
    {
      image: "/ecommerce-gadget.png",
      title: "Ecommerce Gadget Store",
      desc: "This website features a fully functional eCommerce store built with Figma, providing users with a seamless shopping and ordering experience.",
      tools: ["Figma, Coolors"],
      livelink:
        "https://www.behance.net/gallery/222755223/Ecommerce-Gadget-Store",
      category: "UI/UX",
    },

    {
      image: "/cookbook.png",
      title: "Cookbook",
      desc: "A responsive recipe search app built with React, TypeScript, and TailwindCSS.",
      tools: ["React, TailwindCSS, Typescript"],
      livelink: "https://cookbook-final.vercel.app/",
      category: "Web Development",
    },
    {
      image: "/Calendly.png",
      title: "Calendly",
      desc: "This project replicates the Calendly website, using the React framework to showcase a beautiful and dynamic landing page. It demonstrates the implementation of modern UI elements and interactive features, closely mirroring the design and functionality of Calendly.",
      tools: ["React, TailwindCSS"],
      category: "Web Development",
    },

    {
      image: "/product-library.png",
      title: "ProductLib",
      desc: "A responsive products search app built with React, TypeScript, and TailwindCSS.",
      tools: ["React, Typescript, TailwindCSS"],
      livelink: "https://product-library-elyu.vercel.app/",
      category: "Web Development",
    },
    {
      image: "/Currency-exchange.png",
      title: "EasyFX Currency Exchange Platform",
      desc: " This project a full case study and desgin of a exchanging currencies seamlessly with a focus on user experience and user interface design.",
      tools: ["Figma"],
      category: "UI/UX",
      livelink:
        "https://www.behance.net/gallery/222597099/EasyFX-Currency-Exchange-Platform",
    },
    {
      image: "/lms.png",
      title: "Learning Management System",
      desc: "This project is a learning management system designed to help students and teachers interact seamlessly. It features a user-friendly interface and a modern design, making it easy for users to navigate and access course materials.",
      tools: ["Figma"],
      category: "UI/UX",
      livelink:
        "https://www.behance.net/gallery/213117929/Learning-Management-System",
    },
    {
      image: "/education.png",
      title: "Course Correct",
      desc: " This project, (Course Correct), was designed using Figma to enable and ensure users can seamlessly enroll in courses of their choice.",
      tools: ["Figma, Adobe Illustrator"],
      category: "UI/UX",
      livelink:
        "https://www.behance.net/gallery/181787301/E-learning-Mobile-App",
    },
    {
      image: "/gtco.png",
      title: "GTCO",
      desc: "This project is a redesign of the GTCO Food and Drink and Fashion Week, focusing on improving various pages to ensure users experience a friendly UI and seamless applications where applicable.",
      tools: ["Figma"],
      category: "UI/UX",
      livelink:
        "https://www.behance.net/gallery/186960521/GTCO-Redesign-Mobile-App",
    },
    {
      image: "Pay4MeApp.jpeg",
      title: "Pay4MeApp Redesign",
      desc: "This project is a landing page redesign, showcasing vibrant colors and a modern e-commerce layout.",
      tools: ["Figma"],
      category: "UI/UX",
      livelink:
        "https://www.behance.net/gallery/217755173/Pay4MeApp-(Landing-Page)-Redesign",
    },
    {
      image: "/Building.png",
      title: "Building Design",
      desc: "This project is just a redesign from a template, showcasing my webflow skills.",
      tools: ["Webflow"],
      category: "Web Design",
      livelink: "https://kazeems-dapper-site.webflow.io/",
    },
  ];

  // State Management
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Filtering Projects by Category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // "View More" Functionality
  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <section
      className="relative h-auto bg-cover w-full bg-center p-4 text-white xl:px-80"
      style={{
        backgroundImage: "url('/5.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Section */}
      <div className="relative z-10 my-20 px-4">
        <h1 className="text-3xl text-center font-bold">My Projects</h1>
        <p className="text-center font-semibold text-gray-300 text-lg mt-4">
          Featured and <span>Personal</span> Projects
        </p>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 space-y-2 gap-x-3 md:flex justify-center items-center mt-10 md:space-y-0 md:space-x-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProjects(6);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <article className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <motion.div
                  key={index}
                  className="relative group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    className="w-full h-56 object-cover group-hover:opacity-70 transition-opacity"
                  />

                  {/* Project Details */}
                  <div className="p-4">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="text-gray-300 mt-2 text-sm">{project.desc}</p>

                    {/* Tools Used */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="bg-gray-700 text-white px-2 py-1 rounded text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Live Link Icon */}
                  {project.livelink && (
                    <a
                      href={project.livelink}
                      target="_blank"
                      className="absolute bottom-4 right-4 text-white"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </motion.div>
              ))}
          </AnimatePresence>
        </article>

        {/* "View More" Button */}
        {visibleProjects < filteredProjects.length && (
          <div
            className="mt-12 cursor-pointer hover:text-gray-300 flex justify-center items-center gap-x-3"
            onClick={handleViewMore}
          >
            <p className="font-semibold lg:text-lg">View more</p>
            <FaAngleDown />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
