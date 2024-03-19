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
import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'

import { messages } from '@language'
import { user, auth } from '@state'
import Screens from '@screens'
import theme from '@styles'

export const App = () => {

    const authenticated = useSelector(auth.isAuthenticated)
    const lang = useSelector(user.getLanguage)

    return (
        <IntlProvider
            locale={lang}
            key={`${lang}${authenticated}`}
            messages={messages[lang]}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <BrowserRouter>
                        <Screens />
                    </BrowserRouter>
                </CssBaseline>
            </ThemeProvider>
        </IntlProvider>
    )
}
