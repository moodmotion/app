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
import { Typography } from '@mui/material'
import Lights from './lights'
import Motions from './motions'
import Tracks from './tracks'
import Time from './time'

const Timeline = () => {

    const handleScroll = event => {
        console.info('scroll left', event.target.scrollLeft)
        console.info('scroll left', event.target.scrollLeft)
    }

    return (
        <>
            <div style={{ textAlign: 'center', paddingTop: 20, color: '#757575' }}>
                <Typography variant='h4'>00:45:00,000</Typography>
                <Typography variant='h5'>Ride365</Typography>
            </div>
            <div style={{ overflow: 'scroll', height: '100vh' }} onScroll={handleScroll}>
                <Time duration={10000} />
                <Lights duration={10000} />
                <Motions duration={10000} />
                <Tracks duration={10000} />
            </div>
        </>
    )
}

export default Timeline