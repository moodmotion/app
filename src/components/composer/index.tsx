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
import { Grid, useTheme } from '@mui/material'

import Timeline from '@components/timeline'
import Visual from '@components/visual'
import { Controls } from '@components/timeline/controls'

const getBackground = () => {
    const theme = useTheme()
    return theme.palette.mode === 'dark' ?
        theme.palette.background.default : theme.palette.grey[100]
}

const Composer = () => {

    return (
        <Grid container columns={16}>
            <Grid item xs={16}>&nbsp;</Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <Grid container>
                    <Grid item xs={12}>
                        <Controls />
                    </Grid>
                    <Grid item xs={12} sx={{ position: 'fixed', pt: 15 }}>
                        <Timeline />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={5}>
                <Grid container
                    height={'100vh'}
                    direction={'column'}>
                    <Grid item xs={9} sx={{ zIndex: 1, background: `linear-gradient(to right, transparent 1%, ${getBackground()} 40%)` }}>
                        <Visual />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Composer