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
import { Typography } from '@mui/material'

type TimeProps = {
    duration: number
}

const formatMS = (seconds: number) => {
    var date = new Date(0)
    date.setSeconds(seconds)
    return date.toISOString().substring(14, 19).startsWith('0') ?
        date.toISOString().substring(15, 19) :
        date.toISOString().substring(14, 19)
}

const Tick = ({ seconds }: { seconds: number }) => {
    return (
        <div style={{ height: 10, width: 59, borderLeft: '1px solid #2f2f2f', float: 'left' }}>
            <Typography variant="body2" color={'GrayText'}>&nbsp;{formatMS(seconds)}</Typography>
        </div>
    )
}

const Time = ({ duration }: TimeProps) => {

    return (
        <div style={{ width: duration + 60, clear: 'left', height: 0.5 }}>

            <div style={{ marginTop: -20, zIndex: 1000, position: 'absolute', width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '10px solid #f00' }}>
                <div style={{ position: 'absolute', width: 0, height: 350, borderLeft: '0.5px solid red' }}></div>
            </div>

            <Tick seconds={0} />
            {
                [...Array(duration)].map((_, i) => {
                    if (i % 60 === 0 && i !== 0) {
                        return <Tick key={i} seconds={i} />
                    }
                })
            }
            <Tick seconds={duration} />
        </div >
    )
}

export default Time