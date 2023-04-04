import React, { useRef, useState } from 'react'
import { Points, PointMaterial} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as random from 'maath/random/dist/maath-random.esm'


const Sphere = (props) => {
    const pointsRef = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(10000), { radius: 2 }))
    useFrame((state, delta) => {
        pointsRef.current.rotation.x -= delta / 20
        pointsRef.current.rotation.y -= delta / 15
    })
    return (
      <group rotation={[1, 5, Math.PI]}  >
        <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial  color="blue" size={0.01} sizeAttenuation={false} depthWrite={false} />
        </Points>
      </group>
    )}
export default Sphere;
