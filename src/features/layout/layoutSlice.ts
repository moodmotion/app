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
import { createSlice } from '@reduxjs/toolkit'

import { MoodMotion } from '@types'

const initialState: MoodMotion.LayoutState = {
    isDrawerOpen: false
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        openDrawer: (state) => {
            state.isDrawerOpen = true
        },
        closeDrawer: (state) => {
            state.isDrawerOpen = false
        }
    }
})

export const { openDrawer, closeDrawer } = layoutSlice.actions

export default layoutSlice.reducer
