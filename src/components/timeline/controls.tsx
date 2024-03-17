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
import { FastForward, FastRewind, PlayArrow } from '@mui/icons-material'
import { Grid, IconButton, Typography } from '@mui/material'

export const Controls = () => {

    return (
        <Grid container>
            <Grid item xs={12}>&nbsp;</Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <IconButton>
                    <FastRewind style={{ fontSize: 30, color: '#757575' }} />
                </IconButton>
                <IconButton>
                    <FastForward style={{ fontSize: 30, color: '#757575' }} />
                </IconButton>
                <IconButton>
                    <PlayArrow style={{ fontSize: 30, color: '#757575' }} />
                </IconButton>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <Typography variant='h4' sx={{ color: '#757575' }}>00:45:00,000</Typography>
                <Typography variant='h5' sx={{ color: '#757575' }}>Ride365</Typography>
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
    )
}