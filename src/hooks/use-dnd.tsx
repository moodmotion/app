
import { MoodMotion } from '@types'
import { useState } from 'react'

export const useDnd = () => {

    const [location, setLocation] = useState<MoodMotion.DnDTrack>({ id: undefined, top: 0, left: 0 })

    const move = ({ top, left }: { top: number, left: number }) => {
        setLocation({ ...location, top, left })
    }

    return {
        move,
        location,
        setLocation
    }
}