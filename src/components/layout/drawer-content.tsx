/*
    MoveMotion.io
    Copyright (C) 2024  Martijn Benjamin<benjamin@movemotion.io>

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
import { AccessibilityNew, MusicNote } from '@mui/icons-material'

import { Tracks } from '@components/library/sounds'
import { Motions } from '@components/library/motions'

export const DrawerContent = () => {

    const [index, setIndex] = useState(0)

    return (
        <Grid container sx={{ bgcolor: 'background.paper', height: '100%' }}>
            <Grid item xs={1} sx={{ pt: 4 }}>
                <Tabs
                    orientation="vertical"
                    value={index}
                    onChange={(_, newIndex) => setIndex(newIndex)}>
                    <Tab icon={<MusicNote sx={{ fontSize: 25 }} />} />
                    <Tab icon={<AccessibilityNew sx={{ fontSize: 25 }} />} />
                </Tabs>
            </Grid>
            <Grid item xs={11}>
                <div hidden={index !== 0} style={{ height: '100%' }}>
                    <Tracks />
                </div>
                <div hidden={index !== 1} style={{ height: '100%' }}>
                    <Motions />
                </div>
            </Grid>
        </Grid>
    );
}