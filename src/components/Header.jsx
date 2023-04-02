import React from 'react'
import '../styles/Header.css'
import { Canvas} from "@react-three/fiber";
import Diamond from "./Diamond";
import Nav from './Nav'
import Overlay from './Overlay'
import {OrbitControls, Environment, Center, ScrollControls} from '@react-three/drei'
import Desc from './Desc'

export default function Header() {
  
return (
      <section className='header'>
        <Canvas shadows camera={{ position: [0, 1.5, 8], fov: 30 }}
        resize= {{ scroll: false}}>
        <pointLight position={[10, 25, 0]} />
         <ambientLight intensity={.1}/>
         <ScrollControls pages ={3} damping ={0.25}>
          <Diamond/>
          <Desc/>
        </ScrollControls>
        </Canvas>
        <Overlay/>
      </section>
  );
}
