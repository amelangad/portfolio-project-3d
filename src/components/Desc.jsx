import React from 'react'
import {Scroll} from  '@react-three/drei'
import '../styles/Desc.css'

const  Section = (props) => {


return (
<section className ="desc__section">
<div className ="desc__wrapper">
    {props.children}
</div>
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
        <h1>Hi</h1>
        </Section>
        <Section>
        <h1>Hi</h1>
        </Section>
        
        </Scroll>
  )
}

