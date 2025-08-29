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
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white section-padding">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.svg"
            width={40}
            height={40}
            alt="Logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8">
          {Object.entries(contactInfo.socialLinks).map(([key, link], index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 bg-gray-800 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110"
            >
              {key === "behance" && (
                <FaBehance className="text-lg sm:text-xl" />
              )}
              {key === "linkedin" && (
                <FaLinkedin className="text-lg sm:text-xl" />
              )}
              {key === "whatsapp" && (
                <FaWhatsapp className="text-lg sm:text-xl" />
              )}
              {key === "github" && <FaGithub className="text-lg sm:text-xl" />}
            </a>
          ))}
        </div>

        {/* Collaboration Section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Let's Collaborate
          </h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 max-w-2xl lg:max-w-xl mx-auto">
            I'm open to projects and collaborations. Let's build something
            amazing together!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold border border-gray-500 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-105">
              Web Design
            </button>
            <button className="px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold bg-blue-500 rounded hover:bg-blue-600 transition-all duration-300 hover:scale-105">
              Web Development
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row w-full max-w-md mx-auto border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-4 py-3 bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base"
            />
            <button
              type="button"
              className="px-4 sm:px-5 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center text-sm sm:text-base font-medium"
              onClick={() => {
                if (message.trim()) {
                  window.location.href = `mailto:${
                    contactInfo.email
                  }?subject=Contact from Website&body=${encodeURIComponent(
                    message
                  )}`;
                } else {
                  alert("Please enter a message before sending.");
                }
              }}
            >
              Send
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-lg sm:text-xl font-semibold mb-2">Kazeem Jimoh</p>
          <p className="text-gray-400 text-sm sm:text-base mb-1">
            Copyright &copy; {new Date().getFullYear()} Qezman
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
