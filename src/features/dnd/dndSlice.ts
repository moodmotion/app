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
