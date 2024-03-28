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
