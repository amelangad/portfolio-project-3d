import React, { useLayoutEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from 'gsap';
import { useScroll, AccumulativeShadows, Environment } from '@react-three/drei'

export const FLOOR_HEIGHT = 1;
export const NB_FLOORS = 3;


function Diamond(props) {
  const ref = useRef();
  const tl = useRef();
  const [color, setColor] = useState(false);
  const scroll = useScroll()
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.008));
  useFrame(() => { tl.current.seek(scroll.offset * tl.current.duration()) })

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(ref.current.position,
      {
        duration: 3,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1)
      }, 0);
  }, [])

  return (
      <mesh
     castShadow
    {...props}
    ref={ref}
    position={[2, 1, 1]}
   scale ={.8}
    onPointerOver={(event) => setColor(true)}
    onPointerOut={(event) =>setColor(false)}>
    <icosahedronGeometry args={[1,0]}/>
    <meshStandardMaterial
    color="red"/>
  </mesh>
  );
}

export default Diamond;