import React from 'react'
import {Scroll} from  '@react-three/drei'
import '../styles/Desc.css'

const  Section = (props) => {
  
  const cardMove = (e) => {
    const card = document.querySelectorAll('.desc__box');
    let xMove = (window.innerWidth/2 - e.pageX)/25;
    let yMove = (window.innerHeight/2 -e.pageY)/25;
    console.log(xMove);
      console.log(card);
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

export default function Desc() {

  return (
    <Scroll html>
        <Section>
        <h1 className ="desc__title">About me</h1>
        <p className ="desc__text">I have been interested in programming for 2 years. Previously, I created websites using cms wordpress. Programming is my passion and I would like to make it a way of life. I would like to give myself a chance to develop at a faster pace than when learning on my own, so I created this website along with my other projects. Now I am learning advanced React and TypeScript. I am highly motivated, I search for information quickly and I can work both in a team and independently.</p>
        <div className ="circle"></div>
        </Section>
        <Section>
        <h1 className ="desc__title">About me</h1>
        <p className ="desc__text">I have been interested in programming for 2 years. Previously, I created websites using cms wordpress. Programming is my passion and I would like to make it a way of life. I would like to give myself a chance to develop at a faster pace than when learning on my own, so I created this website along with my other projects. Now I am learning advanced React and TypeScript. I am highly motivated, I search for information quickly and I can work both in a team and independently.</p>
        <div className ="circle"></div>
        </Section>
        <Section>
        <h1 className ="desc__title">About me</h1>
        <p className ="desc__text">I have been interested in programming for 2 years. Previously, I created websites using cms wordpress. Programming is my passion and I would like to make it a way of life. I would like to give myself a chance to develop at a faster pace than when learning on my own, so I created this website along with my other projects. Now I am learning advanced React and TypeScript. I am highly motivated, I search for information quickly and I can work both in a team and independently.</p>
        <div className ="circle"></div>
        </Section>
        </Scroll>

  )
}

