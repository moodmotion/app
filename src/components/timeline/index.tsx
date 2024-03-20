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
import { Grid } from '@mui/material'

import Lights from './lights'
import Motions from './motions'
import Tracks from './tracks'
import Time from './time'
import { Tags } from './tags'

import image1 from '@assets/images/covers/aintnootherman.png'
import image2 from '@assets/images/covers/asking.png'
import image3 from '@assets/images/covers/givemeonereason.png'
import { TouchEvent, DragEvent, useRef } from 'react'

const Timeline = () => {


    /**
     * We want to support both touch move and mouse drag.
     * 
     * Touch does not support any dropzone events, 
     * those only work with mouse drag unfortunately.
     * 
     * We handle the detection of entering the dropzone 
     * through the onTouchMove event calling a 'virtual'
     * touchEnter event function.
     * 
     * The sequence of events with Touch:
     * 
     * 1. onTouchStart fires
     *      - create a visual drag feedback object
     *      - set it to the drag coordinates
     * 
     * 2. onTouchMove fires
     *      - update the drag coordinates on the drag feedback object
     *      - call the 'virtual' touchEnter event to detect dropzone overlap
     * 
     * 3. onTouchEnd fires
     *      - 
     * 
     * The dropzone implements:
     * 
     * draggable={false}
     * onDragOver={dragOver} 
     * onDrop={drop} 
     * onDragEnter={dragEnter} 
     * onDragLeave={dragLeave} 
     * 
     * 
     * The draggable items implement:
     * 
     * draggable={true} 
     * onDragStart={dragStart} 
     * onTouchStart={dragTouchstart} 
     * onTouchMove={dragTouchmove} 
     * onTouchEnd={dragTouchend}
     * 
     */

    let moveObject: HTMLImageElement | undefined = undefined
    const dropZoneRef = useRef<HTMLDivElement | boolean>(!null)

    /**
    * =================================
    * Touch Move Methods
    * =================================
    */

    /**
     * When the onTouchStart fires we create a representation
     * of what we are moving as feedback for the user
     */
    const touchStart = (event: TouchEvent) => {

        // store a reference to what is being moved
        // in this case an image
        /** @todo change to storing album/track data */
        moveObject = event.target as HTMLImageElement

        // create a new object as the moving item to show to the user
        /** @todo change to resemblance of an album/track */
        let image = document.createElement("img")
        // the id is set for future lookup to update it's location
        image.setAttribute("id", "image-float")

        // get info from the stored reference to show user
        /** @todo use the id of the album/track and retrieve from the redux store */
        image.src = moveObject.src
        image.width = 100
        image.height = 100

        // position the object to the touch location as user feedback
        let left = event.touches[0].pageX
        let top = event.touches[0].pageY
        image.style.position = 'absolute'
        image.style.left = left + 'px'
        image.style.top = top + 'px'
        image.style.opacity = '0.5'

        document.body.appendChild(image)
    }

    /**
     * During the onTouchMove we update the location of the 
     * moving feedback object
     * 
     * Since dropzone events are not supported with touch we
     * fabricate our own dropzone detection with the touchEnter 
     * method.
     */
    const touchMove = (event: TouchEvent) => {

        // get the moved object
        let image = document.getElementById('image-float')

        if (image) {

            // update it's coordinates so it moves along with the 
            // user movement
            let left = event.touches[0].pageX
            let top = event.touches[0].pageY
            image.style.position = 'absolute'
            image.style.left = left + 'px'
            image.style.top = top + 'px'

            let touchX = event.touches[0].pageX
            let touchY = event.touches[0].pageY

            // call our 'virtual' touchEnter
            // to see if the moved object
            // is hovering over the dropzone
            touchEnter(touchX, touchY)
        }
    }

    /**
     * Our 'virtual' touch enter event.
     * 
     * It checks if the moved object is 
     * overlapping with the dropzone.
     * 
     * When there is an overlap we change the 
     * styling of the dropzone to indicate the 
     * drop possibility to the user
     */
    const touchEnter = (touchX: number, touchY: number) => {


        // get dimensions of the dropzone
        let dimensions = dropZoneRef.current.getBoundingClientRect()

        // to detect the overlap of touchmove with dropzone
        const overlap = !(dimensions.right < touchX || dimensions.left > touchX || dimensions.bottom < touchY || dimensions.top > touchY)

        // When there is an overlap, in other words, the dragObject moves over the dropzone
        // we apply style, if false this is equal to touchLeave and we reset the styles
        if (overlap) {
            dropZoneRef.current.style.border = "dotted"
            dropZoneRef.current.style.borderColor = "#0b79d0"
        } else {
            dropZoneRef.current.style.border = "1px solid #0b79d0"
        }

    }

    /**
     * The onTouchEnd event updates the dropzone target
     * and clears any move temporary objects 
     */
    const touchEnd = () => {

        // clear dragged image duplicate
        let image = document.getElementById('image-float')
        image?.remove()

        // outside any dropzone, clear the move object
        /** @todo check overlap to determine if we need to drop or not */
        // if inside dropzone, drop the dragObject 
        /** @todo  add album/track to timeline in redux store */
        dropZoneRef.current.style.border = "1px solid #0b79d0"
        dropZoneRef.current.appendChild(moveObject)
        moveObject = undefined

    }

    /**
     * =================================
     * Mouse Drag Methods
     * =================================
     */

    /**
     * Dropzone event:
     * Prevent default behavior to allow a drop
     */
    const dragOver = (event: DragEvent) => {
        event.preventDefault()
    }

    /**
     * Dropzone event:
     * When the dragged item overlaps with the dropzone we 
     * style the border as user feedback
     */
    const dragEnter = () => {
        dropZoneRef.current.style.border = "dotted"
        dropZoneRef.current.style.borderColor = "#0b79d0"
    }

    /**
     * Dropzone event:
     * When the dragged item is no longer overlapping 
     * with the dropzone we style th dropzone border
     * back to normal
     */
    const dragLeave = () => {
        dropZoneRef.current.style.border = "1px solid #0b79d0"
    }

    /**
     * When the user initiated a drag move we store the id
     * of the chosen track in the transfer data for future
     * reference
     */
    const dragStart = (event: DragEvent) => {
        event.dataTransfer.setData("id", event.target.id)
    }

    /**
     * When the user stops the drag we  
     */
    const drop = (event: DragEvent) => {

        event.preventDefault()

        /** @todo get data of dragged object and set/persist in store timeline & API */
        const dragObject = document.getElementById(event.dataTransfer.getData("id")) as HTMLImageElement
        dropZoneRef.current.appendChild(dragObject)
        dropZoneRef.current.style.border = "solid 1px #0b79d0"
    }


    return (
        <div>
            <div
                ref={dropZoneRef}
                onDragOver={dragOver}
                onDrop={drop}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                draggable={false}
                style={{ height: 120, width: '100%', border: '1px solid #0b79d0' }}>
            </div>

            <img
                id="some-track-id-a"
                style={{ width: 124, height: 124 }}
                draggable={true}
                onDragStart={dragStart}
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
                src={image1} />

            <img
                id="some-track-id-b"
                style={{ width: 124, height: 124 }}
                draggable={true}
                onDragStart={dragStart}
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
                src={image2} />

            <img
                id="some-track-id-c"
                style={{ width: 124, height: 124 }}
                draggable={true}
                onDragStart={dragStart}
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
                src={image3} />


            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                style={{ overflow: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <Grid item xs={12}>
                    &nbsp;
                </Grid>
                <Grid item xs={12}>
                    <Time duration={3000} />
                </Grid>
                <Grid item xs={12}>
                    <Lights duration={2700} />
                </Grid>
                <Grid item xs={12}>
                    <Tracks duration={2700} />
                </Grid>
                <Grid item xs={12}>
                    <Motions duration={2700} />
                </Grid>
                <Grid item xs={12}>
                    <Tags duration={2700} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Timeline