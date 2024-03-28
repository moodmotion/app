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
import { store } from "@state"

/**
 * This namespace encapsulates all MoodMotion specific types
 */
export namespace MoodMotion {

    /**
     * Service Worker typing
     */
    export type ServiceWorkerConfig = {
        onUpdate?: Function
        onSuccess?: Function
    }

    /**
     * The main navigation entries.
     * Any navigation within these screens is done with 
     * sub paths within the screen / feature 
     */
    export enum Screen {
        Login = '/login',
        Project = '/project',
        Audio = '/audio',
        Light = '/light',
        Text = '/text',
        Visual = '/visual'
    }

    export type DnDTrack = {
        id: string | undefined
        top: number
        left: number
    }

    export type Credentials = {
        email: string,
        password: string
    }

    /**
     * The Root State of the Redux store, generically 
     * derived by 'getState'
     */
    export type State = ReturnType<typeof store.getState>

    /**
     * Error definition as thrown by the MoodMotion API 
     */
    export type ApiError = {
        // a status description of the current error (e.g. Not Found)
        status: string
        // any associated codes with the error (e.g. 400)
        code: number
        // a more elaborated message indicating what went wrong
        // (e.g. Unable to find User with ID xyz)
        message: string
    }

    /**
     * The status an API request can be in
     */
    export enum ApiStatus {
        Idle = 'idle',
        Pending = 'pending',
        Fulfilled = 'fulfilled',
        Rejected = 'rejected'
    }

    /**
     * Describes the redux state of the authSlice
     */
    export type AuthState = {
        authenticated: boolean
        status: string
        error: ApiError | undefined
        user: User
        tokens: Tokens | undefined
    }

    export type RegisterResponse = {
        user: User
        tokens: Tokens
    }

    export type LoginResponse = {
        user: User
        tokens: Tokens
    }

    export type DndState = {
        transferData: string | undefined
        dropZone: BoundingBox | undefined
        isInDropZone: boolean
    }

    export type BoundingBox = {
        left: number
        right: number
        top: number
        bottom: number
    }

    export type LayoutState = {
        isDrawerOpen: boolean
    }

    /**
     * All data objects as found in our API
     * These are the definitions of the data we have 
     * stored in MongoDB
     * =====================================================
     */

    /**
     * Available languages
     */
    export enum Language {
        English = 'en',
        Dutch = 'nl'
    }

    /**
     * Describes the User object as available in the API
     */
    export type User = {
        name: string
        email: string
        role: string
        isEmailVerified: boolean
        lang: Language
        createdAt: string
        updatedAt: string
    }

    /**
     * Json Web Tokens
     */
    export type Tokens = {
        access: JWTToken,
        refresh: JWTToken,
    }

    export type JWTToken = {
        expires: string,
        token: string
    }

}
