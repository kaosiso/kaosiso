import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Loading = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex justify-center items-center"
    >
      <motion.h1
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 6, opacity: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="text-white text-3xl sm:text-5xl font-bold"
      >
        Meet Kaosiso
      </motion.h1>
    </motion.div>
  );
};

export default Loading;
