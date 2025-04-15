import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <div    className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5
    mb-8 lg:mb-10">
      <TypeAnimation
        sequence={[
          "I'm A Software Developer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "I Am A Frontend Developer",
          1000,
          "I Am A Backend Developer",
          1000,
          "I Am A UI/UX Designer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        // style={{ fontSize: "1em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TextAnimation;
