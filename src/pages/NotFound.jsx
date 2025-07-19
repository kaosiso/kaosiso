import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import GoHome from "../components/GoHome";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-[100px] font-extrabold text-gray-800"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-2xl sm:text-3xl text-gray-600 mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Oops! Page not found
      </motion.p>
      <motion.p
        className="text-lg sm:text-xl text-gray-600 mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          animate={{
            x: [0, 5, -5, 5, 0],
            rotate: [0, 2, -2, 2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          🦕
        </motion.span>{" "}
        This page went extinct.
      </motion.p>
      <GoHome />
    </motion.div>
  );
};

export default NotFound;
