import React from "react";
import { motion } from "framer-motion";

const Stars = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 9, duration: 3, ease: "easeInOut" }}
      className="fixed inset-0 pointer-events-none -z-20"
      style={{
        backgroundColor: "transparent",
        backgroundImage: `
          radial-gradient(2.5px 2.5px at 10% 20%, white 90%, transparent 100%),
          radial-gradient(2px 2px at 40% 60%, white 80%, transparent 100%),
          radial-gradient(1.5px 1.5px at 70% 80%, white 80%, transparent 100%),
          radial-gradient(2.5px 2.5px at 80% 30%, white 90%, transparent 100%),
          radial-gradient(1.5px 1.5px at 25% 90%, white 90%, transparent 100%)
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "120px 120px",
        filter: "drop-shadow(0 0 4px white)",
        animation: "twinkle 3s infinite alternate",
        opacity: 0.8,
      }}
    />
  );
};

export default Stars;
