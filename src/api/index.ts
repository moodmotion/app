import axios from 'axios'
import { Bikeletics } from '@types'

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

const apiError: Bikeletics.ApiError = {
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
            apiError.status = error.response.status
            apiError.code = error.response.data.code
            apiError.message = error.response.data.message
        } else {
            apiError.status = error.name
            apiError.code = error.code
            apiError.message = error.message
        }

        return thunkAPI.rejectWithValue(apiError)
    }
}