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
import { Avatar, Divider, List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { useState } from "react"

export const Lights = () => {

    const [selectedIndex, setSelectedIndex] = useState(-1)

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index)
    }

    return (
        <List

            sx={{
                width: 300,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                height: '50vh',
                '& ul': { padding: 0 },
            }}>
            <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                <ListItemAvatar>
                    <Avatar alt="Hue">H</Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Hue`} secondary={'Some secondary text'} />
            </ListItemButton>
            <Divider />
            <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                <ListItemAvatar>
                    <Avatar alt="Govee">G</Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Govee`} secondary={'Some secondary text'} />
            </ListItemButton>
        </List>
    )
}