/*
 * Copyright (C) 2024 MoodMotion.io - All Rights Reserved
 *
 *   ----------------------------
 *    Proprietary and confidential
 *   ----------------------------
 *
 * This file is part of the MoodMotion Ride application
 *
 * Unauthorized copying of this file, via any medium is 
 * strictly prohibited.
 */
import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material/styles'

const options: ThemeOptions = {
    palette: {
        primary: {
            main: '#072673'
        },
        secondary: {
            main: '#88dc29'
        }
    },
    typography: {
        fontFamily: ['Visby Medium', 'Visby Heavy'].join(',')
    }, components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#072673', backgroundImage: "none"
                }
            }
        }
    }
}

export default responsiveFontSizes(createTheme(options))
