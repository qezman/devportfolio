"use client";

import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiAdobexd,
  SiJavascript,
} from "react-icons/si";
import { useState } from "react";

const Skills = () => {
  const skillsData = [
    { title: "HTML", percent: 90, icon: SiHtml5 },
    { title: "CSS", percent: 95, icon: SiCss3 },
    { title: "Tailwind CSS", percent: 95, icon: SiTailwindcss },
    { title: "Figma", percent: 90, icon: SiFigma },
    { title: "React", percent: 80, icon: SiReact },
    { title: "Next.JS", percent: 80, icon: SiNextdotjs },
    { title: "Adobe XD", percent: 85, icon: SiAdobexd },
    { title: "Javascript", percent: 78, icon: SiJavascript },
    { title: "Framer", percent: 85, icon: SiFramer },
  ];

  return (
    <section className="relative min-h-auto py-10 xl:py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight">My Skills</h1>
          <p className="text-gray-400 mt-2">
            A showcase of my technical expertise and tools I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.title}
              className="relative cursor-pointer bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 group"
            >
              {/* Icon and Title */}
              <div className="p-6 text-center">
                <div className="flex justify-center items-center text-[#3379ba] group-hover:text-[#65a9fc] transition duration-300">
                  {<skill.icon size="3rem" />}
                </div>
                <h2 className="mt-4 text-xl font-bold group-hover:text-white">
                  {skill.title}
                </h2>
                <p className="mt-2 text-gray-400 group-hover:text-gray-300">
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
