import {
  FaLaptopCode,
  FaPaintBrush,
  FaTachometerAlt,
  FaGlobe,
  FaReact,
  FaCode,
} from "react-icons/fa";

const Services = () => {
  const allServices = [
    {
      title: "Responsive web design",
      subtitle:
        "Crafting beautiful and user-friendly interfaces that work seamlessly on various devices.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Modern UI/UX Development",
      subtitle:
        "Creating intuitive and engaging user experiences with a focus on the latest design trends.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Performance optimization",
      subtitle:
        "Optimizing websites for speed and efficiency to ensure a smooth user experience.",
      icon: <FaTachometerAlt />,
    },
    {
      title: "Cross-browser compatibility",
      subtitle:
        "Ensuring your website looks and functions consistently across different browsers.",
      icon: <FaGlobe />,
    },
    {
      title: "Frontend framework mastery",
      subtitle:
        "Specializing in scalable, component-driven development with React and Next.js, leveraging TypeScript for type safety, maintainability, and developer productivity.",
      icon: <FaReact />,
    },
    {
      title: "Code quality and maintainability",
      subtitle:
        "Writing clean, maintainable, and scalable code to enhance the longevity of your projects.",
      icon: <FaCode />,
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-cover w-full bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/5.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
      <div className="relative z-10 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <h3 className="tracking-wide text-xl sm:text-2xl md:text-3xl mb-2">
              My Services
            </h3>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-wider">
              Things I do
            </h1>
            <hr className="border-4 border-b w-12 md:w-16 border-blue-500 mx-auto" />
            <p className="mt-6 md:mt-8 text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              I specialize in building exceptional digital experiences.
            </p>
          </div>

          {/* Decorative Borders */}
          <div className="flex justify-center items-center mb-12 md:mb-16">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Left Border */}
              <div className="flex flex-col items-end">
                <div className="border-l-2 border-t-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-blue-600"></div>
              </div>

              {/* Center Text */}
              <p className="uppercase font-semibold tracking-wide text-xs sm:text-sm md:text-base px-2 sm:px-4">
                all services
              </p>

              {/* Right Border */}
              <div className="flex flex-col items-start">
                <div className="border-r-2 border-b-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-blue-600"></div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="responsive-grid">
            {allServices.map((service, index) => (
              <div
                key={service.title}
                className="flex flex-col p-6 rounded-xl transition-all duration-300 hover:scale-105 bg-gray-800/70 backdrop-blur-md border border-white/10"
              >
                <div className="border-2 text-2xl sm:text-3xl transform transition-transform duration-700 hover:rotate-45 border-blue-500 w-fit p-3 sm:p-4 mb-4 text-blue-400">
                  {service.icon}
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl tracking-wide font-bold mb-3">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
