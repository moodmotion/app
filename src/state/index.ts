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
import { configureStore } from '@reduxjs/toolkit'

import { authReducer, dndReducer, layoutReducer } from '@features'
import { MoodMotion } from '@types'
import State = MoodMotion.State

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
    isInDropZone: (state: State) => state.dnd.isInDropZone,

}

/**
 * Layout selectors
 */
export const layout = {
    isDrawerOpen: (state: State) => state.layout.isDrawerOpen
}

