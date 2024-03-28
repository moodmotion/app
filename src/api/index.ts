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
import axios from 'axios'
import { MoodMotion } from '@types'

// base url of the api
const apiUrl: string = 'http://localhost:3000/v1'

/**
 * /auth paths available
 */
const authUrl: string = '/auth'
export const auth = {
    register: `${authUrl}/register`,
    login: `${authUrl}/login`,
    logout: `${authUrl}/logout`
}

const apiError: MoodMotion.ApiError = {
    status: '',
    code: 0,
    message: '',
}

/**
 * Make a POST request to the API
 */
export const post = async (
    { path, data = null, thunkAPI }:
        { path: string, data: any, thunkAPI: any }) => {

    try {

        const response = await axios.post(`${apiUrl}${path}`, data)
        return await response.data

    } catch (error: any) {

        if (error.response) {

            const { status, data } = error.response

            apiError.status = status
            apiError.code = data.code
            apiError.message = data.message

        } else {

            const { name, code, message } = error

            apiError.status = name
            apiError.code = code
            apiError.message = message
        }

        return thunkAPI.rejectWithValue(apiError)
    }
}