import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Import motion

const GoHome = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate("/")}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold shadow-md hover:shadow-lg hover:scale-105 bg-transparent hover:bg-gray-200 transition duration-300"
    >
      <FaHome className="text-xl text-gray-700" />
      Back to Home
    </motion.button>
  );
};

export default GoHome;
