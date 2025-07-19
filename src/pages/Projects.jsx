import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ecommerce from "../assets/images/ecommerce.png";
import chat from "../assets/images/chat.png";
import GoHome from "../components/GoHome";

const projects = [
  {
    title: "Full-Stack eCommerce Platform",
    description:"I built and deployed a full-stack eCommerce platform with secure user authentication, product management, an admin dashboard, and Stripe API integration for mock transactions. User testing with over 20 participants led to improvements in checkout flow and mobile responsiveness, resulting in a streamlined and user-friendly online shopping experience.",
    tech: ["React.js", "Node.js", "MongoDB", "Redux", "Stripe API", "Jest"],
    image: ecommerce,
    live: "https://ecommerce-frontend-delta-nine-91.vercel.app/",
    github: "https://github.com/kaosiso/ECOMMERCE-FULL-STACK.git",
  },
  {
    title: "Real-Time Chat Application",
    description:"I built and deployed a secure real-time chat application using the MERN stack, Socket.io, Zustand, and DaisyUI, featuring JWT-based authentication and chat rooms. The system reliably supported 10–15 active test users with low message latency, offered a responsive UI with dark mode, and received positive feedback from 80% of testers during peer testing",
    tech: ["MERN", "Socket.io", "Zustand", "DaisyUI", "JWT"],
    image: chat,
    live: "https://chat-app-ws3f.onrender.com/",
    github: "https://github.com/kaosiso",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen px-4 py-6"
    >
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl  font-greatVibes text-center mb-12 text-gray-700"
      >
        My Projects
      </motion.h1>

      {/* Changed layout: vertical stack, centered */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <GoHome />
      </div>
    </motion.div>
  );
};

export default Projects;
