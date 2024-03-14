/*
 * Copyright (C) 2024 MoodMotion.io - All Rights Reserved
 *
 *   ----------------------------
 *    Proprietary and confidential
 *   ----------------------------
 *
 * This file is part of the MoodMotion application
 *
 * Unauthorized copying of this file, via any medium is 
 * strictly prohibited.
 */
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Xbot } from '@components/models/Xbot'

const Visual = () => {

    return (
        <Canvas
            shadows={true}
            dpr={[1, 1]}
            camera={{ position: [0, 0, 150], fov: 50, zoom: 1.1 }} >
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