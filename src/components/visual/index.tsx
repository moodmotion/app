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
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Xbot } from '@components/models/Xbot'

const Visual = () => {

    return (
        <Canvas
            shadows={true}
            dpr={[1, 1]}
            camera={{ position: [150, 0, 150], fov: 50, zoom: 1.1 }} >
            <ambientLight intensity={0.25} />
            <Suspense fallback={null}>
                <Stage
                    preset={'portrait'}
                    intensity={1}
                    shadows={true}
                    adjustCamera
                    environment={'city'}>
                    <Xbot />
                </Stage>
            </Suspense>
            <OrbitControls />
        </Canvas>
    )
}

export default Visual