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
import { styled } from '@mui/material'
import { grey } from '@mui/material/colors'

export const Root = styled('div')(({ theme }) => ({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default
}))
