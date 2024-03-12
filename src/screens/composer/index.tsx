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

const Composer = ({ children }: { children: ReactNode }) => {

    return (


        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            height={'100vh'}>


            <Grid item height={'50vh'}>
                Top
            </Grid>

            <Grid item height={'50vh'}>
                <Divider />
                {children}
            </Grid>

        </Grid>

    )
}

export default Composer
