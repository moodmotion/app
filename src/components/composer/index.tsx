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
import { Grid, useTheme } from '@mui/material'

import Timeline from '@components/timeline'
import Visual from '@components/visual'
import { Controls } from '@components/timeline/controls'

const getBackground = () => {
    const theme = useTheme()
    return theme.palette.mode === 'dark' ?
        theme.palette.background.default : theme.palette.grey[100]
}

const Composer = () => {

    return (
        <Grid container columns={16}>
            <Grid item xs={16}>&nbsp;</Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Grid container>
                    <Grid item xs={12}>
                        <Controls />
                    </Grid>
                    <Grid item xs={12} sx={{ position: 'fixed', pt: 15 }}>
                        <Timeline />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={5}>
                <Grid container
                    height={'100vh'}
                    direction={'column'}>
                    <Grid item xs={9} sx={{ zIndex: 1, background: `linear-gradient(to right, transparent 1%, ${getBackground()} 40%)` }}>
                        <Visual />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Composer