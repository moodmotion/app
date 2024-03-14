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

import Text from '@components/text'
import Timeline from '@components/timeline'
import Visual from '@components/visual'

const Composer = () => {

    return (
        <Grid container columns={16}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Timeline />
            </Grid>
            <Grid item xs={5}>
                <Grid container
                    height={'100vh'}
                    direction={'column'}>
                    <Grid item xs={8}>
                        <Visual />
                    </Grid>
                    <Grid item xs={4}>
                        <Text />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Composer