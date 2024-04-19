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
import { Grid } from '@mui/material'

import Motions from './motions'
import Tracks from './tracks'
import Time from './time'
import { Tags } from './tags'

const Timeline = () => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            style={{ overflow: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <Grid item xs={12}>
                &nbsp;
            </Grid>
            <Grid item xs={12}>
                <Time duration={3000} />
            </Grid>
            <Grid item xs={12}>
                &nbsp;
            </Grid>
            <Grid item xs={12}>
                <Tracks duration={2700} />
            </Grid>
            <Grid item xs={12}>
                <Motions duration={2700} />
            </Grid>
            <Grid item xs={12}>
                <Tags duration={2700} />
            </Grid>
        </Grid>
    )
}

export default Timeline