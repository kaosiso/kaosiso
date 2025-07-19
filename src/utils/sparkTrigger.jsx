import React from "react";
import { Link } from "react-router-dom";

const SparkLink = ({ to, children, className, ...props }) => {
  const handleSparkEffect = (event) => {
    // Note: We are NOT preventing default here, as we want the Link to navigate.
    // If you wanted to prevent navigation and only show sparks, you'd add event.preventDefault();

    const numParticles = 7;
    const sparkColors = [
      "bg-yellow-300",
      "bg-orange-400",
      "bg-white",
      "bg-red-300",
    ];

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");

      // Apply Tailwind classes
      particle.className = `
        absolute rounded-full pointer-events-none z-50 animate-spark
        ${sparkColors[Math.floor(Math.random() * sparkColors.length)]}
      `;

      const size = Math.random() * 8 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Position the particle at the click coordinates relative to the viewport
      particle.style.left = `${event.clientX}px`;
      particle.style.top = `${event.clientY}px`;

      document.body.appendChild(particle);

      // Remove the particle after its animation
      particle.addEventListener("animationend", () => {
        particle.remove();
      });
    }
  };

  return (
    <Link to={to} className={className} onClick={handleSparkEffect} {...props}>
      {children}
    </Link>
  );
};

export default SparkLink;
