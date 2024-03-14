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
import { Chip, Grid, Stack } from '@mui/material'
import { Bolt, Refresh, ArrowLeft } from '@mui/icons-material'

const Text = () => {

    return (

        <Grid container>
            <Grid item xs={4}>&nbsp;</Grid>
            <Grid item xs={5}>
                <Stack spacing={2}>
                    <Chip label="Powerful" color='error' onDelete={() => console.info('delete')} icon={<Bolt />} />
                    <Chip label="3 Turns" color='info' variant="outlined" onDelete={() => console.info('delete')} icon={<Refresh />} />
                    <Chip label="Left leg" color='info' variant="outlined" onDelete={() => console.info('delete')} icon={<ArrowLeft />} />
                </Stack>
            </Grid>
            <Grid item xs={3}>&nbsp;</Grid>
        </Grid>

    )
}

export default Text