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
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { Bikeletics } from '@types'
import { post, auth } from '@api'

const ApiStatus = Bikeletics.ApiStatus

export const register = createAsyncThunk<Bikeletics.RegisterResponse, {}, { rejectValue: Bikeletics.ApiError }>(
    'auth/register',
    (credentials, thunkAPI) => post({
        path: auth.register,
        data: credentials,
        thunkAPI
    })
)

export const login = createAsyncThunk<Bikeletics.LoginResponse, {}, { rejectValue: Bikeletics.ApiError }>(
    'auth/login',
    (credentials, thunkAPI) => post({
        path: auth.login,
        data: credentials,
        thunkAPI
    })
)

export const logout = createAsyncThunk<void, {}, { rejectValue: Bikeletics.ApiError }>(
    'auth/logout',
    (refreshToken, thunkAPI) => post({
        path: auth.logout,
        data: refreshToken,
        thunkAPI
    })
)

const initialState: Bikeletics.AuthState = {
    authenticated: false,
    status: ApiStatus.Idle,
    error: {
        code: 0,
        status: '',
        message: ''
    },
    user: {
        lang: Bikeletics.Language.English,
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
