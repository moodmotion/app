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
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { MoodMotion } from '@types'
import { post, auth } from '@api'

const ApiStatus = MoodMotion.ApiStatus

export const register = createAsyncThunk<MoodMotion.RegisterResponse, {}, { rejectValue: MoodMotion.ApiError }>(
    'auth/register',
    (credentials, thunkAPI) => post({
        path: auth.register,
        data: credentials,
        thunkAPI
    })
)

export const login = createAsyncThunk<MoodMotion.LoginResponse, {}, { rejectValue: MoodMotion.ApiError }>(
    'auth/login',
    (credentials, thunkAPI) => post({
        path: auth.login,
        data: credentials,
        thunkAPI
    })
)

export const logout = createAsyncThunk<void, {}, { rejectValue: MoodMotion.ApiError }>(
    'auth/logout',
    (refreshToken, thunkAPI) => post({
        path: auth.logout,
        data: refreshToken,
        thunkAPI
    })
)

const initialState: MoodMotion.AuthState = {
    authenticated: false,
    status: ApiStatus.Idle,
    error: {
        code: 0,
        status: '',
        message: ''
    },
    user: {
        lang: MoodMotion.Language.English,
        name: '',
        email: '',
        isEmailVerified: false,
        role: '',
        createdAt: '',
        updatedAt: ''
    },
    tokens: {
        access: {
            expires: '',
            token: ''
        },
        refresh: {
            expires: '',
            token: ''
        },
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {

        builder.addCase(register.pending, state => {
            state.status = ApiStatus.Pending
            state.error = {
                status: '',
                code: 0,
                message: ''
            }
        })

        builder.addCase(register.fulfilled, (state, { payload }) => {
            state.status = ApiStatus.Fulfilled
            state.authenticated = true
            state.user = payload.user
            state.tokens = payload.tokens
            state.error = {
                status: '',
                code: 0,
                message: ''
            }
        })

        builder.addCase(register.rejected, (state, { payload }) => {
            state.status = ApiStatus.Rejected
            state.error = payload
        })

        builder.addCase(login.pending, state => {
            state.status = ApiStatus.Pending
            state.error = {
                status: '',
                code: 0,
                message: ''
            }
        })

        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.status = ApiStatus.Fulfilled
            state.authenticated = true
            state.user = payload.user
            state.tokens = payload.tokens
            state.error = {
                status: '',
                code: 0,
                message: ''
            }
        })

        builder.addCase(login.rejected, (state, { payload }) => {
            state.status = ApiStatus.Rejected
            state.error = payload
        })

        builder.addCase(logout.pending, state => {
            state.status = ApiStatus.Pending
            state.error = {
                status: '',
                code: 0,
                message: ''
            }
        })

        builder.addCase(logout.fulfilled, state => {
            state.status = ApiStatus.Fulfilled
            state.authenticated = false
            state.tokens = undefined
        })

        builder.addCase(logout.rejected, (state, { payload }) => {
            state.status = ApiStatus.Rejected
            state.error = payload
        })
    }
})

export default authSlice.reducer
