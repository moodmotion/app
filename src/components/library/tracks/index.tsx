/*
 * Copyright (C) 2024 MoodMotion.io - All Rights Reserved
 *
 *   ----------------------------
 *    Proprietary and confidential
 *   ----------------------------
 *
 * This file is part of the MoodMotion application
 *
 * Unauthorized copying of this file, via any medium is 
 * strictly prohibited.
 */
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Typography } from '@mui/material'

import AfroHouse from '@assets/images/afro-house.png'
import MelodicHouse from '@assets/images/melodic-house-techno.png'
import { useState } from 'react'

export const Tracks = () => {

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
            }}
            subheader={<li />}>

            <li key={`section-uptempo`}>
                <ul>
                    <ListSubheader><Typography variant={'h5'}>Uptempo</Typography></ListSubheader>
                    <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
                        <ListItemAvatar>
                            <Avatar alt="Afro House" src={AfroHouse} />
                        </ListItemAvatar>
                        <ListItemText primary={`Afro House`} secondary={'Some secondary text'} />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
                        <ListItemAvatar>
                            <Avatar alt="Melodic House" src={MelodicHouse} />
                        </ListItemAvatar>
                        <ListItemText primary={`Melodic House`} secondary={'Some secondary text'} />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
                        <ListItemAvatar>
                            <Avatar alt="Dance" src={AfroHouse} />
                        </ListItemAvatar>
                        <ListItemText primary={`Dance`} secondary={'Some secondary text'} />
                    </ListItemButton>
                </ul>
            </li>
            <li key={`section-focus`}>
                <ul>
                    <ListSubheader><Typography variant={'h5'}>Focus</Typography></ListSubheader>
                    <ListItemButton selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
                        <ListItemAvatar>
                            <Avatar alt="Dance" src={MelodicHouse} />
                        </ListItemAvatar>
                        <ListItemText primary={`Japanese Bells`} secondary={'Some secondary text'} />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
                        <ListItemAvatar>
                            <Avatar alt="Dance" src={AfroHouse} />
                        </ListItemAvatar>
                        <ListItemText primary={`Buddhist wind`} secondary={'Some secondary text'} />
                    </ListItemButton>
                </ul>
            </li>

        </List>
    )
}