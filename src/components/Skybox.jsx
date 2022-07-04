import { useLoader } from '@react-three/fiber'
import { BackSide, TextureLoader } from 'three'

export function Skybox({ url, fog, path = '/DayInTheClouds4k.png', rotation = [0, Math.PI / 2, 0] }) {
  console.log(url)
  const map = useLoader(TextureLoader, url)
  return (
    <mesh rotation={rotation}>
      <sphereBufferGeometry args={[2000, 300, 300]} />
      <meshBasicMaterial fog={fog} map={map} side={BackSide} />
    </mesh>
  )
}
