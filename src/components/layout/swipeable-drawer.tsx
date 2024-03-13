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
import { Global } from '@emotion/react'
import { SwipeableDrawer, Typography } from '@mui/material'

import Composer from '@components/composer'
import { StyledBox } from './'
import { Puller } from './'
import { Root } from './'

const drawerBleeding = 56

export function Drawer() {

    const [open, setOpen] = useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    };

    return (
        <Root>
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible'
                    }
                }} />

            <Composer />

            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true
                }}>
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0
                    }}>
                    <Puller />
                    <Typography sx={{ p: 2, color: 'text.secondary' }}>&nbsp;</Typography>
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}>

                    {/** @todo add icons for music, light & motion */}

                </StyledBox>
            </SwipeableDrawer>
        </Root>
    )
}