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

import { authReducer } from '@features'
import { MoodMotion } from '@types'
import State = MoodMotion.State

/**
 * Store
 */
export const store = configureStore({
    reducer: {
        auth: authReducer
    },
})

/**
 * User Selectors
 */
const getLanguage = (state: State) => state.auth.user.lang
const isAuthenticated = (state: State) => state.auth.authenticated

export {
    getLanguage,
    isAuthenticated
}
