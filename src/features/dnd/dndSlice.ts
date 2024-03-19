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
    id: undefined,
    top: 0,
    left: 0
}

export const dndSlice = createSlice({
    name: 'dnd',
    initialState,
    reducers: {
        setTransferData: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        },
        move: (state, action: PayloadAction<{ top: number, left: number }>) => {
            state.top = action.payload.top
            state.left = action.payload.left
        }
    }
})

export const { setTransferData, move } = dndSlice.actions

export default dndSlice.reducer
