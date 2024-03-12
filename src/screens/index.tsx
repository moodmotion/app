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

const Login = lazy(() => import('./login'))
const Composer = lazy(() => import('./composer'))
const Project = lazy(() => import('./project'))


const load = (component: ReactElement) => {
    return (<Suspense>{component}</Suspense>)
}

const publicScreens: { [index: string]: ReactElement } = {
    [Screen.Login]: load(<Login />),
}

const privateScreens: { [index: string]: ReactElement } = {
    [Screen.Project]: load(<Project />)

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
