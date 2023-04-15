import React from 'react'
import Overlay from '../components/Overlay'
import { Canvas } from "@react-three/fiber";
import Stars from '../components/Stars';
import { ScrollControls } from '@react-three/drei'
import '../styles/Home.css'
import Sphere from '../components/Sphere'
import Desc from '../components/Desc'

export default function Home() {


  return (
<section className="home">
        <Canvas className ="canvas__sphere" shadows camera={{ position: [0, 1.5, 8], fov: 30 }}
        resize= {{ scroll: false}}>
        <pointLight position={[10, 25, 0]} />
         <ambientLight intensity={.1}/>
         <ScrollControls pages ={3} damping ={0.25}>
         <Stars />
          <Sphere/>
          <Desc/>
        </ScrollControls>
        </Canvas>
   <Overlay />
   </section>

  )
}
