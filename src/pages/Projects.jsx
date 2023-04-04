import React from 'react'
import '../styles/Projects.css'


  export default function Projects() {
  const statusBar = () => {
    const bar = document.querySelector('.bar');
    const currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
    bar.style.width = currentScroll + "%";
  }
  
  window.addEventListener('scroll', statusBar);

  return (
    <>
    <div className ="bar"></div>
    <div className ="jeden">LLALALALA</div>
<div className ="dwa"></div>
   </>
  )
}
