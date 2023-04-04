import React from 'react'
import Overlay from '../components/Overlay'
import { Canvas} from "@react-three/fiber";
import Sphere from '../components/Sphere';
import {OrbitControls} from '@react-three/drei'
import '../styles/Home.css'

export default function Home() {
  return (
    <section className ="home">
<Canvas className ="canvas__home" camera={{ position: [0, 0, 1] }}
        resized= { false}>
         <OrbitControls
         enableZoom = {false}/>
         <Sphere/>
        </Canvas>
    <Overlay/>
   </section>
  )
}
