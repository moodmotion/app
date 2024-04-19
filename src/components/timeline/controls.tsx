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
import { FastForward, FastRewind, PlayArrow } from '@mui/icons-material'
import { Grid, IconButton, Typography } from '@mui/material'

export const Controls = () => {

    return (
        <Grid container>
            <Grid item xs={12}>&nbsp;</Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <IconButton sx={{ zIndex: 1 }}>
                    <FastRewind style={{ fontSize: 30, color: '#757575' }} />
                </IconButton>
                <IconButton sx={{ zIndex: 1 }}>
                    <FastForward style={{ fontSize: 30, color: '#757575' }} />
                </IconButton>
                <IconButton sx={{ zIndex: 1 }}>
                    <PlayArrow style={{ fontSize: 30, color: '#757575' }} />
                </IconButton>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <Typography variant='h4' sx={{ color: '#757575' }}>00:45:00,000</Typography>
                <Typography variant='h5' sx={{ color: '#757575' }}>Ride365</Typography>
            </Grid>
            <Grid item xs={4}></Grid>
        </Grid>
    )
}