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
import { useState } from 'react'
import { Grid, Tabs, Tab } from '@mui/material'
import { AccessibilityNew, Lightbulb, MusicNote } from '@mui/icons-material'

import { Tracks } from '@components/library/sounds'
import { Motions } from '@components/library/motions'
import { Lights } from '@components/library/lights'

export const DrawerContent = () => {

    const [index, setIndex] = useState(0)

    return (
        <Grid container sx={{ bgcolor: 'background.paper', height: '100%' }}>
            <Grid item xs={1} sx={{ pt: 4 }}>
                <Tabs
                    orientation="vertical"
                    value={index}
                    onChange={(_, newIndex) => setIndex(newIndex)}>
                    <Tab icon={<Lightbulb sx={{ fontSize: 25 }} />} />
                    <Tab icon={<AccessibilityNew sx={{ fontSize: 25 }} />} />
                    <Tab icon={<MusicNote sx={{ fontSize: 25 }} />} />
                </Tabs>
            </Grid>
            <Grid item xs={11}>
                <div hidden={index !== 0} style={{ height: '100%' }}>
                    <Lights />
                </div>
                <div hidden={index !== 1} style={{ height: '100%' }}>
                    <Motions />
                </div>
                <div hidden={index !== 2} style={{ height: '100%' }}>
                    <Tracks />
                </div>
            </Grid>
        </Grid>
    );
}