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
      title: "Frontend framework",
      subtitle:
        "Expertise in using popular frameworks like React or Next.js for efficient development.",
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
      className="relative h-full bg-cover w-full bg-center p-4 text-white xl:px-80"
      style={{
        backgroundImage: "url('/5.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 my-20 px-4 grid lg:grid-cols-3 lg:gap-8">
        {/* First Grid Cell: "My Services" */}
        <article className="lg:col-span-1">
          <h3 className="tracking-wide text-2xl">My Services</h3>
          <h1 className="text-2xl font-bold my-2 tracking-wider">Things I do?</h1>
          <hr className="border-4 border-b w-16 border-blue-400" />
          <p className="mt-8 text-gray-200">
            I specialize in building exceptional digital experiences.
          </p>
          {/* Decorative Borders and "See More" */}
          <div className="flex justify-start items-start flex-col">
            <div className="mt-5 border-l-2 border-t-2 w-12 h-10 border-blue-600"></div>
            <p className="p-4 -mt-10 text-sm uppercase font-semibold tracking-wide">
              View all services
            </p>
            <div className="-mt-10 ml-32 border-r-2 border-b-2 w-12 h-10 border-blue-600"></div>
          </div>
        </article>

        {/* Second Grid Cell: Service Cards */}
        <article className="lg:col-span-2 mt-10 lg:mt-0">
          <div className="space-y-6 md:space-y-0 md:gap-y-10 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {allServices.map((service) => {
              return (
                <section key={service.title} className="flex flex-col pr-16 md:pr-6">
                  <div className="border-2 text-3xl transform transition-transform duration-700 hover:rotate-45 border-blue-400 w-fit p-4">
                    {service.icon}
                  </div>
                  <h1 className="text-xl tracking-wide font-bold py-2 pr-4 md:py-3">
                    {service.title}
                  </h1>
                  <p className="text-sm text-gray-300 font-light">
                    {service.subtitle}
                  </p>
                </section>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};
export default Services;
