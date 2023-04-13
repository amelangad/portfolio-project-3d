import React from 'react'
import '../styles/Contact.css'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";


export default function Contact() {
  return (
    <div className ="contact__background">
  <div className ="contact__wrapper">
    <h1 className ="contact__title">Contact me</h1>
    <div className ="contact__links">
    <a href="mailto:slodzinska.magdalena@gmail.com" className ="contact__email"><FaEnvelope/></a>
    <a href="tel:+48535828465" className ="contact__phone"><FaPhoneAlt/></a>
    </div>
    </div>
    </div>
  )
}
