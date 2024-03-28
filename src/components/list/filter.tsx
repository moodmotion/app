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
import { Avatar, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import { MouseEventHandler } from 'react'

type FilterProps = {
    id: string
    index: string
    label: string
    subHeader?: string
    avatar: string
    itemClick: MouseEventHandler<HTMLDivElement> | undefined
}

export const Filter = ({ id, index, itemClick, label, subHeader, avatar }: FilterProps) => {

    return (
        <ListItemButton
            id={id}
            selected={index === id}
            onClick={itemClick}>
            <ListItemAvatar sx={{ pointerEvents: 'none' }}>
                <Avatar alt={label} src={avatar} sx={{ pointerEvents: 'none' }} />
            </ListItemAvatar>
            <ListItemText primary={label} secondary={subHeader} sx={{ pointerEvents: 'none' }} />
        </ListItemButton>
    )
}