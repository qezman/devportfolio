import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiFigma,
  SiAdobexd,
  SiJavascript,
  SiWebflow,
  SiWix,
  SiAmazonaws,
  SiTerraform,
  SiLinux,
  SiNginx,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";
import { useState } from "react";

const Skills = () => {
  const skillsData = [
    // Product Design Skills
    { title: "Figma", percent: 95, icon: SiFigma, category: "Product Design" },
    { title: "Adobe XD", percent: 85, icon: SiAdobexd, category: "Product Design" },
    { title: "Framer", percent: 95, icon: SiFramer, category: "Product Design" },
    { title: "Webflow", percent: 90, icon: SiWebflow, category: "Product Design" },
    
    // Frontend Development Skills
    { title: "HTML", percent: 95, icon: SiHtml5, category: "Frontend Development" },
    { title: "CSS", percent: 95, icon: SiCss3, category: "Frontend Development" },
    { title: "Javascript", percent: 70, icon: SiJavascript, category: "Frontend Development" },
    { title: "React", percent: 80, icon: SiReact, category: "Frontend Development" },
    { title: "Typescript", percent: 80, icon: SiTypescript, category: "Frontend Development" },
    { title: "Tailwind CSS", percent: 98, icon: SiTailwindcss, category: "Frontend Development" },
    { title: "Next.JS", percent: 80, icon: SiNextdotjs, category: "Frontend Development" },
    
    // Cloud & DevOps Skills
    { title: "AWS", percent: 75, icon: SiAmazonaws, category: "Cloud & DevOps" },
    { title: "Terraform", percent: 70, icon: SiTerraform, category: "Cloud & DevOps" },
    { title: "Linux", percent: 80, icon: SiLinux, category: "Cloud & DevOps" },
    { title: "Nginx", percent: 75, icon: SiNginx, category: "Cloud & DevOps" },
    { title: "GitHub", percent: 90, icon: SiGithub, category: "Cloud & DevOps" },
    { title: "VS Code", percent: 95, icon: SiVisualstudiocode, category: "Cloud & DevOps" },
  ];

  const categories = ["Product Design", "Frontend Development", "Cloud & DevOps"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section className="relative min-h-screen section-padding bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            My Skills
          </h1>
          <hr className="border-4 border-b w-12 md:w-16 border-blue-500 mx-auto" />

          <p className="mt-3 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise across Product Design, Frontend Development, and Cloud & DevOps.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-4 mb-12">
          {["All", ...categories].map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
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

        {/* Skills Grid */}
        <div className="responsive-grid">
          {filteredSkills.map((skill) => (
            <div
              key={skill.title}
              className="relative cursor-pointer rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 group p-6 bg-gradient-to-r from-gray-800 to-gray-700 backdrop-blur-md border border-white/10"
            >
              {/* Icon and Title */}
              <div className="text-center">
                <div className="flex justify-center items-center text-[#3379ba] group-hover:text-[#65a9fc] transition duration-300 mb-4">
                  {skill.icon && <skill.icon size="2.5rem" className="sm:text-3xl" />}
                </div>
                <h2 className="text-lg sm:text-xl font-bold group-hover:text-white mb-2">
                  {skill.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300">
                  Proficiency: {skill.percent}%
                </p>
                <p className="text-xs text-blue-400 mt-1">
                  {skill.category}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full bg-gray-800">
                <div
                  className="h-2 bg-[#3379ba] group-hover:bg-[#65a9fc] transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
