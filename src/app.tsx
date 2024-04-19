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
import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'

import { messages } from '@language'
import { user, auth } from '@state'
import Screens from '@screens'
import theme from '@styles'
import { DndProvider } from '@hooks'

export const App = () => {

    const authenticated = useSelector(auth.isAuthenticated)
    const lang = useSelector(user.getLanguage)

    return (
        <IntlProvider
            locale={lang}
            key={`${lang}${authenticated}`}
            messages={messages[lang]}>
            <ThemeProvider theme={theme}>
                <DndProvider>
                    <CssBaseline>
                        <BrowserRouter>
                            <Screens />
                        </BrowserRouter>
                    </CssBaseline>
                </DndProvider>
            </ThemeProvider>
        </IntlProvider>
    )
}
