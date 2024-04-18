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
import { useDispatch, useSelector } from 'react-redux'
import { DragEvent, MouseEventHandler, TouchEvent } from 'react'
import { Avatar, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material'

import { closeDrawer } from '@features'
import { layout } from '@state'
import { useDnd } from '../../hooks/use-dnd'

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

export const Item = ({ id, index, label, subHeader, avatar, itemClick }: IndexItemProps) => {

    const { transferData, setTransferData, setLocation, dropZone, isInDropZone, setIsInDropZone } = useDnd()
    const drawerIsOpen = useSelector(layout.isDrawerOpen)
    const dispatch = useDispatch()

    /**
     * Prevent the drawer from sliding when 
     * dragging & set transfer data 
     */
    const touchStart = (event: TouchEvent) => {
        const e = event as MuiTouchEvent
        e.nativeEvent.defaultMuiPrevented = true
        setTransferData(e.target.id)
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

        setLocation({ top, left })

        if (dropZone) {
            const overlap = !(dropZone.right < left || dropZone.left > left || dropZone.bottom < top || dropZone.top > top)
            if (overlap) {
                setIsInDropZone(true)
            } else {
                setIsInDropZone(false)
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

        // reset dragging
        setLocation({ top: 0, left: 0 })
    }

    const dragStart = (event: DragEvent) => {
        const e = event as MuiTouchEvent
        setTransferData(e.target.id)
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
