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
import { useDispatch, useSelector } from 'react-redux'
import { DragEvent, MouseEventHandler, TouchEvent } from 'react'
import { Avatar, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'

import { closeDrawer, inDropZone, reset, setTransferData } from '@features'
import { dnd, layout } from '@state'

type IndexItemProps = {
    id: string
    index: string
    label: string
    subHeader?: string
    avatar: string
    itemClick: MouseEventHandler<HTMLDivElement> | undefined
}

type MuiTouchEvent = TouchEvent & DragEvent & {
    nativeEvent: {
        defaultMuiPrevented: boolean
    }, target: {
        id: string
    }
}

export const Track = ({ id, index, label, subHeader, avatar, itemClick }: IndexItemProps) => {

    const dropZone = useSelector(dnd.getDropZone)
    const isInDropZone = useSelector(dnd.isInDropZone)
    const transferData = useSelector(dnd.getTransferData)
    const drawerIsOpen = useSelector(layout.isDrawerOpen)
    const dispatch = useDispatch()

    /**
     * Prevent the drawer from sliding when 
     * dragging & set transfer data 
     */
    const touchStart = (event: TouchEvent) => {
        const e = event as MuiTouchEvent
        e.nativeEvent.defaultMuiPrevented = true
        dispatch(setTransferData(e.target.id))
    }

    /**
     * Close drawer when open @todo create moving visual
     * and detect dropzone enter/leave
     */
    const touchMove = (event: TouchEvent) => {

        if (drawerIsOpen && (window.innerHeight * 0.3) - event.touches[0].pageY > -56) {
            dispatch(closeDrawer())
        }

        let left = event.touches[0].pageX
        let top = event.touches[0].pageY

        if (dropZone) {
            const overlap = !(dropZone.right < left || dropZone.left > left || dropZone.bottom < top || dropZone.top > top)
            if (overlap) {
                dispatch(inDropZone(true))
            } else {
                dispatch(inDropZone(false))
            }
        } else {
            throw Error('No Dropzone Provided! Unable to calculate overlap')
        }
    }

    const touchEnd = () => {

        if (isInDropZone) {
            console.info('drop!', transferData)
        } else {
            console.info('no drop')
        }
        // reset dropzone state & transferData
        dispatch(reset())
    }

    const dragStart = (event: DragEvent) => {
        const e = event as MuiTouchEvent
        dispatch(setTransferData(e.target.id))
    }

    return (
        <ListItemButton
            id={id}
            selected={index === id}
            onClick={itemClick}
            draggable={true}
            onDragStart={dragStart}
            onTouchStart={touchStart}
            onTouchMove={touchMove}
            onTouchEnd={touchEnd}>
            <ListItemAvatar sx={{ pointerEvents: 'none' }}>
                <Avatar alt={label} src={avatar} sx={{ pointerEvents: 'none' }} />
            </ListItemAvatar>
            <ListItemText primary={label} secondary={subHeader} sx={{ pointerEvents: 'none' }} />
        </ListItemButton>
    )
}
