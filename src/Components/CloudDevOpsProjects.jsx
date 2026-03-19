import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FaAngleDown,
  FaAngleUp,
  FaExternalLinkAlt,
  FaGithub,
  FaAws,
  FaServer,
  FaShieldAlt,
  FaNetworkWired,
} from "react-icons/fa";
import Image from "next/image";

const CloudDevOpsProjects = () => {
  // Cloud & DevOps Projects Data
  const projects = [
    {
      image: "/aws-infra.png",
      title: "Terraform AWS Infrastructure",
      desc: "Provisioned AWS infrastructure using Terraform to demonstrate Infrastructure-as-Code workflows.",
      tech: ["Terraform", "AWS", "EC2", "Security Groups"],
      github: "https://github.com/qezman/terraform-aws-infrastructure",
      icon: <FaAws className="text-2xl" />,
      
    },
    // {
    //   image: "/4.jpg",
    //   title: "High Availability Web Infrastructure",
    //   desc: "Designed scalable AWS architecture using Terraform to simulate production-ready deployment.",
    //   tech: ["Terraform", "AWS", "Networking", "Infrastructure Design"],
    //   github: "https://github.com/qezman/ha-web-infrastructure",
    //   icon: <FaNetworkWired className="text-2xl" />,
    //   architecture: [
    //     "Load Balancer",
    //     "↓",
    //     "Auto Scaling Group",
    //     "↓",
    //     "Multiple EC2 Instances",
    //     "↓",
    //     "Database Cluster",
    //   ],
    // },
    
    {
      image: "/efs.png",
      title: "EFS Shared Storage Implementation",
      desc: "Implemented EFS shared storage to enable seamless data sharing and synchronization across multiple EC2 instances.",
      tech: ["Terraform", "AWS", "EFS", "Shared Storage"],
      github: "https://github.com/qezman/AWS-EFS-shared-storage-implementation",
      icon: <FaNetworkWired className="text-2xl" />,
     
    },
    {
      image: "/5.jpg",
      title: "Linux Server Hardening",
      desc: "Configured secure Linux environment implementing SSH hardening, firewall configuration, and access control.",
      tech: ["Linux", "UFW", "System security", "SSH"],
      github: "https://github.com/qezman/linux-server-hardening-lab",
      icon: <FaShieldAlt className="text-2xl" />,
      architecture: [
        "SSH Key Auth",
        "↓",
        "UFW Firewall",
        "↓",
        "User Permissions",
        "↓",
        "Secure Services",
      ],
    },
    {
      image: "/4.jpg",
      title: "Next.js Application Deployment",
      desc: "Deployed a Next.js application on a Linux server using Nginx with SSL and performance optimization.",
      tech: ["Linux", "Nginx", "Next.js", "Server configuration"],
      github: "https://github.com/qezman/deploy-next.js-project",
      icon: <FaServer className="text-2xl" />,
    },
  ];

  // State Management
  const [visibleProjects, setVisibleProjects] = useState(4);
  const shouldReduceMotion = useReducedMotion();

  // Motion variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
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

  return (
    <section
      className="relative min-h-screen bg-cover w-full bg-center bg-no-repeat text-white overflow-x-hidden pt-24"
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
              Cloud & DevOps Projects
            </h1>
            <hr className="border-4 border-b w-12 md:w-16 border-blue-500 mx-auto" />

            <p className="mt-3 text-gray-300 text-sm sm:text-base md:text-xl dark:text-gray-400">
              Infrastructure projects showcasing{" "}
              <span className="text-blue-500">Cloud & DevOps</span> expertise
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence>
              {projects.slice(0, visibleProjects).map((project, index) => (
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
                      sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                      priority={index < 2}
                    />
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm p-2 rounded-lg">
                      {project.icon}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                      {project.desc}
                    </p>

                    

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-blue-400 mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 rounded-full text-xs sm:text-sm bg-blue-600/20 border border-blue-500/30 text-blue-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* GitHub Link */}
                    <div className="flex justify-between items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <FaGithub className="text-lg" />
                        <span className="text-sm font-medium">
                          View on GitHub
                        </span>
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* "View More" Button - Hidden since we show all 4 projects by default */}
          {visibleProjects < projects.length && (
            <div className="mt-12 text-center">
              <button
                className="cursor-pointer hover:text-blue-400 flex items-center gap-x-2 mx-auto text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300"
                onClick={() => setVisibleProjects((prev) => prev + 2)}
              >
                <span>View more</span>
                <FaAngleDown />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CloudDevOpsProjects;
