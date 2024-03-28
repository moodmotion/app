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
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { auth } from '@state'
import { MoodMotion } from '@types'
import Screen = MoodMotion.Screen

export const RequireAuthentication = ({ children }: { children: ReactNode }) => {
    const authenticated = useSelector(auth.isAuthenticated)
    return authenticated === true ? (children) : (<Navigate to={Screen.Login} replace />)
}
