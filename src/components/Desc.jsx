import React from 'react'
import {Scroll} from  '@react-three/drei'
import '../styles/Desc.css'
import Section from './Section'


export default function Desc() {
  return (
    <Scroll html>
        <Section>
        <h1 className ="desc__title">About me</h1>
        <p className ="desc__text">I have been interested in programming for 2 years. Previously, I created websites using cms wordpress. Programming is my passion and i think I found my place :) I am highly motivated, I search for information quickly and I can work  in a team and independently, both.</p>
        <div className ="circle"></div>
        </Section>
        <Section>
        <h1 className ="desc__title">My projects</h1>
        <p className ="desc__text">
          <a href = "https://bigbag.opole.pl">Website of recycling Company</a><br></br>
          <a href = "https://kamar.opole.pl">Website of cleaning Company</a><br></br>
          <a href = "https://bigbag.opole.pl">First version of my portfolio</a><br></br>
          <a href = "https://search-for-moviesss.netlify.app/">Movies App</a>
        </p>
        <div className ="circle"></div>
        </Section>
        <Section>
        <h1 className ="desc__title">Contact me</h1>
        <p className ="desc__text">slodzinska.magdalena@gmail.com</p>
        <a href ="tel:+48535828465">Zadzwoń do mnie</a>
        <div className ="circle"></div>
        </Section>
        </Scroll>

  )
}

