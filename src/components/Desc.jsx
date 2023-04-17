import React from 'react'
import { Scroll } from '@react-three/drei'
import '../styles/Desc.css'
import Section from './Section'


export default function Desc() {
  return (
    <Scroll html>
      <Section>
        <h1 className="desc__title">About me</h1>
        <p className="desc__text">I have been interested in programming for 2 years. Previously, I created websites using cms wordpress. Programming is my passion and I would like to work with it every day. </p>
        <div className="circle"></div>
      </Section>
      <Section>
        <h1 className="desc__title">Technical skills</h1>
        <p className="desc__text">
        I know Vanills JS and React, prefer working with SCSS, but can use CSS or Tailwind. I know BEM, base of Three.js and a little of Node.js (and Express), also. 
        I'm using Visual Studio Code, npm and know git commands. My English is B2 level, but I understand most of the documentation.
        </p>
        <div className="circle"></div>
      </Section>
      <Section>
        <h1 className="desc__title">Soft Skills</h1>
      <p className ="desc__text">I'm friendly person, can working with myself and in the group. I search for information quickly and know how to use it. I also have  an experience working with clients. </p>
        <div className="circle"></div>
      </Section>
    </Scroll>

  )
}

