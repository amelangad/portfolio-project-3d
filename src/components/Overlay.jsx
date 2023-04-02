import React from 'react'
import {useState} from 'react'
import '../styles/Overlay.css'

export default function Overlay() {
    const [show, setShow] = useState(true);
  return (
    <div className ={`overlay ${show? 'visible' : 'hidden' }`}
    onLoad = {() => setShow(show)}
    onAnimationEnd = {() => setShow(false)}>
      <div className ="overlay__content">
<h1 className ="overlay__title">Hej, jestem Magda</h1>
<h3 className ="overlay__desc">i szukam pracy jako junior frontend developer</h3>
</div>
    </div>
  )
}
