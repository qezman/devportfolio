"use client";

import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div className="main-container min-h-screen w-full">
      <nav className="w-full">
        <Navbar />
      </nav>
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
};

export default Layout;
