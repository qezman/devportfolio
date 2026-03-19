import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPaintBrush, FaCode, FaCloud } from "react-icons/fa";

export default function ProjectsHubPage() {
  const sections = [
    {
      title: "Cloud & DevOps",
      description:
        "Infrastructure, automation, and deployment workflows built for reliability.",
      icon: <FaCloud className="text-3xl" />,
      href: "/cloud-devops",
    },
    {
      title: "Product Design",
      description:
        "Case studies and UI/UX work: research, design systems, and polished prototypes.",
      icon: <FaPaintBrush className="text-3xl" />,
      href: "/product-design",
    },
    {
      title: "Frontend Development",
      description:
        "Responsive, performant web apps with React/Next.js and modern tooling.",
      icon: <FaCode className="text-3xl" />,
      href: "/frontend-projects",
    },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
          <hr className="border-4 w-12 md:w-16 border-blue-500 mx-auto" />
          <p className="mt-3 text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore my work across design, frontend engineering, and cloud
            infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={section.href} className="block h-full">
                <div className="bg-[#171f29] p-8 rounded-xl text-white h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/10">
                  <div className="flex items-center justify-center mb-6">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold mb-4 text-center">
                    {section.title}
                  </h2>
                  <p className="text-gray-100 text-sm text-center leading-relaxed">
                    {section.description}
                  </p>
                  <div className="mt-6 text-center">
                    <span className="inline-flex text-sm items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                      View projects
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
  );
}

