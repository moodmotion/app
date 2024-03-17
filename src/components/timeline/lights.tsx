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
            <Light color='blue' duration={196} />
            <Light color='orange' duration={50} />
            <Light color='red' duration={50} />
            <Light color='blue' duration={50} />
            <Light color='green' duration={50} />
            <Light color='blue' duration={50} />
            <Light color='orange' duration={50} />
            <Light color='green' duration={50} />
            <Light color='red' duration={50} />
            <Light color='blue' duration={200} />
        </div>
    )
}

export default Lights