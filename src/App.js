import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { ResizeObserver as Polyfill } from '@juggle/resize-observer'
window.ResizeObserver = window.ResizeObserver || Polyfill

import { Box } from './components/Box'
import { Skybox } from './components/Skybox'
import { Loading } from './components/Loading'
import { Terrain } from 'three-landscape'

export default function App() {
  const root = '/maps/CustomTerrainShape'
  return (
    <Canvas camera={{ fov: 50, far: 6000 }}>
      <ambientLight intensity={0.5} />

      <OrbitControls maxDistance={2000} />

      <Suspense fallback={<Loading />}>
        <Skybox fog={false} />
        <Environment preset="park" rotation={[0, Math.PI / 2, 0]} />
        <fog attach="fog" args={['#74bbd0', 0, 2000]} />
      </Suspense>
    </Canvas>
  )
}
