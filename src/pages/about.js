import React from "react";
import Services from "../Components/Services";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      <Services />
    </motion.div>
  );
};

export default About;
