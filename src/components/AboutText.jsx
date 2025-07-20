import React from "react";
import { motion } from "framer-motion";

const AboutText = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="max-w-3xl mx-auto mt-10 text-base leading-relaxed text-gray-800 px-4"
    >
      <p className="mb-4">
        I'm <strong>Kaosisochukwu</strong>, a passionate product developer with
        a knack for turning ideas into practical solutions. My journey blends a
        strong focus on user authentication, full-stack development, and leading
        collaborative teams, always aiming to bridge creativity with real-world
        impact.
      </p>

      <p className="mb-4">
        My work thrives at the intersection of innovation and efficiency—whether
        it’s building smarter workflows, streamlining data tasks through web
        scraping, or bringing clarity to complex product challenges. Tackling
        technical puzzles, optimizing systems, and collaborating with diverse
        groups are my specialties.
      </p>

      <p className="mb-4">
        When I’m not coding or refining product concepts, you’ll find me
        exploring new tech, strategizing in games, or kicking a football. I
        approach each day with curiosity, strategic thinking, and a genuine
        drive to help others—whether by building useful tools, sharing
        knowledge, or creating experiences that make life run smoother.
      </p>

      <p>
        I believe in progress, teamwork, and making a difference. For me,
        technology isn’t just about code—it’s about fostering community,
        continuous learning, and delivering value that lasts.
      </p>
    </motion.div>
  );
};

export default AboutText;
