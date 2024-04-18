/*
    MoodMotion.io, motivate to move
    Copyright (C) 2024  Martijn Benjamin<benjamin@moodmotion.io>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
                    <Tracks/>
                </div>
            </Grid>
        </Grid>
    );
}