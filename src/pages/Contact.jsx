import React from "react";
import CalendlySection from "../components/CalendelySection";
import { motion } from "framer-motion";
import GoHome from "../components/GoHome";

const Contact = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen text-gray-800 flex flex-col items-center rounded-3xl px-6 py-6 md:px-12 lg:px-24 xl:px-32"
    >
      <motion.h1
        className="text-xl sm:text-xl font-greatVibes text-center mb-3 text-gray-700"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Connect
      </motion.h1>

      <CalendlySection />

      <div className="mt-2">
        <GoHome />
      </div>
    </motion.div>
  );
};

export default Contact;
