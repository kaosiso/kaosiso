import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import QuoteCarousel from "./Quotedata";

const BoxPart = ({ id, content, bgColor, isHidden, customClass }) => (
  <AnimatePresence>
    {!isHidden && (
      <motion.div
        key={id}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full h-full flex justify-center items-center text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold ${bgColor} ${customClass}`}
      >
        {content}
      </motion.div>
    )}
  </AnimatePresence>
);

const BottomRightBox = ({ mouseOffset }) => {
  const navigate = useNavigate();
  const [activeHiddenPartId, setActiveHiddenPartId] = useState(null);

  useEffect(() => {
    const sequence = [
      { id: "partI", hide: 1000, cycle: 1500 },
      { id: "partJ", hide: 2000, cycle: 2500 },
      { id: "partK", hide: 1000, cycle: 1500 },
      { id: "partL", hide: 2000, cycle: 2500 },
    ];
    let index = 0;
    let t1, t2;

    const animateNext = () => {
      const { id, hide, cycle } = sequence[index];
      setActiveHiddenPartId(id);
      t1 = setTimeout(() => setActiveHiddenPartId(null), hide);
      t2 = setTimeout(() => {
        index = (index + 1) % sequence.length;
        animateNext();
      }, cycle);
    };

    animateNext();
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const parts = [
    {
      id: "partI",
      content: (
        <motion.span
          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          FAQ
        </motion.span>
      ),
      bgColor: "bg-[#60A5FA]/10",
      customClass: "rounded-tl-xl", // top-left
    },
    {
      id: "partJ",
      content: (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-white-200 px-3 py-1 text-xs sm:text-sm"
          onClick={() => navigate("/contact")}
        >
          Contact
        </motion.button>
      ),
      bgColor: "bg-gray-700",
      customClass: "rounded-tr-xl", // top-right
    },
    {
      id: "partK",
      content: <QuoteCarousel />,
      bgColor: "bg-transparent",
      customClass: "", // bottom-left (no rounding to keep inner corner straight)
    },
    {
      id: "partL",
      content: (
        <a
          href="https://medium.com/@kaosisochukwum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[10px] text-white hover:underline"
          >
            View my latest blog posts
          </motion.div>
        </a>
      ),
      bgColor: "bg-cyan-800",
      customClass: "rounded-br-xl", // bottom-right
    },
  ];

  return (
    <motion.div
      animate={{ x: -mouseOffset.x, y: -mouseOffset.y }}
      className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[240px] max-w-[300px] bg-black/30 shadow-2xl grid grid-cols-2 grid-rows-2 gap-1 rounded-xl self-end"
    >
      {parts.map((part) => (
        <BoxPart
          key={part.id}
          {...part}
          isHidden={activeHiddenPartId === part.id}
        />
      ))}
    </motion.div>
  );
};

export default BottomRightBox;
