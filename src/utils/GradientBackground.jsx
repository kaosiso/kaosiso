import React from "react";
import { motion } from "framer-motion";

const GradientBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 7, duration: 2, ease: "easeInOut" }}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        background: `linear-gradient(
          135deg,
          rgba(250, 250, 250, 0.9),   /* soft white */
          rgba(240, 240, 240, 0.7),   /* light gray */
          rgba(230, 230, 230, 0.5),   /* medium light */
          rgba(220, 220, 220, 0.4)    /* subtle depth */
        )`,
      }}
    />
  );
};

export default GradientBackground;
