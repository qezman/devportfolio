"use client";

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
} from "react-icons/si";
import { useState } from "react";

const Skills = () => {
  const skillsData = [
    { title: "HTML", percent: 95, icon: SiHtml5 },
    { title: "CSS", percent: 95, icon: SiCss3 },
    { title: "Javascript", percent: 70, icon: SiJavascript },
    { title: "React", percent: 80, icon: SiReact },
    { title: "Typescript", percent: 80, icon: SiTypescript },
    { title: "Tailwind CSS", percent: 98, icon: SiTailwindcss },
    { title: "Figma", percent: 95, icon: SiFigma },
    { title: "Next.JS", percent: 80, icon: SiNextdotjs },
    { title: "Webflow", percent: 90, icon: SiWebflow },
    { title: "Adobe XD", percent: 85, icon: SiAdobexd },
    { title: "Framer", percent: 85, icon: SiFramer },
    { title: "Wix", percent: 85, icon: SiWix },
  ];

  return (
    <section className="relative min-h-screen section-padding bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            My Skills
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise and tools I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="responsive-grid">
          {skillsData.map((skill) => (
            <div
              key={skill.title}
              className="relative cursor-pointer rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 group p-6 bg-gradient-to-r from-gray-800 to-gray-700 backdrop-blur-md border border-white/10"
            >
              {/* Icon and Title */}
              <div className="text-center">
                <div className="flex justify-center items-center text-[#3379ba] group-hover:text-[#65a9fc] transition duration-300 mb-4">
                  {<skill.icon size="2.5rem" className="sm:text-3xl" />}
                </div>
                <h2 className="text-lg sm:text-xl font-bold group-hover:text-white mb-2">
                  {skill.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300">
                  Proficiency: {skill.percent}%
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
