import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ClickEffect from "../utils/clickEffect";
import Navbar from "./Navbar"; // ✅ Import the Navbar component

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full px-4 py-4 text-gray-900 flex justify-center items-center z-50 fixed top-0 left-0 transition duration-300 ${
          scrolled ? "backdrop-blur-md bg-black/30 shadow-md" : "bg-transparent"
        }`}
      >
        <ClickEffect />

        <Link
          to="/"
          className="text-2xl logo font-medium flex items-center gap-2"
        >
          {/* Blinking blue dot */}
          <span
            className="h-3 w-3 rounded-full bg-blue-500"
            style={{ animation: "blink 1s infinite" }}
          ></span>

          {/* Falling animation text */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Kaosiso's
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            World
          </motion.div>
        </Link>

        {/* Blink animation */}
        <style>
          {`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
          `}
        </style>
      </header>

      {/* ✅ Navbar positioned separately so it doesn't interfere with the logo */}
      <Navbar />
    </>
  );
};

export default Header;
