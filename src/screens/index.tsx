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
import { lazy, Suspense, ReactElement } from 'react'
import { Bikeletics } from '@types'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import { BottomMenu, TopBar } from '@components/layout'
import { RequireAuthentication } from '@components/auth'

const Login = lazy(() => import('./login'))
const Home = lazy(() => import('./home'))
const Book = lazy(() => import('./book'))

const load = (component: ReactElement) => {
    return (<Suspense>{component}</Suspense>)
}

const publicScreens: { [index: string]: ReactElement } = {
    [Bikeletics.Screen.Login]: load(<Login />),
}

const privateScreens: { [index: string]: ReactElement } = {
    [Bikeletics.Screen.Home]: load(<Home />),
    [Bikeletics.Screen.Book]: load(<Book />)
}

const Screens = () => {

    const publicScreenKeys: string[] = Object.keys(publicScreens)
    const privateScreenKeys: string[] = Object.keys(privateScreens)

    const getDefaultScreen = () => {
        return (<Route path="*" element={<Navigate to={Bikeletics.Screen.Home} replace />} />)
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
                            <Box>
                                <TopBar />
                                <Box sx={{ pt: 7 }}>
                                    {privateScreens[key]}
                                </Box>
                                <BottomMenu />
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
