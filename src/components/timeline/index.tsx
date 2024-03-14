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
import { Grid, Typography } from '@mui/material'
import { useMeasure } from 'react-use'

import Lights from './lights'
import Motions from './motions'
import Tracks from './tracks'
import Time from './time'

const Timeline = () => {

    const [ref, { x, y, width, height, top, right, bottom, left }] = useMeasure();

    const handleScroll = event => {
        console.info('scroll left', event.target.scrollLeft)
        console.info('scroll left', event.target.scrollLeft)
    }

    console.info(width)

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            height={'100vh'}
            style={{ overflow: 'scroll' }}>
            <Grid item xs={12}>
                <div style={{ position: 'absolute', left: '50%' }}>
                    Test
                </div>
            </Grid>
            <Grid item xs={12}>
                <Time duration={2700} />
                <Lights duration={2700} />
                <Motions duration={2700} />
                <Tracks duration={2700} />
            </Grid>
            <Grid item xs={12}>&nbsp;</Grid>
            <Grid item xs={12}>&nbsp;</Grid>
        </Grid>
    )
}

export default Timeline