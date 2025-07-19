import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import kaosiso from "../assets/kaosiso.jpg";
import AboutText from "../components/AboutText";
import GoHome from "../components/GoHome";
import { FaDownload, FaPaperPlane } from "react-icons/fa";

const About = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen text-gray-800 flex flex-col items-center rounded-3xl px-6 py-6 md:px-12 lg:px-24 xl:px-32"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-2xl  font-greatVibes text-center mb-3 text-gray-700"
      >
        Meet Kaosiso
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-10 items-center w-full max-w-[1200px] mx-auto">
        {/* LEFT: Profile, name, handle, socials */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          {/* Profile Picture */}
          <div className="w-[280px] h-[320px] rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <img
              src={kaosiso}
              alt="Kaosiso"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & Handle */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-700">
              kaosiso | Full Stack Developer
            </h2>
            <p className="text-sm text-gray-500">@kaosisochukwum</p>
          </div>

          {/* Animated Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mt-2"
          >
            {[
              {
                href: "https://github.com/kaosiso",
                icon: <FaGithub />,
                bg: "bg-gray-800",
                color: "text-gray-100",
              },
              {
                href: "https://linkedin.com/in/kaosisochukwu",
                icon: <FaLinkedin />,
                bg: "bg-[#0a66c2]",
                color: "text-gray-100",
              },
              {
                href: "https://medium.com/@kaosisochukwum",
                icon: <FaMedium />,
                bg: "bg-[#02b875]",
                color: "text-gray-100",
              },
              {
                href: "mailto:nwachukwu.israel2021@unizik.edu.ng",
                icon: <FaEnvelope />,
                bg: "bg-red-500",
                color: "text-gray-100",
              },
              {
                href: "https://x.com/kokomarx",
                icon: <FaXTwitter />,
                bg: "bg-black",
                color: "text-gray-100",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-colors duration-300 ${social.bg} ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Bio + Buttons */}
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 w-full max-w-3xl text-gray-700"
        >
          <AboutText />

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 flex-wrap justify-center">
            <a
              href="/kaosiso-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2 rounded-xl text-lg font-medium text-gray-100 bg-gradient-to-br from-gray-300 via-gray-600 to-gray-800 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-300"
            >
              <FaDownload className="text-gray-100" />
              Download CV
            </a>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-xl text-lg font-medium text-gray-800 bg-gradient-to-br from-gray-400 via-gray-200 to-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-300"
            >
              <FaPaperPlane className="text-gray-800" />
              Contact Me
            </button>
          </div>

          <GoHome />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
