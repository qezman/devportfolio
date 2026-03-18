import React from "react";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      <section className="w-full">
        <Footer />
      </section>
    </motion.div>
  );
};

export default Contact;
