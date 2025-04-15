import React from 'react'
import ProjectCard from './ProjectCard';

import ecommerce from './assets/ecommerce.png';
import chatApp from './assets/project-2.png';

const works = [
    {
      imgSrc: ecommerce,
      title: 'Full stack eCommerce App',
      tags: ['API', 'MERN', 'Development'],
      projectLink: 'https://ecommerce-frontend-delta-nine-91.vercel.app/',
      codeLink:"https://github.com/kaosiso/ECOMMERCE-FULL-STACK.git"
    },
    {
      imgSrc: chatApp,
      title: 'Full Stack Chat App',
      tags: ['API', 'MERN', "socket", "Daisy UI"],
      projectLink: 'https://chat-app-ws3f.onrender.com/',
      codeLink:"https://github.com/kaosiso/chat-app.git"
    },
    
  ];


const Work = () => {
  return (
    <section id='work' className='section' >
       <div className="container">
        <h2 className="headline-2 mb-8 reveal-up" >
            Portfolio
            <hr className='w-[45%] bg-zinc-100'/>
        </h2>
        <div className="grid work-grid gap-x-4 gap-y-5  ">
            {works.map(({imgSrc, title, tags, projectLink, codeLink}, key)=>(
                <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} codeLink={codeLink} classes="reveal-up" />
            ))}
        </div>
       </div>
    </section>
  )
}

export default Work
