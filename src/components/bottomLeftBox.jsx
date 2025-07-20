import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import sampleVideo1 from "../assets/video1.mp4";
import sampleVideo2 from "../assets/video2.mp4";

const BottomLeftBox = ({ mouseOffset, navigate }) => {
  const videos = [sampleVideo1, sampleVideo2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      onClick={() => navigate("/projects")}
      animate={{ x: mouseOffset.x, y: -mouseOffset.y }}
      className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[240px] 
                 max-w-[300px] shadow-2xl overflow-hidden rounded-xl self-end cursor-pointer"
    >
      {/* Background video */}
      <video
        key={index}
        src={videos[index]}
        className="w-full h-full object-cover rounded-xl"
        autoPlay
        muted
        loop
      />

      {/* Overlay text at bottom center */}
      <div className="boxtitle absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/10 px-3 py-1 rounded-md">
        <motion.span
          className="text-black text-sm sm:text-base font-medium"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.span>
      </div>
    </motion.div>
  );
};

export default BottomLeftBox;


// from-[#FAFAFA] via-[#b9bbc0] to-[#5f646d]