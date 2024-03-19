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
import { MouseEventHandler } from 'react'
import { Avatar, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { closeDrawer } from '@features'
import { layout } from '@state'

type IndexItemProps = {
    id: number
    label: string
    subHeader?: string
    index: number
    avatar: string
    itemClick: MouseEventHandler<HTMLDivElement> | undefined
    draggable?: boolean
    setPosition: Function
}

export const IndexItem = ({ id, label, subHeader, index, avatar, itemClick, draggable = false, setPosition }: IndexItemProps) => {

    const isOpen = useSelector(layout.isDrawerOpen)
    const dispatch = useDispatch()

    const startDragging = (e) => { }

    const dragging = (e) => {

        // Close the drawer when open and we reach the edge
        if (isOpen && (window.innerHeight * 0.3) - e.touches[0].pageY > -56) {
            dispatch(closeDrawer())
        }

        if (setPosition) {
            // update when we are within boundaries
            if (window.innerWidth - (e.touches[0].pageX + 200) > 0) {
                setPosition({
                    left: e.touches[0].pageX,
                    top: e.touches[0].pageY
                })
            }
        }
    }

    const endDragging = (e) => {
        if (setPosition) {
            setPosition({ top: 0, left: 0 })
        }
    }

    return (
        <ListItemButton
            id={`drag-item-${id}`}
            selected={index === id}
            onClick={itemClick}
            draggable={draggable}
            onTouchStart={startDragging}
            onDragStart={startDragging}
            onDrag={dragging}
            onTouchMove={dragging}
            onDragEnd={endDragging}
            onTouchEnd={endDragging}>
            <ListItemAvatar sx={{ pointerEvents: 'none' }}>
                <Avatar alt={label} src={avatar} sx={{ pointerEvents: 'none' }} />
            </ListItemAvatar>
            <ListItemText primary={label} secondary={subHeader} sx={{ pointerEvents: 'none' }} />
        </ListItemButton>
    )
}
