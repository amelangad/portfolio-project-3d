import React from 'react'

export default function Section (props) {

    const cardMove = (e) => {
      const card = document.querySelectorAll('.desc__box');
      let xMove = (window.innerWidth/2 - e.pageX)/25;
      let yMove = (window.innerHeight/2 -e.pageY)/25;
      card.forEach(item => item.style.transform = `rotateX(${xMove}deg)`, `rotateY(${yMove}deg)`);
    };
  
    const cardSet = () => {
      const card = document.querySelector('.desc__box');
      card.style.transform = `rotateX(0deg)`, `rotateY(0deg)`
    }
  return (
  <section className ="desc__section">
    <div className ="desc__wrapper"
    onMouseMove = {cardMove}
    onMouseLeave = {cardSet}>
  <div className ="desc__box">
      {props.children}
  </div></div>
      </section>
  );
  };