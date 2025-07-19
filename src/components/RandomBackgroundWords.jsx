import React, { useEffect, useState } from "react";

// Word list
const words = [
  "Creativity",
  "React",
  "Node.js",
  "Inspire",
  "Design",
  "Passion",
  "Frontend",
  "Backend",
  "Developer",
  "Animation",
  "Dream",
  "Code",
  "Build",
  "Deploy",
  "Explore",
];

// Style generator
const getRandomStyle = () => {
  const top = Math.floor(Math.random() * 90) + 2;
  const left = Math.floor(Math.random() * 90) + 2;
  const fontSize = Math.floor(Math.random() * 24) + 24;
  const duration = Math.random() * 6 + 4;

  return {
    top: `${top}%`,
    left: `${left}%`,
    fontSize: `${fontSize}px`,
    animationDuration: `${duration}s`,
    opacity: 0.2 + Math.random() * 0.4,
    fontFamily: "'Great Vibes', cursive",
  };
};

const RandomBackgroundWords = () => {
  const [floatingWords, setFloatingWords] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newWord = {
        id: Date.now(),
        text: words[Math.floor(Math.random() * words.length)],
        style: getRandomStyle(),
      };
      setFloatingWords((prev) => [...prev.slice(-30), newWord]);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {floatingWords.map((word) => (
        <span
          key={word.id}
          style={word.style}
          className="absolute animate-fadeOutSlow select-none whitespace-nowrap text-gray-600"
        >
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default RandomBackgroundWords;
