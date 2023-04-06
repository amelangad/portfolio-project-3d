import React from 'react'
import { Scroll } from '@react-three/drei'
import '../styles/Desc.css'
import Section from './Section'


export default function Desc() {
  return (
    <Scroll html>
      <Section>
        <h1 className="desc__title">About me</h1>
        <p className="desc__text">I have been interested in programming for 2 years. Previously, I created websites using cms wordpress. Programming is my passion, I love it and want to work with it everyday. </p>
        <div className="circle"></div>
      </Section>
      <Section>
        <h1 className="desc__title">Technical skills</h1>
        <p className="desc__text">
          I know Vanills JS and React (16+, with Hooks), prefer working with Tailwind but can use CSS, SCSS and BEM Concept.
        <br></br> I know base of Three.js (with JS and with Fiber and Drei with React) and a little of Node.js (and Express).<br></br>
        I using Visual Studio Code, npm and know git command. My English is B2 level and I work on it, but I understand most of the documentation and all of videos.
        </p>
        <div className="circle"></div>
      </Section>
      <Section>
        <h1 className="desc__title">Soft Skills</h1>
      <p className ="desc__text">I'm friendly person, can working with myself and in the group, both. Im search for information quickly and know how to use it. I also have  an experience working with clients. </p>
        <div className="circle"></div>
      </Section>
    </Scroll>

  )
}

