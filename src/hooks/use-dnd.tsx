/*
    MoveMotion.io
    Copyright (C) 2024  Martijn Benjamin<benjamin@movemotion.io>

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
import { useState, createContext, ReactNode, useContext, Dispatch, SetStateAction } from 'react'

type Coordinate = {
    top: number,
    left: number
}

type BoundingBox = {
    top: number,
    left: number,
    right: number,
    bottom: number
}

type DndContextTypes = {
    location: { top: number, left: number }
    setLocation: Dispatch<SetStateAction<Coordinate>>
    transferData: string
    setTransferData: Dispatch<SetStateAction<string>>
    dropZone: { top: number, left: number, right: number, bottom: number }
    setDropZone: Dispatch<SetStateAction<BoundingBox>>
    isInDropZone: boolean
    setIsInDropZone: Dispatch<SetStateAction<boolean>>
}

export const DnDContext = createContext<DndContextTypes>({
    dropZone: { bottom: 0, left: 0, right: 0, top: 0 },
    isInDropZone: false,
    location: { left: 0, top: 0 },
    setDropZone: () => { },
    setIsInDropZone: () => { },
    setLocation: () => { },
    setTransferData: () => { },
    transferData: ''
})

export const DndProvider = ({ children }: { children: ReactNode }) => {

    const [transferData, setTransferData] = useState('')
    const [location, setLocation] = useState<Coordinate>({ top: 0, left: 0 })
    const [dropZone, setDropZone] = useState({ top: 0, left: 0, right: 0, bottom: 0 })
    const [isInDropZone, setIsInDropZone] = useState(false)

    return (
        <DnDContext.Provider value={{
            location,
            setLocation,
            transferData,
            setTransferData,
            dropZone,
            setDropZone,
            isInDropZone,
            setIsInDropZone
        }}>
            {children}
        </DnDContext.Provider>
    )
}

export const useDnd = () => {

    const {
        location,
        setLocation,
        transferData,
        setTransferData,
        dropZone,
        setDropZone,
        isInDropZone,
        setIsInDropZone } = useContext(DnDContext)

    return {
        location,
        setLocation,
        transferData,
        setTransferData,
        dropZone,
        setDropZone,
        isInDropZone,
        setIsInDropZone
    }
}

