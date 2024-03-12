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
import { Divider, Grid } from '@mui/material'
import { ReactNode } from 'react'
import Visual from '../visual'
import Timeline from '@components/timeline'

const Composer = ({ children }: { children: ReactNode }) => {

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            height={'100vh'}>

            <Grid item height={'50vh'}>

                <Grid container sx={{ pl: 9 }}>
                    <Grid item xs={9} sx={{ height: '100%' }}>
                        <Timeline />
                    </Grid>
                    <Grid item xs={3}>

                        <Grid container>
                            <Grid item xs={12} sx={{ height: 400 }}>
                                <Visual />
                            </Grid>
                            <Grid item xs={12} sx={{ height: 200 }}>
                                Info
                            </Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>

            <Grid item height={'50vh'}>
                <Divider />
                {children}
            </Grid>

        </Grid>

    )
}

export default Composer
