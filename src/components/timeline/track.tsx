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
import { Avatar, Card, CardHeader, CardProps, IconButton } from "@mui/material"

type TrackProps = CardProps & {
    title: string
    artist: string
    duration: number
    cover?: string
}

export const Track = ({ title, artist, duration, cover, ...props }: TrackProps) => {

    return (
        <Card elevation={4} sx={{ width: duration, float: 'left' }} {...props}>
            <CardHeader
                avatar={
                    <Avatar aria-label="track" src={cover} variant="square" sx={{ width: 48, height: 48, m: 0, p: 0 }} />
                }
                action={
                    <IconButton aria-label="settings">
                        {/** @todo add resizers */}
                    </IconButton>
                }
                title={
                    <span style={{ textOverflow: 'ellipsis', width: duration, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        <b>{title}</b>
                    </span>
                }
                subheader={
                    <span style={{ textOverflow: 'ellipsis', width: duration, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {artist}
                    </span>}
            />
        </Card>
    )
}
