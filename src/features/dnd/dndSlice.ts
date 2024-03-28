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
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { MoodMotion } from '@types'

const initialState: MoodMotion.DndState = {
    transferData: undefined,
    dropZone: undefined,
    isInDropZone: false
}

export const dndSlice = createSlice({
    name: 'dnd',
    initialState,
    reducers: {
        setTransferData: (state, action: PayloadAction<string>) => {
            state.transferData = action.payload
        },
        setDropZone: (state, action: PayloadAction<MoodMotion.BoundingBox>) => {
            state.dropZone = action.payload
        },
        inDropZone: (state, action: PayloadAction<boolean>) => {
            state.isInDropZone = action.payload
        },
        reset: (state) => {
            state.transferData = undefined
            state.isInDropZone = false
        }
    }
})

export const { setTransferData, setDropZone, inDropZone, reset } = dndSlice.actions

export default dndSlice.reducer
