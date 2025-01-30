"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBehance, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const contactInfo = {
  email: "your-email@example.com",
  socialLinks: {
    behance: "https://www.behance.net/jimohkazeem",
    linkedin: "https://www.linkedin.com/in/kazeem-jimoh-027a3b21a/",
    whatsapp: "https://wa.me/8122142257",
    github: "https://github.com/qezman",
  },
};

const Footer = () => {
  const [message, setMessage] = useState("");

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-10 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <Image src="/logo.svg" width={40} height={40} alt="Logo" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          {Object.entries(contactInfo.socialLinks).map(([key, link], index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-blue-500 rounded-full transition duration-300"
            >
              {key === "behance" && <FaBehance className="text-xl" />}
              {key === "linkedin" && <FaLinkedin className="text-xl" />}
              {key === "whatsapp" && <FaWhatsapp className="text-xl" />}
              {key === "github" && <FaGithub className="text-xl" />}
            </a>
          ))}
        </div>

        {/* Collaboration Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold">Let's Collaborate</h3>
          <p className="text-gray-400 mt-2">
            I’m open to projects and collaborations. Let’s build something
            amazing together!
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="px-4 text-sm lg:text-base font-semibold lg:px-6 py-2 border border-gray-500 rounded hover:bg-blue-600 transition duration-300">
              Web Design
            </button>
            <button className="px-4 text-sm lg:text-base font-semibold lg:px-6 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300">
              Web Development
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-10 flex justify-center">
          <div className="flex w-full max-w-md border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Type your message...`}
              className="w-full px-4 py-3 bg-transparent outline-none text-white placeholder-gray-400"
            />
            <a
              href={`mailto:${
                contactInfo.email
              }?subject=Contact from Website&body=${encodeURIComponent(
                message
              )}`}
              className="px-5 bg-blue-500 hover:bg-blue-600 transition duration-300 flex items-center"
            >
              Send
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-lg font-semibold">Kazeem Jimoh</p>
          <p className="text-gray-400 mt-2">
            Copyright &copy; {new Date().getFullYear()} Qezman
          </p>
          <p className="text-gray-500">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
