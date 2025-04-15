import React from "react";
import avatar from "../assets/profilebg.png";
import banner from "../assets/profilebg.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { ButtonPrimary, ButtonOutline } from "./Button";
import TextAnimation from "./TextAnimation";

const socialLinks = [
  {
    href: "https://github.com/kaosiso",
    icon: <FaGithub size={25} />,
    alt: "GitHub",
  },

  {
    href: "https://x.com/KokoMarx",
    icon: <FaXTwitter size={25} />,
    alt: "Twitter X",
  },
  {
    href: "https://wa.me/2348145522959",
    icon: <FaWhatsapp size={25} fill="green" />,
    alt: "Whatsapp",
  },
];

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div
        className="container lg:grid lg:grid-cols-2 items-center lg:gap-10
          "
      >
        <div>
          <div className="flex items-center gap-3 ">
            <figure className="img-box w-9 h-9 rounded-lg ">
              <img
                src={avatar}
                width={40}
                height={40}
                alt="kaosiso portrait"
                className="img-cover"
              />
            </figure>
            <div
              className="flex items-center gap-1.5 text-zinc-400 text-sm 
                    tracking-wide"
            >
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span
                  className="absolute inset-0 w-2 h-2 rounded-full 
                        bg-emerald-400 animate-ping"
                ></span>
              </span>
              Available
            </div>
          </div>
          <TextAnimation/>
       
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />

            <div className="flex items-center gap-2 mt-auto  ">
              {socialLinks.map(({ href, icon }, key) => (
                <a
                  href={href}
                  key={key}
                  target="_blank"
                  className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 
                  rounded-lg transition-[background-colour, color] hover:bg-sky-300 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up "
                >
                  {icon}
                </a>
              ))}
            </div>

          </div>
        </div>

        <div className="hidden lg:block">
          <figure
            className="w-full max-w-[480px] ml-auto bg-gradient-to-t
               from-zinc-400 via-25% via-zinc-400/40 to-65% rounded-[60px]
                 overflow-hidden"
          >
            <img
              src={banner}
              className="w-full"
              width={656}
              height={800}
              alt="kaosiso"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
