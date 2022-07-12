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

import Model from './Model';

//https://s.studiobinder.com/wp-content/uploads/2019/11/360-Video-Featured-StudioBinder-Compressed.jpg
//https://ictjournal.itri.org.tw/WebTools/Thumbnail.ashx?Siteid=654246032665636316&MmmID=654304432061644411&fd=Messagess_Pics&Pname=shutterstock_580893679.jpg&nw=600

export default function App() {

  const [Url, setUrl] = React.useState('/DayInTheClouds4k.png')

  function gotoLobby() {
    setUrl("/DayInTheClouds4k.png")
  }
  function gotoCloud() {
    setUrl("/sky.jpg")
  }
  function gotoTaipower() {
    setUrl("/tp.jpg")
  }


  const root = '/maps/CustomTerrainShape'
  return (
    <>
      <button onClick={gotoLobby}>MetaStar大廳</button>
      <button onClick={gotoTaipower}>台電大林廠</button>
      <button onClick={gotoCloud}>天空</button>

      <Canvas camera={{ fov: 60, far: 6000 }}>
        <ambientLight intensity={0.5} />

        <OrbitControls maxDistance={2000} />
        <Suspense fallback={<Loading />}>
          <Skybox fog={false} url={Url} />
          <Environment preset="park" rotation={[0, Math.PI / 2, 0]} />
          <fog attach="fog" args={['#74bbd0', 0, 2000]} />
        </Suspense>
        
      </Canvas>
    </>
  )
}
