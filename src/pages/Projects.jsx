import React from 'react'
import '../styles/Projects.css'
import bigbag from '../assets/bigbag.jpg'
import kamar from '../assets/kamar.jpg'
import movies from '../assets/movies.png'
import beauty from '../assets/beauty.jpg'


export default function Projects() {

  const projects = [
    {
      id: 1,
      title: 'Beauty salon website',
      img: beauty,
      desc: 'React',
      href: "https://beauty-salooon.netlify.app/",
    },

    {
      id: 2,
      title: 'Website of cleaning Company',
      img: kamar,
      desc: 'HTML + SCSS + JS',
      href: "https://kamar.opole.pl",
    },
    {
      id: 3,
      title: 'Movies App',
      img: movies,
      desc: "React + Node.js form",
      href: "https://search-for-moviesss.netlify.app/",
    },
    {
      id: 4,
      title: 'Website of recycling Company',
      img: bigbag,
      desc: 'React + Tailwind + PHP form',
      href: "https://bigbag.opole.pl",
    },
  ]
  function showBox(e) {
    const trigger = window.innerHeight / 5 * 4;
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
    <section className="projects__section">
      <header className="projects__header">My projects
        <div className="ball__wrapper">
          <div className="ball"></div>
        </div>
        <div className="strip__wrapper">
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
        </div>
      </header>

      <div className="project__wrapper">
        {projects.map(project => <div className="project" key={project.id}>
        <h1 className="project__title">{project.title}</h1>
          <div className="project__image"><a className="project__link" href ={project.href}><img className="project__img" src={project.img}/></a></div>
          <p className="project__text">{project.desc}</p></div>)}
      </div>
    </section>

  );
}
