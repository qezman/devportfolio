import {
  FaLaptopCode,
  FaPaintBrush,
  FaTachometerAlt,
  FaGlobe,
  FaReact,
  FaCode,
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaNetworkWired,
} from "react-icons/fa";

const Services = () => {
  const allServices = [
    {
      title: "Product Design",
      subtitle:
        "Creating intuitive user experiences with research-driven design principles and modern UI patterns.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Frontend Development",
      subtitle:
        "Building responsive, performant web applications using React, Next.js, and modern JavaScript frameworks.",
      icon: <FaReact />,
    },
    {
      title: "Cloud Infrastructure",
      subtitle:
        "Designing and implementing scalable cloud solutions using AWS, Terraform, and Infrastructure-as-Code principles.",
      icon: <FaCloud />,
    },
    {
      title: "DevOps & Automation",
      subtitle:
        "Automating deployment pipelines, server configuration, and infrastructure management for production-ready systems.",
      icon: <FaServer />,
    },
    {
      title: "Security & Hardening",
      subtitle:
        "Implementing security best practices, system hardening, and access control for robust infrastructure.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Network Architecture",
      subtitle:
        "Designing secure, scalable network architectures with load balancing, auto-scaling, and high availability.",
      icon: <FaNetworkWired />,
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
          <div className="responsive-grid mb-16">
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

          {/* Cloud & DevOps Journey Section */}
          <div className="mt-16 pt-16 border-t border-white/10">
            <div className="text-center mb-12">
              <h3 className="tracking-wide text-xl sm:text-2xl md:text-3xl mb-2 text-blue-400">
                Cloud & DevOps Journey
              </h3>
              <hr className="border-4 border-b w-12 md:w-16 border-blue-500 mx-auto mb-6" />
              <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Recently, I have been expanding my engineering foundation into Cloud Computing and DevOps. 
                I enjoy building and documenting infrastructure projects involving Linux administration, AWS infrastructure, 
                and Infrastructure-as-Code using Terraform.
              </p>
            </div>

            {/* Journey Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-white/10">
                <FaCloud className="text-3xl text-blue-400 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Cloud Architecture</h4>
                <p className="text-gray-300 text-sm">
                  Designing scalable AWS solutions with high availability and security best practices
                </p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-white/10">
                <FaServer className="text-3xl text-blue-400 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Infrastructure as Code</h4>
                <p className="text-gray-300 text-sm">
                  Automating infrastructure provisioning and management using Terraform
                </p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-white/10">
                <FaShieldAlt className="text-3xl text-blue-400 mx-auto mb-4" />
                <h4 className="font-semibold text-lg mb-2">Security & DevOps</h4>
                <p className="text-gray-300 text-sm">
                  Implementing security hardening and deployment automation for production systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
