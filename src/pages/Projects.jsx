import React from 'react'
import '../styles/Projects.css'


export default function Projects() {

  const projects = [
    {id: 1,
    title: 'Website of recycling Company',
    desc: 'React + Tailwind + PHP form'
    },
    {id: 2,
      title: 'Website of cleaning Company',
      desc: 'HTML + SCSS + JS'
      },
      {id: 3,
        title: 'Movies App',
        desc: "React + Node.js form"
        },
        {id: 4,
          title: 'New projects',
          desc: 'React with Hooks'
          },
  ]
  function showBox(e) {
    const trigger = window.innerHeight/5 *4 ;
    const projects = document.querySelectorAll('.project');
    const nav = document.querySelector('.nav');
    projects.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < trigger) {
        box.classList.add("show");
        nav.style.position = "fixed"
        nav.style.witdh = "10vw"
      }
      else {
        box.classList.remove("show");

      }
    })
  };

  window.addEventListener('scroll', showBox)



return (
      <section className ="projects__section">
        <header className ="projects__header">My projects
        <div className ="ball__wrapper">
          <div className ="ball"></div>
        </div>
        <div className ="strip__wrapper">
          <div className ="strip"></div>
          <div className ="strip"></div>
          <div className ="strip"></div>
          </div>
        </header>
        
    <div className ="project__wrapper">
    {projects.map(project => <div className ="project" key = {project.id}>
      <h1 className ="project__title">{project.title}</h1>
      <p className ="project__text">{project.desc}</p></div>)}
    </div>
      </section>

  );
}
