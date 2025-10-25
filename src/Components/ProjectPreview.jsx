"use client";
import React from "react";

const ProjectPreview = ({ project }) => {
  if (!project?.video) return null;
  return (
    <section className="relative section-padding bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {project.title} – Preview
          </h2>
          {project.desc && (
            <p className="mt-3 text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
              {project.desc}
            </p>
          )}
        </div>

        <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
          {/* 16:9 responsive wrapper */}
          <div className="relative pt-[56.25%]">
            <video
              src={project.video}
              poster={project.poster}
              controls
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          {project.livelink && (
            <a
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-semibold"
            >
              View Live
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectPreview;
