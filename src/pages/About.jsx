import React from 'react'
import { Canvas} from "@react-three/fiber";
import Diamond from "../components/Diamond";
import {ScrollControls} from '@react-three/drei'
import Desc from '../components/Desc'
import '../styles/About.css'


export default function About() {
return (
      <section className='about'>
        <Canvas shadows camera={{ position: [0, 1.5, 8], fov: 30 }}
        resize= {{ scroll: false}}>
        <pointLight position={[10, 25, 0]} />
         <ambientLight intensity={.1}/>
         <ScrollControls pages ={3} damping ={0.25}>
          <Diamond/>
          <Desc/>
        </ScrollControls>
        </Canvas>
      </section>

  );
}
