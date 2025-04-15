import React from "react";
import SkillCard from "./SkillCard";

// Import all image assets
import css from "./assets/css3.svg";
import javascript from "./assets/javascript.svg";
import nodejs from "./assets/nodejs.svg";
import expressjs from "./assets/expressjs.svg";
import mongodb from "./assets/mongodb.svg";
import react from "./assets/react.svg";
import tailwindcss from "./assets/tailwindcss.svg";
import figma from "./assets/figma.svg";

const skillItem = [
  {
    imgSrc: css,
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: javascript,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: nodejs,
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: expressjs,
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: mongodb,
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: react,
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: tailwindcss,
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: figma,
    label: "Figma",
    desc: "Design tool",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">My Tech Stack</h2>
        <p className="w-full text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          My favourite tools i use for development
        </p>
        <div className="grid gap-3  skill-grid">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
