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
        I'm <strong>Kaosisochukwu</strong>, a passionate
        software developer with a knack for turning ideas into working products.
        I’m currently studying Computer Science and spend most of my time
        building full-stack applications using <strong>React</strong>,{" "}
        <strong>Node.js</strong>, and <strong>Express</strong>. I enjoy making
        things that solve real problems — especially if they involve automation
        or good design.
      </p>

      <p className="mb-4">
        When I’m not coding, I’m probably on the pitch playing football — or on
        the couch playing <strong>FIFA</strong> and pretending I’m better than I
        really am. Either way, the passion is real. I play like I code: with
        intensity, some strategy, and the occasional bug (usually in the form of
        a missed tackle).
      </p>

      <p>
        I believe in progress, community, and building things that make life a
        little smoother. Whether it’s a tool, a blog post, or an event — if it
        helps someone, I’m all in.
      </p>
    </motion.div>
  );
};

export default AboutText;
