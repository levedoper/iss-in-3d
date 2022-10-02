import * as THREE from 'three'
import { Suspense, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll, useGLTF, Stars } from '@react-three/drei'

export default function ISS({ ...props }) {

   const { scene } = useGLTF('/resources/earth.glb')
   useFrame((state, delta) => {

      state.camera.lookAt(0, 0, 0)
   })
   return <primitive object={scene} {...props} />
}

useGLTF.preload('/resources/ISS.glb')