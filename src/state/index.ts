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
import { configureStore } from '@reduxjs/toolkit'

import { authReducer, dndReducer, layoutReducer } from '@features'
import { MoodMotion } from '@types'
import State = MoodMotion.State
import { createContext } from 'react'

/**
 * Store
 */
export const store = configureStore({
    reducer: {
        auth: authReducer,
        dnd: dndReducer,
        layout: layoutReducer
    }
})

/**
 * Auth Selectors
 */
export const auth = {
    isAuthenticated: (state: State) => state.auth.authenticated
}

/**
 * User Selectors
 * @todo Auth & User are on the same slice, split?
 */
export const user = {
    getLanguage: (state: State) => state.auth.user.lang
}

/**
 * Drag and Drop selectors
 */
export const dnd = {
    getTransferData: (state: State) => state.dnd.transferData,
    getDropZone: (state: State) => state.dnd.dropZone,
    isInDropZone: (state: State) => state.dnd.isInDropZone
}

/**
 * Layout selectors
 */
export const layout = {
    isDrawerOpen: (state: State) => state.layout.isDrawerOpen
}

/**
 * Context created for drag and drop guidance
 */
export const DnDContext = createContext(null)
