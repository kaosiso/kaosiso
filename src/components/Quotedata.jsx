import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotesData = [
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
    bgColor: "bg-green-500",
    textColor: "text-white",
  },
  {
    quote: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
    bgColor: "bg-purple-500",
    textColor: "text-white",
  },
  {
    quote: "The best way to learn is to build.",
    author: "Kaosiso Inspired",
    bgColor: "bg-[blue-900]/10",
    textColor: "text-yellow-300",
  },
];

const QuoteCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { quote, author, bgColor, textColor } = quotesData[index];

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0.5, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`w-full h-full ${bgColor} rounded-xl p-2 flex flex-col justify-center items-center text-center ${textColor}`}
    >
      <p className="text-[7px] sm:text-xs mt-1 font-semibold">"{quote}"</p>
      <p className="text-[9px] sm:text-xs mt-1 font-semibold">— {author}</p>
    </motion.div>
  );
};

export default QuoteCarousel;
