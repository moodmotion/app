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
import { SimpleCard } from "@components/cards";

const Home = () => {

    return (

        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2} sx={{ pt: 1 }}>

            <Grid item>
                <SimpleCard
                    title={'Book your first Ride'}
                    image={'/images/cards/card.jpeg'}
                    action={'Book Now'}
                    help={'Lets get you on that Bike! We got a nice discount for first-timers'} />
            </Grid>

            <Grid item>
                <SimpleCard
                    title={'Your Next Ride'}
                    image={'/images/cards/card3.jpeg'}
                    action={'View Ride'}
                    help={'Thursday April 22nd 7:15u, Bike 16'} />
            </Grid>

            <Grid item>
                <SimpleCard
                    title={'What is MoodMotion?'}
                    image={'/images/cards/card2.jpeg'}
                    action={'Learn more'}
                    help={'Want to know all about what we do and why? We love to tell you 💙'} />
            </Grid>

            <Grid item>
                <SimpleCard
                    title={'Frequently Asked Questions'}
                    image={'/images/cards/card3.jpeg'}
                    action={'Learn more'}
                    help={'Check what others have asked us'} />
            </Grid>

            <Grid item xs={12}>&nbsp;</Grid>
            <Grid item xs={12}>&nbsp;</Grid>


        </Grid>

    )
}

export default Home
