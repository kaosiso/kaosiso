import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Images
import image2 from "../assets/image2.png";
import kaosiso from "../assets/kaosiso.jpg";

// Boxes
import TopLeftBox from "../components/TopLeftBox";
import TopRightBox from "../components/TopRightBox";
import BottomLeftBox from "../components/bottomLeftBox";
import BottomRightBox from "../components/bottomRightBox";

const ImageCarousel = () => {
  const images = [kaosiso, image2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      key={index}
      src={images[index]}
      className="w-full h-full object-cover shadow-2xl bg-transparent rounded-xl"
      alt="carousel"
    />
  );
};

const MainPage = () => {
  const navigate = useNavigate();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [showBoxes, setShowBoxes] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMouseOffset({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBoxes(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans scrollbar-none min-h-screen w-full overflow-hidden relative flex flex-col justify-between">
      {/* Image Carousel for mobile & tablet */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="lg:hidden px-4 pt-4 pb-1 z-30 relative flex justify-center"
      >
        <div className="w-full h-[420px] sm:w-[90%] md:w-[70%] md:h-[500px] rounded-xl overflow-hidden">
          <ImageCarousel />
        </div>
      </motion.div>

      {/* Image Carousel for Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:flex absolute inset-0 justify-center items-center z-10 pointer-events-none"
      >
        <div className="w-[60vw] h-[60vh] max-w-[450px] min-w-[300px]">
          <ImageCarousel />
        </div>
      </motion.div>

      {/* Interactive Boxes */}
      {showBoxes && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative z-20 grid grid-cols-2 gap-4 p-4 place-items-center pt-4"
        >
          <TopLeftBox mouseOffset={mouseOffset} navigate={navigate} />
          <TopRightBox mouseOffset={mouseOffset} navigate={navigate} />
          <BottomLeftBox mouseOffset={mouseOffset} navigate={navigate} />
          <BottomRightBox mouseOffset={mouseOffset} navigate={navigate} />
        </motion.div>
      )}

      {/* Scrolling Full Stack Developer Banner */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
        className="w-full py-8 bg-transparent z-40 relative"
      >
        <p className="text-5xl sm:text-6xl font-extrabold text-gray-700 text-center tracking-wider whitespace-nowrap uppercase">
          Full Stack Developer •
        </p>
      </motion.div>
    </div>
  );
};

export default MainPage;
