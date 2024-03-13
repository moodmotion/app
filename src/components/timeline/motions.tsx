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
        <div style={{ paddingLeft: 60, paddingTop: 10, width: duration, clear: 'left' }}>
            <Motion name='Jumping Jacks' />
            <Motion name='Knallen op de fiets' />
        </div>
    )
}

export default Motions