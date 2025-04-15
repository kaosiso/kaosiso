import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  codeLink,
  projectLink,
  classes,
}) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors  " +
        classes
      }
    >
      <figure className="">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4 ">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap gap-2 items-center">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 
               grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
     
        <div className="flex flex-row gap-4">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-11 rounded-lg bg-sky-400 px-2 py-2 
               text-zinc-950 shrink-0 flex items-center justify-center font-medium"
          >
            CODE
          </a>

          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-sky-400 px-2 py-2 
               text-zinc-950 shrink-0 flex items-center justify-center"
          >
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
