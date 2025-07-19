import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa"; // ← import icons
import ClickEffect from "../utils/clickEffect";
const Footer = () => {
  return (
    <footer className="shadow-sm text-white bg-[black]/20 py-4 px-4 ">
      <ClickEffect/>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
      >
        {/* Left: Navigation Links */}
        <ul className="flex gap-4 text-gray-200 text-xs sm:text-sm">
          <li>
            <Link to="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Center: Social Icons */}
        <div className="flex gap-5 text-lg sm:text-xl">
          <a
            href="https://medium.com/@kaosisochukwum"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaMedium />
          </a>
          <a
            href="https://github.com/kaosiso"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kaosiso"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-gray-300 sm:text-sm  text-center">
          © {new Date().getFullYear()} Kaosiso — All rights reserved
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
