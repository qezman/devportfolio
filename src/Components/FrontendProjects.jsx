import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaAngleDown, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

// ✅ IMPORT YOUR DATA
import { frontendProjects } from "../data/frontend";

const FrontendProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const shouldReduceMotion = useReducedMotion();

  // Motion variants
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

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section
      className="relative min-h-screen bg-cover w-full bg-center bg-no-repeat text-white overflow-x-hidden pt-24"
      style={{ backgroundImage: "url('/5.jpg')" }}
    >
      <div className="aurora-bg"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Frontend Development Projects
            </h1>

            <hr className="border-4 w-12 md:w-16 border-blue-500 mx-auto" />

            <p className="mt-3 text-gray-300 text-sm sm:text-base md:text-xl">
              Modern web applications showcasing{" "}
              <span className="text-blue-500">frontend development</span> skills
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence>
              {frontendProjects
                .slice(0, visibleProjects)
                .map((project, index) => (
                  <motion.div
                    key={index}
                    className="group rounded-xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-md border border-white/10"
                    variants={cardVariants}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    {/* Image */}
                    <div className="relative h-48 sm:h-56">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:opacity-80"
                        priority={index < 2}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <h2 className="text-lg sm:text-xl font-bold mb-2">
                        {project.title}
                      </h2>

                      <p className="text-gray-300 text-sm sm:text-base mb-4">
                        {project.desc}
                      </p>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-white/10 border border-white/10 rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="mt-4 flex justify-end">
                        {project.livelink && (
                          <a
                            href={project.livelink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt className="text-lg hover:text-blue-400" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>

          {/* View More */}
          {visibleProjects < frontendProjects.length && (
            <div className="mt-12 text-center">
              <button
                onClick={handleViewMore}
                className="hover:text-blue-400 flex items-center gap-2 mx-auto font-semibold"
              >
                View more <FaAngleDown />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FrontendProjects;