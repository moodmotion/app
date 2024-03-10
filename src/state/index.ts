/*
 * Copyright (C) 2024 Bikeletics.com - All Rights Reserved
 *
 *   ----------------------------
 *    Proprietary and confidential
 *   ----------------------------
 *
 * This file is part of the Bikeletics Ride application
 *
 * Unauthorized copying of this file, via any medium is 
 * strictly prohibited.
 */
import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from '@features'
import { Bikeletics } from '@types'
import State = Bikeletics.State

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
