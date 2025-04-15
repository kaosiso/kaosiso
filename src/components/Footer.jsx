import React from "react";
import logo from "../assets/logo.png"
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/kaosiso",
  },
  {
    label: "Twitter X",
    href: "https://x.com/KokoMarx",
  },
 {
  label: "Whatsapp",
  href: "https://wa.me/2348145522959"
 }
];

const Footer = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="mb-10">
            <h2 className="headline-2 mb-8 lg:max-w-[12ch] reveal-up">Let's collaborate</h2>
            <ButtonPrimary
              href="mailto:kaosisochukwum@gmail.com"
              label="Start Project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>
         <div className="grid grid-cols-2 gap-4 lg:pl-20  " >
         <div>
            <p className="mb-2 reveal-up">Sitemap</p>
            <ul>
              {sitemap.map(({ label, href }, key) => (
                <li key={key}>
                  <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-2">Socials</p>
            <ul>
              {socials.map(({ label, href }, key) => (
                <li key={key}>
                  <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


         </div>
          
        </div>
        
        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/"
             className="logo reveal-up"
             >
                <img src={logo} className="w-30 h-10"  alt="logo" />
             </a>
             <p className="text-zinc-500 text-sm reveal-up">@
               copy 2025 <span className="text-zinc-200" >kaosisochukwu</span>
             </p>
        </div>
       
      </div>
    </section>
  );
};

export default Footer;
