import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPaintBrush, FaCode, FaCloud } from "react-icons/fa";

const HomePage = () => {
  const sections = [
    {
      title: "Cloud & DevOps",
      description:
        "Designing scalable cloud solutions and implementing Infrastructure-as-Code with Terraform and AWS.",
      icon: <FaCloud className="text-3xl" />,
      href: "/cloud-devops",
    },
    {
      title: "Product Design",
      description:
        "Creating intuitive user experiences with research-driven design principles and modern UI patterns.",
      icon: <FaPaintBrush className="text-3xl" />,
      href: "/product-design",
    },
    {
      title: "Frontend Development",
      description:
        "Building responsive, performant web applications using React, Next.js, and modern JavaScript frameworks.",
      icon: <FaCode className="text-3xl" />,
      href: "/frontend-projects",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen bg-cover w-full bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/4.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 leading-tight"
          >
            Hey there, I'm Kazeem!
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            {/* Product Designer • Frontend Developer • Cloud & DevOps Engineer */}
            Cloud & DevOps Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I create exceptional digital experiences from concept to deployment,
            specializing in user-centered design, modern web development, and
            scalable cloud infrastructure solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              About Me
              <FaArrowRight className="text-sm" />
            </Link>

            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Get In Touch
              <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Sections */}
      <section id="product-design" className="py-20 px-6 pt-32">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={section.href} className="block h-full">
                  <div
                    className={`bg-[#171f29] p-8 rounded-xl text-white h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                  >
                    <div className="flex items-center justify-center mb-6">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center">
                      {section.title}
                    </h3>
                    <p className="text-gray-100 text-sm text-center leading-relaxed">
                      {section.description}
                    </p>
                    <div className="mt-6 text-center">
                      <span className="inline-flex text-sm items-center gap-2 text-white/80 hover:text-white transition-colors">
                        View Projects
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section id="about" className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "15+", label: "Projects Completed" },
              { number: "3", label: "Core Skills" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
