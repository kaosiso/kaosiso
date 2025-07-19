import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scroll = (scrollTop / windowHeight) * 100;
    setScrollPercent(scroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-transparent">
      <div
        className="h-full bg-indigo-500 transition-all duration-200"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
