import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, Stage } from "@react-three/drei"
import { Xbot } from "@components/visuals/Xbot"

const Visual = () => {

    return (
        <Canvas gl={{ preserveDrawingBuffer: true }}
            shadows={true} dpr={[1, 1.5]}
            camera={{ position: [0, 0, 175], fov: 55 }} >
            <ambientLight intensity={0.25} />
            <Suspense fallback={null}>
                <Stage
                    preset={'soft'}
                    intensity={1}
                    shadows={true}
                    adjustCamera
                    environment={'forest'}>
                    <Xbot />
                </Stage>
            </Suspense>
            <OrbitControls />
        </Canvas>
    )
}

export default Visual