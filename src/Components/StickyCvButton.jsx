"use client";

import { FaFilePdf } from "react-icons/fa";

export default function StickyCvButton() {
  const commonClasses =
    "fixed bottom-6 right-6 z-[60] shadow-xl rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-transparent";

  return (
    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`${commonClasses} bg-blue-600 hover:bg-blue-700 text-white transition-transform duration-300 hover:scale-105`}
      aria-label="View my CV (opens in a new tab)"
    >
      <div className="flex items-center gap-3 pl-4 pr-5 py-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
          <FaFilePdf className="text-white text-xs" />
        </span>
        <span className="text-sm sm:inline">View my CV</span>
      </div>
    </a>
  );
}
