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
import { Light } from './light'

type LightsProps = {
    duration: number
}

const Lights = ({ duration }: LightsProps) => {

    return (
        <div style={{ width: duration, paddingTop: 30, clear: 'left' }}>
            <Light color='blue' label='power' duration={196} />

            <Light color='blue' label='relax' duration={50} />

            <Light color='pink' label='relax' duration={50} />
            <Light color='blue' label='relax' duration={50} />
            <Light color='pink' label='relax' duration={50} />
            <Light color='blue' label='relax' duration={50} />
            <Light color='pink' label='relax' duration={50} />
            <Light color='red' label='relax' duration={50} />
            <Light color='red' label='relax' duration={50} />




            <Light color='blue' label='focus' duration={200} />
        </div>
    )
}

export default Lights