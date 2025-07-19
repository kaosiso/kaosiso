import React, { useEffect } from "react";

const ClickEffect = () => {
  useEffect(() => {
    const handleClick = (e) => {
      const circle = document.createElement("div");
      circle.className = "click-circle";
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
      document.body.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default ClickEffect;
