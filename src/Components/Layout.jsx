"use client";

import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div className={`main-container`}>
      <nav className="">
        <Navbar />
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
