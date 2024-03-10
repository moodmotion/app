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