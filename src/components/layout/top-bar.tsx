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
import {AccountCircle} from '@mui/icons-material'
import {Box, AppBar, Toolbar, IconButton} from '@mui/material'

import {Name} from '@components/branding'

export const TopBar = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Name/>
                    <IconButton size="large" color="inherit">
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
