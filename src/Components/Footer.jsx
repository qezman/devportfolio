import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaBehance, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const contactInfo = {
  email: "contatctqossim@gmail.com",
  socialLinks: {
    behance: "https://www.behance.net/jimohkazeem",
    linkedin: "https://www.linkedin.com/in/kazeem-jimoh-027a3b21a/",
    whatsapp: "https://wa.me/8122142257",
    github: "https://github.com/qezman",
  },
};

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  return (
    <footer className="relative section-padding bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
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
              className="p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 bg-gray-800 hover:bg-blue-600/90 text-current backdrop-blur-md border border-white/10"
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
            Let’s Build & Deploy Together
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-2xl lg:max-w-xl mx-auto">
            Focused on cloud infrastructure, automation, and system reliability.
            Open to DevOps and cloud engineering opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded transition-all duration-300 hover:scale-105 border border-gray-600 bg-transparent hover:bg-blue-600/90">
              DevOps
            </button>
            <button className="px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded transition-all duration-300 hover:scale-105 bg-blue-600 hover:bg-blue-700 text-white">
            Cloud Engineering
            
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-8 sm:mb-12">
          <form
            className="w-full max-w-2xl mx-auto grid grid-cols-1 gap-3 sm:gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              (async () => {
                if (!name.trim()) return toast.error("Please enter your name.");
                if (!message.trim())
                  return toast.error("Please write a message.");
                if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                  return toast.error(
                    "Please enter a valid email or leave it blank.",
                  );
                try {
                  setSending(true);
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name,
                      email: email || undefined,
                      message,
                    }),
                  });
                  const data = await res.json();
                  if (!res.ok || !data.ok)
                    throw new Error(data.error || "Send failed");
                  toast.success("Message sent successfully!");
                  setName("");
                  setEmail("");
                  setMessage("");
                } catch (err) {
                  toast.error("Failed to send. Please try again later.");
                } finally {
                  setSending(false);
                }
              })();
            }}
          >
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="px-4 py-3 bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base rounded-lg border border-gray-600"
              />
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-4 py-3 bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base rounded-lg border border-gray-600"
              />
            </section>
            <textarea
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              rows={4}
              className="px-4 py-3 bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base rounded-lg border border-gray-600"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={sending}
                className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 rounded-lg text-sm sm:text-base font-medium text-white shadow-lg"
              >
                {sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
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
