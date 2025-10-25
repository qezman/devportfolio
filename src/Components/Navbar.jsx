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
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsDropDownOpen(false);
    }
  };

  return (
    <nav className="px-4 md:px-6 fixed top-0 left-0 w-full z-50 text-white bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="">
        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex justify-center xl:justify-between items-center gap-x-8 xl:gap-x-20 py-4">
          {/* Logo */}
          <div className="font-bold">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>

          {/* Navbar Links - Centered */}
          <ul className="flex space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="hover:text-blue-400 cursor-pointer font-medium text-sm md:text-base lg:text-lg transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            {Object.entries(contactInfo.socialLinks).map(([key, link], index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white/0 hover:bg-blue-500/90 text-current"
              >
                {key === "behance" && <FaBehance className="text-lg md:text-xl" />}
                {key === "linkedin" && <FaLinkedin className="text-lg md:text-xl" />}
                {key === "whatsapp" && <FaWhatsapp className="text-lg md:text-xl" />}
                {key === "github" && <FaGithub className="text-lg md:text-xl" />}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center py-4">
          {/* Logo */}
          <div className="font-bold">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </div>

          {/* Mobile Menu Button */}
          <div
            className="flex items-center gap-x-2 bg-blue-600 dark:bg-blue-800 rounded-lg px-3 py-2 cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            onClick={handleDropdownToggle}
          >
            <p className="font-semibold tracking-wide text-sm">Menu</p>
            {isDropDownOpen ? (
              <FaTimes className="text-sm" />
            ) : (
              <FaBars className="text-sm" />
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isDropDownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 w-full bg-black/80 text-white flex flex-col items-center space-y-4 p-6 lg:hidden shadow-lg border-t border-white/10 backdrop-blur-md"
          >
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-base hover:text-blue-400 transition-colors duration-300 font-medium"
                onClick={() => setIsDropDownOpen(false)}
              >
                {item}
              </a>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex gap-4 pt-4 border-t border-white/10 w-full justify-center">
              {Object.entries(contactInfo.socialLinks).map(([key, link], index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-300 hover:bg-blue-500/90"
                >
                  {key === "behance" && <FaBehance className="text-lg" />}
                  {key === "linkedin" && <FaLinkedin className="text-lg" />}
                  {key === "whatsapp" && <FaWhatsapp className="text-lg" />}
                  {key === "github" && <FaGithub className="text-lg" />}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
