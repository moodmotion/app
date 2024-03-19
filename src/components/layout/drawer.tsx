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
import { GlobalStyles, SwipeableDrawer, Typography } from '@mui/material'

import Composer from '@components/composer'
import { StyledBox, Puller, Root } from '.'
import { DrawerContent } from './drawer-content'
import { Track } from '@components/timeline/track'
import { useDispatch, useSelector } from 'react-redux'
import { layout } from '@state'
import { closeDrawer, openDrawer } from '@features'

const drawerBleeding = 56

export function Drawer() {

    const dispatch = useDispatch()
    const isDrawerOpen = useSelector(layout.isDrawerOpen)
    const [position, setPosition] = useState({ top: 0, left: 0 })

    return (
        <>
            <Track title='Cool Track' duration={200} style={{ zIndex: 10000000, visibility: position.top !== 0 ? 'visible' : 'hidden', position: 'absolute', top: position.top, left: position.left }} />
            <Root style={{ overflow: 'hidden' }}>


                <GlobalStyles
                    styles={{
                        '.MuiDrawer-root > .MuiPaper-root': {
                            height: `calc(70% - ${drawerBleeding}px)`,
                            overflow: 'visible'
                        }
                    }} />

                <Composer />

                <SwipeableDrawer
                    anchor="bottom"
                    open={isDrawerOpen}
                    onClose={() => dispatch(closeDrawer())}
                    onOpen={() => dispatch(openDrawer())}
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

                        <DrawerContent setPosition={setPosition} />

                    </StyledBox>
                </SwipeableDrawer>
            </Root>
        </>
    )
}