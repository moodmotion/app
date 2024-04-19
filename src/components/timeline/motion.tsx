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
import { Avatar, Card, CardHeader, IconButton } from "@mui/material"

type MotionProps = {
    name: string
    duration: number
}

export const Motion = ({ name, duration }: MotionProps) => {

    return (
        <Card elevation={4} sx={{ width: duration, float: 'left' }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="track">
                        {name.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        {/** @todo add resizers */}
                    </IconButton>
                }
                title={name}
                subheader={''}
            />
        </Card>
    )
}
