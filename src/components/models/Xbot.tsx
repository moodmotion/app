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
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Beta_Joints: THREE.SkinnedMesh
    Beta_Surface: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    Beta_Joints_MAT: THREE.MeshStandardMaterial
    ['asdf1:Beta_HighLimbsGeoSG2']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'agree' | 'headShake' | 'idle' | 'run' | 'sad_pose' | 'sneak_pose' | 'walk'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

export function Xbot(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/models/Xbot.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.walk?.play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" scale={1}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Beta_Joints" geometry={nodes.Beta_Joints.geometry} material={materials.Beta_Joints_MAT} skeleton={nodes.Beta_Joints.skeleton} />
          <skinnedMesh name="Beta_Surface" geometry={nodes.Beta_Surface.geometry} material={materials['asdf1:Beta_HighLimbsGeoSG2']} skeleton={nodes.Beta_Surface.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Xbot.glb')
