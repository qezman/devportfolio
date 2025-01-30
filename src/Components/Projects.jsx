import { useState } from "react";
import { FaAngleDown, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      image: "/motivv.png",
      title: "Mottiv",
      desc: "This website showcases a complete React structure, allowing users to enroll in courses of their choice and enabling designers to apply for suitable job opportunities.",
      tools: ["Figma, React, TailwindCSS, NodeJs"],
      livelink: "https://mottiv.co/",
    },
    {
      image: "/comfy.png",
      title: "Comfy-Store Ecommerce",
      desc: "This website features a fully functional eCommerce store built with React and Next.js, providing users with a seamless shopping and ordering experience.",
      tools: ["React, NextJs, TailwindCSS"],
      livelink: "https://comfy-store-ten-eta.vercel.app/",
    },
    {
      image: "/Bag.png",
      title: "Shopping Cart",
      desc: " This mini e-commerce project leverages React's `useReducer` to manage state efficiently. When a user places an order for an item, such as a phone, the state is updated to reflect the new order. This approach simulates the functionality of modern e-commerce websites, showcasing how they handle real-time updates to the shopping cart and inventory.",
      tools: ["React, TailwindCSS"],
    },
    {
      image: "/Calendly.png",
      title: "Calendly",
      desc: "This project replicates the Calendly website, using the React framework to showcase a beautiful and dynamic landing page. It demonstrates the implementation of modern UI elements and interactive features, closely mirroring the design and functionality of Calendly.",
      tools: ["React, TailwindCSS"],
    },

    {
      image: "/terrestrial-speed-radar.png",
      title: "Speed Radar (Speed Violators Log)",
      desc: "This React project displays driver logs of speed violations as received from a radar microprocessor. The microprocessor is configured using Arduino software, demonstrating the integration of hardware and software to monitor and report speed violations in real-time.",
      tools: ["React, Figma, Arduino, TailwindCSS"],
      livelink: "https://terrestrial-speed-radar.netlify.app/",
    },
    {
      image: "/lms.png",
      title: "Learning Management System",
      desc: "This project is a learning management system designed to help students and teachers interact seamlessly. It features a user-friendly interface and a modern design, making it easy for users to navigate and access course materials.",
      tools: ["Figma"],
      livelink:
        "https://www.behance.net/gallery/213117929/Learning-Management-System",
    },
    {
      image: "/education.png",
      title: "Course Correct",
      desc: " This project, (Course Correct), was designed using Figma to enable and ensure users can seamlessly enroll in courses of their choice.",
      tools: ["Figma, Adobe Illustrator"],
      livelink:
        "https://www.behance.net/gallery/181787301/E-learning-Mobile-App",
    },
    {
      image: "/gtco.png",
      title: "GTCO",
      desc: "This project is a redesign of the GTCO Food and Drink and Fashion Week, focusing on improving various pages to ensure users experience a friendly UI and seamless applications where applicable.",
      tools: ["Figma"],
      livelink:
        "https://www.behance.net/gallery/186960521/GTCO-Redesign-Mobile-App",
    },
    {
      image: "/furni.png",
      title: "Furni.Hub",
      desc: "This project is a landing page redesign, showcasing vibrant colors and a modern e-commerce layout.",
      tools: ["Figma"],
      livelink:
        "https://www.behance.net/gallery/182235163/Furniture-Landing-Page",
    },
    {
      image: "/PaladinTasks.png",
      title: "Paladin Hub",
      desc: "This project a full case study and desgin of a pick-up and delivery app with a focus on user experience and user interface design.",
      tools: ["Figma"],
      livelink:
        "https://www.behance.net/gallery/215273337/Pick-up-and-Delivery-App",
    },
    {
      image: "/TBS.png",
      title: "Travel Booking System",
      desc: " This project a full case study and desgin of a traveling booking system with a focus on user experience and user interface design.",
      tools: ["Figma"],
      livelink:
        "https://www.behance.net/gallery/216890155/Travel-Booking-System",
    },
  ];
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleViewMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
  };

  return (
    <section
      className="relative h-auto bg-cover w-full bg-center p-4 text-white xl:px-80"
      style={{
        backgroundImage: "url('/5.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 my-20 px-4">
        <h1 className="text-3xl flex justify-center items-center text-center font-bold">
          Here are some of my projects
        </h1>
        <p className="text-center font-semibold text-gray-300 text-lg mt-4">
          Featured and <span>Personal</span> Projects
        </p>

        <article className="mt-20 space-y-10 md:grid md:grid-cols-2 md:space-y-0 md:gap-10 lg:grid-cols-3 justify-center align-items-center content-center">
          {projects.slice(0, visibleProjects).map((project, index) => {
            return (
              <div key={index} className="relative group">
                <img
                  src={project.image}
                  className="w-full rounded-xl h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                  <p className="text-xl font-bold">{project.title}</p>
                  <p className="mt-2">{project.desc}</p>
                  <div className="mt-4 flex space-x-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="bg-gray-800 text-white px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                {project.livelink && (
                  <a
                    href={project.livelink}
                    target="_blank"
                    className="absolute bottom-4 right-4 text-[#fff]"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            );
          })}
        </article>

        {visibleProjects < projects.length && (
          <div
            className="mt-12 cursor-pointer hover:text-gray-300 flex justify-center items-center gap-x-3"
            onClick={handleViewMore}
          >
            <p className="font-semibold lg:text-lg">View more</p>
            <FaAngleDown />
          </div>
        )}
      </div>
    </section>
  );
};
export default Projects;
