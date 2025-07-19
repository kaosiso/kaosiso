import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AboutText from "../components/AboutText";
import kaosiso from "../assets/kaosiso.jpg";

const TopLeftBox = ({ mouseOffset, navigate }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const scrollStep = () => {
      scrollAmount += 0.3;
      if (scrollAmount >= scrollContainer.scrollHeight / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollTop = scrollAmount;
      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <motion.div
      animate={{ x: mouseOffset.x, y: mouseOffset.y }}
      className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[240px] 
                 max-w-[300px] relative text-white shadow-2xl overflow-hidden 
                 rounded-xl cursor-pointer"
      onClick={() => navigate("/about")}
    >
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={kaosiso}
          alt="Kaosiso"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-[#b9bbc0] to-[#5f646d] opacity-60" />
      </div>

      {/* Scrolling AboutText content */}
      <div
        ref={scrollRef}
        className="absolute inset-0 overflow-y-scroll no-scrollbar z-10 text-[10px] sm:text-xs leading-snug"
      >
        <div>
          <AboutText />
          <AboutText />
        </div>
      </div>

      {/* Single-line "About Me" at bottom center */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 backdrop-blur-sm bg-white/10 px-3 py-1 rounded-md">
        <span className="text-sm sm:text-base font-medium text-black">
          About
        </span>
      </div>
    </motion.div>
  );
};

export default TopLeftBox;
