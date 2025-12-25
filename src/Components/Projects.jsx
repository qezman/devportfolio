import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaAngleDown, FaAngleUp, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import ProjectPreview from "./ProjectPreview";

const Projects = () => {
  // Project Categories
  const categories = ["All", "Web Development", "UI/UX","Web Design",];

  // Project Data with Category Tags
  const projects = [
    {
      image: "/Exchange.png",
      title: "EasyFX Currency Exchange Platform",
      desc: "A clean, mobile-first fintech experience for seamless currency exchange. Includes onboarding, KYC, dashboard, transaction history & a focused design system.",
      tools: ["Figma, Framer"],
      category: "UI/UX",
      caseStudy: "https://www.behance.net/gallery/239891765/EasyFX-(Currency-Exchange)",
      livelink:
        "https://sincere-trip-685573.framer.app/",
    },
    {
      image: "/auth.png",
      title: "Auth-flow",
      desc: "A simple authentication flow built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.",
      tools: ["NextJs, Typescript, TailwindCSS"],
      livelink: "https://authentication-flow-zeta.vercel.app/",
      category: "Web Development",
    },
    {
      image: "/Nebula.png",
      title: "Nebula",
      desc: "A clean, modern template marketplace built using Figma, Builder.io Fusion, and Next.js, with fully routed template pages and a smooth, responsive UI.",
      tools: ["Figma, Builder.io, NextJs, TailwindCSS"],
      livelink: "https://builder-nebula-orbit.vercel.app/",
      category: "Web Development",
    },
    {
      image: "/Afrobeat.png",
      title: "Nightlife Management System",
      desc: "This website features a fully functional Nightlife Management System built with Figma, providing users with a seamless events booking.",
      tools: ["Figma"],
      livelink: "https://www.figma.com/proto/9G2xr7CJYYNVmVzr8DLJ6d/TheMove-Pro?node-id=24-29&p=f&t=evorbEj1id0S2KPL-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=48%3A717",
      caseStudy: "https://www.behance.net/gallery/235824403/TheMove-Nightlife",
      category: "UI/UX",
    },
    {
      image: "/horizon.png",
      title: "Horizon Analytics",
      desc: "Horizon Analytics is a sleek SaaS-style portfolio project built in Framer, showcasing a data intelligence platform with dynamic CMS-powered blog content, interactive animations, and a clean, responsive design that highlights both design and front-end development skills.",
      tools: ["Figma, Framer"],
      livelink: "https://authentic-designers-123357.framer.app/",
      category: "Web Design",
      video: "/videos/horizon-preview.mp4",
      poster: "/horizon.png",
    },
    {
      image: "/comfy.png",
      title: "Comfy-Store Ecommerce",
      desc: "This website features a fully functional eCommerce store built with React and Next.js, providing users with a seamless shopping and ordering experience.",
      tools: ["NextJs, TailwindCSS"],
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
      image: "/StoreHub.png",
      title: "StoreHub",
      desc: "A two-page ecommerce concept built on Webflow’s free plan, showcasing a fully designed shopping flow, from product display to checkout and payment simulation, with CMS integration and responsive design.",
      tools: ["Figma, Webflow"],
      livelink: "https://kazeems-dynamite-site.webflow.io/",
      category: "Web Design",
    },
    {
      image: "/BlogHub.png",
      title: "BlogHub",
      desc: "A two-page blog concept built on Webflow’s free plan, showcasing a fully designed blog flow, reading blog articles, with CMS integration and responsive design.",
      tools: ["Webflow"],
      livelink: "https://kazeems-blog-site.webflow.io/",
      category: "Web Design",
    },

    {
      image: "/motivv.png",
      title: "Mottiv",
      desc: "This website showcases a complete React structure, allowing users to enroll in courses of their choice and enabling designers to apply for suitable job opportunities.",
      tools: ["Figma, React, TailwindCSS, NodeJs"],
      livelink: "https://motivv-eight.vercel.app/",
      category: "Web Development",
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
      image: "/Pay4MeApp.jpeg",
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
  // Optional: pick a project to preview via video
  const previewProject = projects.find((p) => p.video);

  // Motion preferences and variants
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 320, damping: 26 },
    },
  };

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
      className="relative min-h-screen bg-cover w-full bg-center bg-no-repeat text-white overflow-x-hidden"
      style={{
        backgroundImage: "url('/5.jpg')",
      }}
    >
      {/* Aurora and Background Overlays */}
      <div className="aurora-bg"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Section */}
      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white dark:text-white">
              My Projects
            </h1>
            <hr className="border-4 border-b w-12 md:w-16 border-blue-500 mx-auto" />

            <p className="mt-3 text-gray-300 text-sm sm:text-base md:text-xl dark:text-gray-400">
              Some of My <span className="text-blue-500">Projects</span>
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(6);
                }}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg border-blue-600"
                    : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence>
              {filteredProjects
                .slice(0, visibleProjects)
                .map((project, index) => (
                  <motion.div
                    key={index}
                    className="relative group rounded-xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-2xl"
                    variants={cardVariants}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 sm:h-56">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                        priority={index < 2}
                      />
                    </div>

                    {/* Project Details */}
                    <div className="p-4 sm:p-6">
                      <h2 className="text-lg sm:text-xl font-bold mb-2">
                        {project.title}
                      </h2>
                      <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                        {project.desc}
                      </p>

                      {/* Tools Used */}
                      <div className="flex items-center justify-between mt-4 w-full">
                        <div className="flex flex-wrap gap-2 flex-1">
                          {project.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="px-2 py-1 rounded text-xs sm:text-sm bg-white/10 border border-white/10 text-white/90"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <aside className="mt-4 flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          {project.caseStudy && (
                            <a
                              href={project.caseStudy}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="gap-x-1 flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                              title="View Case Study"
                            >
                              <span>View Case Study</span>
                              <FaExternalLinkAlt className="text-xs" />
                            </a>
                          )}
                        </div>
                        
                        {project.livelink && (
                          <a
                            href={project.livelink}
                            target="_blank"
                            className="text-white hover:text-blue-400 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-full"
                            rel="noopener noreferrer"
                            title="View Live Project"
                          >
                            <FaExternalLinkAlt className="text-lg sm:text-xl" />
                          </a>
                        )}
                      </aside>
                    </div>

                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>

          {/* "View More" Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="mt-12 text-center">
              <button
                className="cursor-pointer hover:text-blue-400 flex items-center gap-x-2 mx-auto text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300"
                onClick={handleViewMore}
              >
                <span>View more</span>
                <FaAngleDown />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Optional Project Video Preview Section (renders if any project has video) */}
      {/* {previewProject && <ProjectPreview project={previewProject} />} */}
    </section>
  );
};

export default Projects;
