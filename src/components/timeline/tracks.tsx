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
import { Track } from './track'

import seva from '@assets/images/covers/se-va.png'
import vai from '@assets/images/covers/vai.png'
import love from '@assets/images/covers/loveyoulikethat.png'
import stan from '@assets/images/covers/stan.png'
import aint from '@assets/images/covers/aintnootherman.png'
import sex from '@assets/images/covers/sexmachine.png'
import sexy from '@assets/images/covers/sexyback.png'
import asking from '@assets/images/covers/asking.png'
import thisis from '@assets/images/covers/thisisthesound.png'
import nobody from '@assets/images/covers/nobody.png'
import gold from '@assets/images/covers/goldigger.png'
import magalehna from '@assets/images/covers/magalenha.png'
import give from '@assets/images/covers/givemeonereason.png'
import { DragEvent, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dnd } from '@state'
import { setDropZone } from '../../features/dnd/dndSlice'

type TracksProps = {
    duration: number
}

const Tracks = ({ duration }: TracksProps) => {

    const dispatch = useDispatch()
    const isInDropZone = useSelector(dnd.isInDropZone)
    const dropZoneRef = useRef<HTMLDivElement>(null)

    const dragOver = (event: DragEvent) => {
        event.preventDefault()
    }

    const drop = (event: DragEvent) => {
        event.preventDefault()

        /** @todo get data of dragged object and set/persist in store timeline & API */
        const dragObject = document.getElementById(event.dataTransfer.getData("id")) as HTMLImageElement
        dropZoneRef.current!.appendChild(dragObject)
        dropZoneRef.current!.style.border = "1px solid blue"

    }
    const dragEnter = () => {
        dropZoneRef.current!.style.border = "dotted"
        dropZoneRef.current!.style.borderColor = "red"
    }

    const dragLeave = () => {
        dropZoneRef.current!.style.border = "1px solid blue"
    }

    useEffect(() => {
        let dimensions = dropZoneRef.current!.getBoundingClientRect()
        dispatch(setDropZone({
            left: dimensions.left,
            right: dimensions.right,
            top: dimensions.top,
            bottom: dimensions.bottom
        }))
    }, [])

    return (
        <div
            ref={dropZoneRef}
            draggable={false}
            onDragOver={dragOver}
            onDrop={drop}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            style={{ width: duration, paddingTop: 20, border: isInDropZone ? '3px dotted green' : 'none', height: 125 }}>
            <Track title="Se Va" artist="Tom & Collins ft. Cumbiafrica" duration={196} cover={seva} />
            <Track title="Vai" artist="Tom & Collins" duration={208} cover={vai} />
            <Track title="Love You Like That" artist="Cloonee" duration={230} cover={love} />
            <Track title="Stan" artist="TWENTY SIX" duration={128} cover={stan} />
            <Track title="Ain't no other man" artist="Murphy's Law" duration={154} cover={aint} />
            <Track title="Sex Machine" artist="Block & Crown" duration={179} cover={sex} />
            <Track title="Sexy Back" artist="Lucky Luke & Fella" duration={156} cover={sexy} />
            <Track title="Asking" artist="Sonny Fodera & MK" duration={187} cover={asking} />
            <Track title="This Is The Sound" artist="Riva Starr" duration={193} cover={thisis} />
            <Track title="Nobody" artist="David Penn" duration={235} cover={nobody} />
            <Track title="Goldigger" artist="Dennis Cruz" duration={218} cover={gold} />
            <Track title="Magalenha" artist="Joshwa" duration={170} cover={magalehna} />
            <Track title="Give Me One Reason" artist="Tom & Collins" duration={427} cover={give} />
        </div>
    )
}

export default Tracks