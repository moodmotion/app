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
