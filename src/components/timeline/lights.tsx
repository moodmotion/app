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
        <div style={{ paddingLeft: 60, paddingTop: 30, width: duration, clear: 'left' }}>
            <Light color='red' label='power' duration={300} />
            <Light color='green' label='relax' duration={100} />
            <Light color='blue' label='focus' duration={200} />
        </div>
    )
}

export default Lights