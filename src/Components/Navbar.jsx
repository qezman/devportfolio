import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  FaBehance,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const contactInfo = {
  email: "kazeemjimohdev@gmail.com",
  socialLinks: {
    github: "https://github.com/qezman",
    linkedin: "https://www.linkedin.com/in/kazeem-jimoh-027a3b21a/",
    behance: "https://www.behance.net/jimohkazeem",
    whatsapp: "https://wa.me/8122142257",
  },
};

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const router = useRouter();
  const pathname = (router.asPath || "/").split("#")[0];

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
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex justify-center xl:justify-between items-center gap-x-8 xl:gap-x-20 py-4">
          {/* Logo */}
          <div className="font-bold">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </Link>
          </div>

          {/* Navbar Links - Centered */}
          <ul className="flex space-x-6 md:space-x-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname === link.href.split("#")[0];
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 cursor-pointer font-medium text-sm md:text-base lg:text-lg transition-colors duration-300 relative group"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isActive ? " bg-blue-400" : "hover:text-blue-400"}`}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            {Object.entries(contactInfo.socialLinks).map(
              ([key, link], index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg bg-white/0 hover:bg-blue-500/90 text-current"
                >
                  {key === "behance" && (
                    <FaBehance className="text-lg md:text-xl" />
                  )}
                  {key === "linkedin" && (
                    <FaLinkedin className="text-lg md:text-xl" />
                  )}
                  {key === "whatsapp" && (
                    <FaWhatsapp className="text-lg md:text-xl" />
                  )}
                  {key === "github" && (
                    <FaGithub className="text-lg md:text-xl" />
                  )}
                </a>
              ),
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center py-4">
          {/* Logo */}
          <div className="font-bold">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </Link>
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
            {["Home", "About", "Projects", "Contact"].map((item, index) => {
              const href =
                item === "Home"
                  ? "/#home"
                  : item === "Projects"
                    ? "/projects"
                    : `/${item.toLowerCase()}`;

              return (
                <Link
                  key={index}
                  href={href}
                  className="text-base hover:text-blue-400 transition-colors duration-300 font-medium"
                  onClick={(e) => {
                    if (item === "Home") {
                      handleScroll(
                        e,
                        "home",
                      );
                      setIsDropDownOpen(false);
                    }
                  }}
                >
                  {item}
                </Link>
              );
            })}

            {/* Mobile Social Icons */}
            <div className="flex gap-4 pt-4 border-t border-white/10 w-full justify-center">
              {Object.entries(contactInfo.socialLinks).map(
                ([key, link], index) => (
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
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
