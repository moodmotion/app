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
import { Avatar, Divider, List, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Typography } from "@mui/material"
import { useState } from "react"

export const Motions = () => {

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
                overflow: 'auto',
                height: '50vh',
                '& ul': { padding: 0 },
            }}
            subheader={<li />}>

            <li key={`section-a`}>
                <ul>
                    <ListSubheader><Typography variant={'h5'}>A</Typography></ListSubheader>
                    <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                        <ListItemAvatar>
                            <Avatar alt="Aerobics" />
                        </ListItemAvatar>
                        <ListItemText primary={`Aerobics`} secondary={'Some secondary text'} />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                        <ListItemAvatar>
                            <Avatar alt="Aikido" />
                        </ListItemAvatar>
                        <ListItemText primary={`Aikido`} secondary={'Some secondary text'} />
                    </ListItemButton>
                </ul>
            </li>
            <li key={`section-b`}>
                <ul>
                    <ListSubheader><Typography variant={'h5'}>B</Typography></ListSubheader>
                    <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                        <ListItemAvatar>
                            <Avatar alt="Bodypump" />
                        </ListItemAvatar>
                        <ListItemText primary={`Body Pump`} secondary={'Some secondary text'} />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                        <ListItemAvatar>
                            <Avatar alt="Bikeletics" />
                        </ListItemAvatar>
                        <ListItemText primary={`Bikeletics`} secondary={'Some secondary text'} />
                    </ListItemButton>
                </ul>
            </li>
            <li key={`section-k`}>
                <ul>
                    <ListSubheader><Typography variant={'h5'}>K</Typography></ListSubheader>
                    <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
                        <ListItemAvatar>
                            <Avatar alt="Karate" />
                        </ListItemAvatar>
                        <ListItemText primary={`Karate`} secondary={'Some secondary text'} />
                    </ListItemButton>
                </ul>
            </li>
            <li key={`section-y`}>
                <ul>
                    <ListSubheader><Typography variant={'h5'}>Y</Typography></ListSubheader>
                    <ListItemButton selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
                        <ListItemAvatar>
                            <Avatar alt="Yoga" />
                        </ListItemAvatar>
                        <ListItemText primary={`Yoga`} secondary={'Some secondary text'} />
                    </ListItemButton>
                </ul>
            </li>

        </List>
    )
}