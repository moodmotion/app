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
import { DragEvent, MouseEventHandler, TouchEvent } from 'react'
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
    setPosition?: Function
}

type MuiTouchEvent = TouchEvent & {
    nativeEvent: {
        defaultMuiPrevented: boolean
    }
}

export const IndexItem = ({ id, label, subHeader, index, avatar, itemClick, draggable = false, setPosition }: IndexItemProps) => {

    const isOpen = useSelector(layout.isDrawerOpen)
    const dispatch = useDispatch()

    const touchStart = (event: TouchEvent) => {

        console.info('touch start')

        const e = event as MuiTouchEvent
        // prevent the drawer from sliding when dragging 
        e.nativeEvent.defaultMuiPrevented = true
    }

    const touchDrag = (e: TouchEvent) => {

        console.info('touch drag')

        // Close the drawer when open and we reach the edge
        if (isOpen && (window.innerHeight * 0.3) - e.touches[0].pageY > -56) {
            dispatch(closeDrawer())
        }

        if (setPosition) {
            // update when we are within boundaries
            const leftOK = (window.innerWidth - (e.touches[0].pageX + 200)) > 0
            const bottomOK = (window.innerHeight - (e.touches[0].pageY + 100)) > 0
            const rightOK = e.touches[0].pageX > 50
            const topOK = e.touches[0].pageY > 50

            if (leftOK && rightOK && bottomOK && topOK) {
                setPosition({
                    left: e.touches[0].pageX,
                    top: e.touches[0].pageY
                })
            }
        }
    }

    //    const mouseDrag = (e: DragEvent<HTMLDivElement>) => {

    //      console.info('mouse drag')
    //}

    const endDragging = () => {
        console.info('end drag')

        if (setPosition) {
            setPosition({ top: 0, left: 0 })
        }
    }

    const startDragging = () => {
        dispatch(closeDrawer())
    }

    return (
        <ListItemButton
            id={`drag-item-${id}`}
            selected={index === id}
            onClick={itemClick}
            draggable={draggable}
            onTouchStart={touchStart}

            onTouchMove={touchDrag}

            onDragEnd={endDragging}
            onDragStart={startDragging}
            onTouchEnd={endDragging}>
            <ListItemAvatar sx={{ pointerEvents: 'none' }}>
                <Avatar alt={label} src={avatar} sx={{ pointerEvents: 'none' }} />
            </ListItemAvatar>
            <ListItemText primary={label} secondary={subHeader} sx={{ pointerEvents: 'none' }} />
        </ListItemButton>
    )
}
