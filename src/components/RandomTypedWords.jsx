import React, { useEffect, useState } from "react";

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

// Generate a random position on screen
const getRandomPosition = () => {
  const top = Math.floor(Math.random() * 80) + 10;
  const left = Math.floor(Math.random() * 80) + 10;
  return {
    top: `${top}%`,
    left: `${left}%`,
  };
};

const RandomTypedWord = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [position, setPosition] = useState(getRandomPosition());

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (!currentWord) return; // guard

    setDisplayedText(""); // reset before typing
    setPosition(getRandomPosition());

    let i = 0;

    const typeNextLetter = () => {
      setDisplayedText((prev) => prev + currentWord[i]);
      i++;
      if (i < currentWord.length) {
        setTimeout(typeNextLetter, 100);
      } else {
        // Word fully typed — wait 3s then move to next word
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 3000);
      }
    };

    setTimeout(typeNextLetter, 100); // start typing after short delay
  }, [wordIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {displayedText && (
        <span
          className="absolute text-gray-600 text-3xl font-[Great_Vibes] pointer-events-none"
          style={{ top: position.top, left: position.left }}
        >
          {displayedText}
        </span>
      )}
    </div>
  );
};

export default RandomTypedWord;
