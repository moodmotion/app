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
        mode: 'light'
    }
}

export default responsiveFontSizes(createTheme(options))
