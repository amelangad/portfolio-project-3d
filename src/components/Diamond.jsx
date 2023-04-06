import React, { useLayoutEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import gsap from 'gsap';
import { useScroll } from '@react-three/drei'
import { MeshPhongMaterial } from "three";

export const FLOOR_HEIGHT = 1;
export const NB_FLOORS = 3;

function Diamond(props) {
  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll()

  useFrame(() => (ref.current.rotation.x += 0.8, ref.current.rotation.y += 0.05));
  useFrame(() => { tl.current.seek(scroll.offset * tl.current.duration()) })

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(ref.current.position,
      {
        duration: 3,
        y: -FLOOR_HEIGHT * (NB_FLOORS  -2)
      }, 0);
  }, [])

  return (
    <mesh
      castShadow
      {...props}
      ref={ref}
      position={[2, 1, 1]}
      scale={.3}>
      <sphereGeometry args={[2]} />
      <meshPhysicalMaterial
        color={"#e6e3b3"} />
    </mesh>
  );
}

export default Diamond;