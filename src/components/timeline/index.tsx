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
import { Grid } from '@mui/material'

import Lights from './lights'
import Motions from './motions'
import Tracks from './tracks'
import Time from './time'
import { Tags } from './tags'

const Timeline = () => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            style={{ overflow: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <Grid item xs={12}>
                &nbsp;
            </Grid>
            <Grid item xs={12}>
                <Time duration={2700} />
            </Grid>
            <Grid item xs={12}>
                <Lights duration={2700} />
            </Grid>
            <Grid item xs={12}>
                <Tracks duration={2700} />
            </Grid>
            <Grid item xs={12}>
                <Motions duration={2700} />
            </Grid>
            <Grid item xs={12}>
                <Tags duration={2700} />
            </Grid>
        </Grid>
    )
}

export default Timeline