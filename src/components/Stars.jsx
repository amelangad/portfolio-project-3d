import React, { useRef, useState } from 'react'
import { Points, PointMaterial} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as random from 'maath/random/dist/maath-random.esm'


const Stars = (props) => {
    const pointsRef = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 5 }))
    useFrame((state, delta) => {
        pointsRef.current.rotation.x -= delta / 25
        pointsRef.current.rotation.y -= delta / 20
    })
    return (
      <group  rotation={[5, 5, Math.PI]}>
        <Points ref={pointsRef} radius= {2.5} positions={sphere} frustumCulled={false} stride={3}  {...props}>
          <PointMaterial  color="#e6e3b3" size={1.5} sizeAttenuation={false} depthWrite={false}/>
        </Points>
      </group>
    )}
export default Stars;
