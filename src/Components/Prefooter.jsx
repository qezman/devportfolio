"use client";

import React, { useState, useEffect } from "react";

const PreFooter = () => {
  return (
    <section
      // className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 h-48 text-white"
      className="relative min-h-[50vh] bg-cover w-full bg-center p-4 xl:px-32 2xl:px-[300px] lg:py-8 text-gray-900 dark:text-white"
      style={{
        backgroundImage: "url('/callto-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-white/40 dark:bg-black/50"></div>
      {/* Carousel Container */}
      <div className="relative z-10 w-full h-full overflow-hidden flex flex-col justify-center pr-20 md:mx-6">
        <p className="text-2xl md:text-4xl leading-loose md:leading-[1.5] lg:leading-[1.5] lg:text-5xl font-bold md:pr-36 lg:pr-[300px] xl:pr-[500px]">
          Trusted by the Next Generation of Innovators
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300 md:text-lg">
          Let's create something extraordinary together.
        </p>
        <button className="mt-10 bg-blue-600 rounded hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-bold px-8 lg:px-16 py-4 w-fit text-white shadow-lg">
          <a
            href={"https://wa.me/8122142257"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Collaborate
          </a>
        </button>
      </div>
    </section>
  );
};

export default PreFooter;
