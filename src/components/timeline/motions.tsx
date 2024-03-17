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
import { Motion } from "./motion"

type MotionsProps = {
    duration: number
}

const Motions = ({ duration }: MotionsProps) => {

    return (
        <div style={{ width: duration, paddingTop: 20, clear: 'left' }}>
            <Motion name='Stand' duration={196} />
            <Motion name='Halter / Elastics' duration={208} />
            <Motion name='Stand' duration={230} />
            <Motion name='Seat' duration={128} />
            <Motion name='Sprint' duration={154} />
            <Motion name='Arms' duration={179} />
            <Motion name='Box' duration={156} />
            <Motion name='Stand' duration={187} />
            <Motion name='Elastic' duration={193} />
            <Motion name='Mindful' duration={235} />
        </div>
    )
}

export default Motions