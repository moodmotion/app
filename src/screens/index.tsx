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
import { lazy, Suspense, ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import { MoodMotion } from '@types'
import { Shelf } from '@components/layout'
import { RequireAuthentication } from '@components/auth'
import Screen = MoodMotion.Screen

const Audio = lazy(() => import('./audio'))
const Composer = lazy(() => import('./composer'))
const Light = lazy(() => import('./light'))

const Login = lazy(() => import('./login'))
const Project = lazy(() => import('./project'))
const Text = lazy(() => import('./text'))
const Visual = lazy(() => import('./visual'))


const load = (component: ReactElement) => {
    return (<Suspense>{component}</Suspense>)
}

const publicScreens: { [index: string]: ReactElement } = {
    [Screen.Login]: load(<Login />),
}

const privateScreens: { [index: string]: ReactElement } = {
    [Screen.Audio]: load(<Audio />),
    [Screen.Light]: load(<Light />),
    [Screen.Project]: load(<Project />),
    [Screen.Text]: load(<Text />),
    [Screen.Visual]: load(<Visual />),
}

const Screens = () => {

    const publicScreenKeys: string[] = Object.keys(publicScreens)
    const privateScreenKeys: string[] = Object.keys(privateScreens)

    const getDefaultScreen = () => {
        return (<Route path="*" element={<Navigate to={Screen.Project} replace />} />)
    }

    return (
        <Routes>
            {
                publicScreenKeys.map(key => (
                    <Route path={`${key}/*`} element={publicScreens[key]} key={key} />)
                )
            }
            {
                privateScreenKeys.map(key => (
                    <Route path={`${key}/*`} element={
                        <RequireAuthentication>
                            <Box sx={{ display: 'flex' }}>
                                <Shelf />
                                <Composer>
                                    {privateScreens[key]}
                                </Composer>

                            </Box>
                        </RequireAuthentication>
                    } key={key} />)
                )
            }

            {
                getDefaultScreen()
            }
        </Routes>
    )
}

export default Screens
