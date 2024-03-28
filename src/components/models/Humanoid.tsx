/*
    MoodMotion.io, motivate to move
    Copyright (C) 2024  Martijn Benjamin<benjamin@moodmotion.io>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    MaleBodyBlocking001: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

const Humanoid = (props: JSX.IntrinsicElements['group']) => {
  const { nodes } = useGLTF('/models/humanoid.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh name="MaleBodyBlocking001" castShadow receiveShadow geometry={nodes.MaleBodyBlocking001.geometry} material={nodes.MaleBodyBlocking001.material} rotation={[0, 0, -Math.PI]} scale={-1} />
    </group>
  )
}

export default Humanoid

useGLTF.preload('/models/humanoid.glb')
