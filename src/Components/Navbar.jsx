"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScroll = (event, sectionId) => {
    event.preventDefault(); // Prevent default link behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsDropDownOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="text-white fixed top-0 left-0 w-full p-6 xl:px-48 bg-opacity-80 backdrop-blur-md z-50">
      {/* Desktop Navigation - Centered */}
      <div className="hidden lg:flex justify-center xl:justify-between items-center gap-x-20">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        </div>

        {/* Navbar Links */}
        <ul className="flex space-x-10">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="hover:text-gray-400 cursor-pointer font-medium text-lg"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          {Object.entries(contactInfo.socialLinks).map(([key, link], index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-blue-500 rounded-full transition duration-300"
            >
              {key === "behance" && <FaBehance className="text-xl" />}
              {key === "linkedin" && <FaLinkedin className="text-xl" />}
              {key === "whatsapp" && <FaWhatsapp className="text-xl" />}
              {key === "github" && <FaGithub className="text-xl" />}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        </div>

        {/* Mobile Menu Button */}
        <div
          className="flex items-center gap-x-3 bg-blue-800 rounded-lg px-4 py-2 cursor-pointer"
          onClick={handleDropdownToggle}
        >
          <p className="font-semibold tracking-wide">Menu</p>
          {isDropDownOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isDropDownOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 p-6 lg:hidden shadow-lg"
        >
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-lg hover:text-gray-400"
              onClick={() => setIsDropDownOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
