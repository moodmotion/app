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
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Grid, Stack } from '@mui/material'

import { login } from '@features'
import { auth } from '@state'
import { ProductName } from '@components/branding'
import { Input, ActionButton } from '@components/input'

import { MoodMotion } from '@types'
import Screen = MoodMotion.Screen

const Login = () => {

    const authenticated = useSelector(auth.isAuthenticated)
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: '', password: ''
    })

    const update = () => (event: ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [event.target.id]: event.target.value })
    }

    useEffect(() => {
        if (authenticated) {
            navigate(Screen.Project)
        }
    }, [navigate])

    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid item xs={12} sx={{ mt: 25, textAlign: 'center' }}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    <ProductName variant={'h3'} />
                    <Input id={'email'} required onChange={update()} />
                    <Input id={'password'} required onChange={update()} type={'password'} />
                    <ActionButton id={'login'} action={login(credentials)} />
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Login
