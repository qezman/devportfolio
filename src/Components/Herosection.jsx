import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel content
  const slides = [
    {
      image: "/zeem-1.jpeg",
      title: "Hey there, I'm Kazeem!",
      subtitle: "A Passionate Web Developer & Designer",
    },
    {
      title: "Frontend Web Developer",
      subtitle: "For Web Design & Development",
    },
    {
      title: "Product Designer",
      subtitle: "Creating Exceptional User Interfaces",
    },
    {
      title: "Creative Thinker",
      subtitle: "Building Innovative Web Experiences",
    },
    {
      title: "Problem Solver",
      subtitle: "Transforming Complex Challenges into Elegant Solutions",
    },
  ];

  const slideVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center text-white section-padding">
      <section className="relative text-center w-full max-w-6xl mx-auto">
        {/* Top Content */}
        <div className="relative">
          {/* Animated Carousel with Responsive Height */}
          <div className="overflow-hidden h-24 sm:h-32 md:h-40 flex items-center justify-center">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.6 }}
                className="absolute w-full"
              >
                {slides[currentSlide].image ? (
                  <img
                    src={slides[currentSlide].image}
                    alt="Slider Image"
                    className="mx-auto border-4 border-blue-600 rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
                  />
                ) : (
                  <>
                    <p className="tracking-wider text-xs sm:text-sm uppercase text-gray-400 mb-2">
                      {slides[currentSlide].subtitle}
                    </p>
                    <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide leading-tight px-4">
                      {slides[currentSlide].title}
                    </h1>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <article className="mt-8 sm:mt-10 md:mt-12">
          {/* Decorative Borders and "See More" */}
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Left Border */}
              <div className="flex flex-col items-end">
                <div className="border-l-2 border-t-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-blue-600"></div>
              </div>
              
              {/* Center Text */}
              <p className="uppercase font-semibold tracking-wide text-xs sm:text-sm md:text-base px-2 sm:px-4">
                Explore Around
              </p>
              
              {/* Right Border */}
              <div className="flex flex-col items-start">
                <div className="border-r-2 border-b-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-blue-600"></div>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center items-center gap-x-2 sm:gap-x-4 text-xs sm:text-sm md:text-base">
            {slides.map((_, index) => (
              <p
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer transition-colors duration-300 ${
                  index === currentSlide
                    ? "text-blue-500 font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {`0${index + 1}`}
              </p>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Herosection;
