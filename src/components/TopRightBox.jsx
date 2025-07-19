import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import skill from "../assets/skill.jpg";

const TopRightBox = ({ mouseOffset }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate("/skills")}
      animate={{ x: -mouseOffset.x, y: mouseOffset.y }}
      className="relative cursor-pointer w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[240px] max-w-[300px] shadow-2xl overflow-hidden rounded-xl text-white"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={skill}
          alt="Skills background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-transparent opacity-60" />
      </div>

      {/* Static label only */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-md">
        <span className="text-sm sm:text-base font-medium text-black">
          Skills
        </span>
      </div>
    </motion.div>
  );
};

export default TopRightBox;
