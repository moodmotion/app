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
import { Chip, Grid, Paper, Stack } from '@mui/material'
import { Bolt, Refresh, ArrowLeft } from '@mui/icons-material'

const Text = () => {

    return (

        <Grid container>
            <Grid item xs={1}>&nbsp;</Grid>
            <Grid item xs={10}>
                <Paper
                    elevation={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 2,
                        m: 2
                    }}
                    component="ul">
                    <Stack spacing={1}>
                        <Chip label="Powerful" color='error' onDelete={() => console.info('delete')} icon={<Bolt />} />
                        <Chip label="3 Turns" color='info' variant="outlined" onDelete={() => console.info('delete')} icon={<Refresh />} />
                        <Chip label="Left leg" color='info' variant="outlined" onDelete={() => console.info('delete')} icon={<ArrowLeft />} />
                    </Stack>
                </Paper>
            </Grid>
            <Grid item xs={1}>&nbsp;</Grid>
        </Grid>

    )
}

export default Text