import React from "react";
import logo from "../assets/logo.png"

const aboutItems = [
    {
        label: "Project Completed",
        number: 3
    },
    {
        label: "Years of Experience",
        number: 2
    }
]

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up ">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[80ch]" >
          2 years of experience with the MERN stack and a focus on user-centric product development.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
            {
                aboutItems.map(({label, number}, key)=>(
                    <div key={key}>
                       <div className="flex items-center md:mb-2">
                        <span className="text-2xl font-semibold md:text-4xl ">{number}</span>
                        <span className="text-sky-400 font-semibold" >+</span>
                       </div>
                       <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                ))
            }
            <img src={logo} alt="logo" className="h-8 ml-auto md:w-[100px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
