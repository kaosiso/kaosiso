import React from "react";
import { motion } from "framer-motion";

import { FaReact, FaHtml5, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoVercel,
} from "react-icons/io5";
import { SiMongodb, SiFirebase, SiPostman, SiExpress } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { CgFramer } from "react-icons/cg";
import nodejs from "../assets/icons/nodejs.png";
import GoHome from "../components/GoHome";

const iconMap = {
  React: <FaReact className="text-cyan-500" />,
  "Tailwind CSS": <RiTailwindCssFill className="text-sky-500" />,
  HTML5: <FaHtml5 className="text-orange-500" />,
  CSS3: <IoLogoCss3 className="text-blue-500" />,
  JavaScript: <IoLogoJavascript className="text-yellow-400" />,
  "Framer Motion": <CgFramer className="text-pink-400" />,
  "Node.js": <img src={nodejs} alt="Node.js" className="w-5 h-5" />,
  Express: <SiExpress className="text-gray-800" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  "REST APIs": <SiPostman className="text-orange-400" />,
  GitHub: <IoLogoGithub className="text-black" />,
  Postman: <SiPostman className="text-orange-400" />,
  Figma: <FaFigma className="text-fuchsia-500" />,
  Vercel: <IoLogoVercel className="text-gray-700" />,
  "VS Code": <BiLogoVisualStudio className="text-blue-600" />,
};

const skillsData = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    category: "Tools",
    skills: ["GitHub", "VS Code", "Postman", "Figma", "Vercel"],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-gray-800 flex flex-col items-center rounded-3xl pt-8 pb-16 px-6 md:px-12 lg:px-24 xl:px-32"
    >
      <motion.h3
        className="text-2xl sm:text-2xl font-greatVibes text-center mb-14 text-gray-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h3>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {skillsData.map((section, index) => (
          <motion.div
            key={section.category}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              {section.category}
            </h2>
            <ul className="space-y-3">
              {section.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 px-4 py-2 bg-white/40 border border-gray-200 rounded-lg hover:bg-white/70 transition"
                >
                  {iconMap[skill] || <span className="w-5" />}
                  <span className="text-sm font-medium">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-4">
        <GoHome />
      </div>
    </motion.div>
  );
};

export default Skills;
