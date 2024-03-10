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
import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { MoodMotion } from '@types'
import { DotLabel } from '@components/branding'

export const BottomMenu = () => {

    const navigate = useNavigate()
    const [value, setValue] = useState(0)

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={({ }, newValue) => {
                    setValue(newValue)
                }}>

                <BottomNavigationAction
                    label={<DotLabel text={'You'} />}
                    onClick={() => navigate(MoodMotion.Screen.Home)} />

                <BottomNavigationAction
                    label={<DotLabel text={'We'} />}
                    onClick={() => navigate(MoodMotion.Screen.Book)} />

            </BottomNavigation>
        </Paper>
    )
}
