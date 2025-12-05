import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 forward, -1 backward
  const shouldReduceMotion = useReducedMotion();

  // Carousel content
  const slides = [
    {
      image: "/zeem-2.jpeg",
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
    enter: (dir) =>
      shouldReduceMotion
        ? { opacity: 0 }
        : { x: dir > 0 ? 40 : -40, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: (dir) =>
      shouldReduceMotion
        ? { opacity: 0 }
        : { x: dir > 0 ? -40 : 40, opacity: 0 },
  };

  // Auto-slide every 4s, pause on hover
  useEffect(() => {
    const id = setInterval(() => paginate(1), 4000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const paginate = (dir) => {
    setDirection(dir);
    setCurrentSlide((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center text-white section-padding overflow-x-hidden pt-28 md:pt-36 lg:pt-40">
      <section className="relative text-center w-full max-w-6xl mx-auto overflow-hidden">
        {/* Top Content */}
        <div className="relative group">
          {/* Animated Carousel with Responsive Height */}
          <div className="overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center py-2">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: shouldReduceMotion ? "tween" : "spring",
                  stiffness: 260,
                  damping: 28,
                  duration: shouldReduceMotion ? 0.4 : undefined,
                }}
                className="absolute w-full"
                drag={shouldReduceMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) paginate(1);
                  else if (info.offset.x > 60) paginate(-1);
                }}
              >
                {slides[currentSlide].image ? (
                  <Image
                    src={slides[currentSlide].image}
                    alt="Slider Image"
                    width={192}
                    height={192}
                    className="mx-auto border-4 border-blue-600 rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover"
                    priority
                  />
                ) : (
                  <>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05, duration: 0.35 }}
                      className="tracking-wider text-xs sm:text-sm uppercase text-gray-300 mb-2"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>
                    <motion.h1
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12, duration: 0.4 }}
                      className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide leading-tight px-4"
                    >
                      {slides[currentSlide].title}
                    </motion.h1>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <article className="mt-0">
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

          {/* Dots Pagination */}
          <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-blue-500 w-6"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Herosection;
