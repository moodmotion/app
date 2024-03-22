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