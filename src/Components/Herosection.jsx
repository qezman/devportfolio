import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel content
  const slides = [
    {
      // image: "/qossim.jpeg",
      image: "/zeem-1.jpeg",
      title: "Hey there, I'm Kazeem!",
      subtitle: "A Passionate Web Developer & Designer",
    },
    {
      title: "Frontend Web Developer",
      subtitle: "For Web Design & Development",
    },
    {
      title: "UI/UX Designer",
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

  // Slide Transition Variants
  // const slideVariants = {
  //   hidden: { opacity: 0, x: "-100%" }, // Slide in from left
  //   visible: { opacity: 1, x: 0 },
  //   exit: { opacity: 0, x: "-100%" },
  // };

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
    <main className="absolute inset-0 mt-20 text-white flex items-center justify-center md:px-32">
      <section className="relative text-center w-full max-w-4xl">
        {/* Top Content */}
        <div className="relative">
          {/* Animated Carousel with Fixed Height */}
          <div className="overflow-hidden h-32 md:h-40 flex items-center justify-center">
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
                    className={`mx-auto border-4 border-blue-600 w-40 h-40 rounded-full ${
                      currentSlide ===
                      slides.findIndex(
                        (slide) => slide.image === "/zeem-1.jpeg"
                      )
                        ? "h-[200px] w-[200px] rounded-full"
                        : "w-[50%] h-[50%] object-cover "
                    }`}
                  />
                ) : (
                  <>
                    <p className="tracking-wider text-xs uppercase text-gray-400 md:text-sm">
                      {slides[currentSlide].subtitle}
                    </p>
                    <h1 className="font-semibold md:px-16 lg:px-32 xl:64 2xl:w-9/12 2xl:mx-auto text-2xl md:text-4xl lg:text-5xl mt-3 tracking-wide leading-relaxed">
                      {slides[currentSlide].title}
                    </h1>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <article className="mt-10">
          {/* Decorative Borders and "See More" */}
          <div className="flex justify-center items-center flex-col">
            <div className="mt-5 -ml-40 border-l-2 border-t-2 w-12 h-10 border-blue-600"></div>
            <p className="p-4 -mt-10 uppercase font-semibold tracking-wide">
              Explore Around
            </p>
            <div className="-mt-10 ml-40 border-r-2 border-b-2 w-12 h-10 border-blue-600"></div>
          </div>

          {/* Bottom Content */}
          <div className="mt-20 flex justify-center items-center gap-x-4 text-sm md:text-base">
            {slides.map((_, index) => (
              <p
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`cursor-pointer ${
                  index === currentSlide ? "text-blue-500 font-bold" : ""
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
