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
import { lazy, Suspense, ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { MoodMotion } from '@types'
import { RequireAuthentication } from '@components/auth'
import Screen = MoodMotion.Screen

const Login = lazy(() => import('./login'))
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
                            {privateScreens[key]}
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
