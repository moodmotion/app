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
