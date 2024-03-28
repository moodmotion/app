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
