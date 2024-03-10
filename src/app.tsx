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

import { messages } from './language'
import { getLanguage, isAuthenticated } from '@state'
import Screens from '@screens'
import theme from '@styles'

export const App = () => {

    // we are using the isAuthenticated selector here
    // so we re-render the whole app when authentication 
    // state changes
    const auth = useSelector(isAuthenticated)
    const lang = useSelector(getLanguage)

    return (
        <IntlProvider
            locale={lang}
            key={lang}
            messages={messages[lang]}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <BrowserRouter>
                        <Screens key={`${auth}`} />
                    </BrowserRouter>
                </CssBaseline>
            </ThemeProvider>
        </IntlProvider>
    )
}
