import React, { useState, useEffect } from "react";

const useTypewriter = (text, speed = 50, active) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayedText("");
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, active]);

  return displayedText;
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Typing effect only active on description when hovered
  const typedDescription = useTypewriter(
    project.description || "",
    40,
    isHovered
  );

  return (
    <div
      className="relative max-w-sm rounded-lg overflow-hidden shadow-md border border-gray-300 bg-transparent cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: "300px" }}
    >
      {/* Show "Show Details" normally when NOT hovered (no typing animation) */}
      {!isHovered && (
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-gray-600 text-lg font-medium">
            Show Details
          </span>
        </div>
      )}

      {/* Show project details on hover with typing description */}
      {isHovered && (
        <>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain rounded-t-lg"
            />
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p
              className="text-gray-700 text-sm mb-4"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {typedDescription}
              <span className="blink-caret">|</span>
            </p>
            <div className="flex justify-between space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-sm text-gray-200 px-2 py-1 border border-black rounded-2xl hover:bg-gray-200 hover:text-gray-800"
                >
                  Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-sm bg-gray-300 px-2 py-1 border border-black rounded-2xl hover:bg-gray-800 hover:text-gray-200"
                >
                   Demo
                </a>
              )}
            </div>
          </div>
        </>
      )}

      <style>{`
        .blink-caret {
          font-weight: 100;
          animation: blink 1s step-end infinite;
          color: #999;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
