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
import { store } from "@state"

/**
 * This namespace encapsulates all MoodMotion specific types
 */
export namespace MoodMotion {

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
