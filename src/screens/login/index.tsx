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
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Grid, useTheme, Stack } from '@mui/material'

import { login } from '@features'
import { isAuthenticated } from '@state'
import { MoodMotion } from '@types'
import { Name } from '@components/branding'
import { Input, ActionButton } from '@components/input'

const Login = () => {

    const authenticated = useSelector(isAuthenticated)
    const navigate = useNavigate()
    const theme = useTheme()

    const [credentials, setCredentials] = useState({
        email: '', password: ''
    })

    const update = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [event.target.id]: event.target.value })
    }

    useEffect(() => {
        if (authenticated) {
            navigate(MoodMotion.Screen.Home)
        }
    }, [navigate])

    return (
        <Grid container sx={{ backgroundColor: theme.palette.primary.main, height: '100vh' }}>
            <Grid item xs={12} sx={{ mt: 25, textAlign: 'center' }}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    <Name variant={'h3'} />
                    <Input id={'email'} required onChange={update()} />
                    <Input id={'password'} required onChange={update()} type={'password'} />
                    <ActionButton action={login(credentials)} />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Login
