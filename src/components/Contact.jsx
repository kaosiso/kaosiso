import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch ">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up ">Contact me</h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[40ch]">
            Feel free to reach out — I’m always open to new opportunities,
            collaborations, or just a good chat!
          </p>
          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a
                href={href}
                key={key}
                target="_blank"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 
                  rounded-lg transition-[background-colour, color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up "
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form
          action="https://getform.io/f/bvrwyxqb"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Your Name"
                className="text-field reveal-up "
              />
            </div>
            <div className="mb-4 ">
              <label htmlFor="email" className="label reveal-up">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="@example.com"
                className="text-field "
              />
            </div>
            <div className="mb-4 md:w-[205%] ">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="text-field resize-y min-h-32  max-h-80 reveal-up"
                placeholder="write your message here..."
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full   justify-center items-center reveal-up"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
