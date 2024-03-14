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

import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Typography } from "@mui/material"
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