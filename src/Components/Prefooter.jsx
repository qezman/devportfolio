"use client";

import React, { useState, useEffect } from "react";

const PreFooter = () => {
  return (
    <section
      // className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 h-48 text-white"
      className="relative min-h-[50vh] bg-cover w-full bg-center p-4 xl:px-32 2xl:px-[300px] text-white"
      style={{
        backgroundImage: "url('/callto-bg.jpg')",
      }}
    >
      {/* Carousel Container */}
      <div className="w-full h-full overflow-hidden flex flex-col justify-center pr-20 md:mx-6">
        <p className="text-2xl md:text-4xl leading-loose md:leading-[1.5] lg:leading-[1.5] lg:text-5xl font-bold md:pr-36 lg:pr-[300px] xl:pr-[500px]">
          Trusted by the Next Generation of Innovators
        </p>
        <p className="mt-2 text-gray-300 md:text-lg">
          Let's create something extraordinary together.
        </p>
        <button className="mt-10 bg-blue-500 hover:bg-blue-800 font-bold px-8 lg:px-16 py-4 rounded w-fit delay-500 duration-500">
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
