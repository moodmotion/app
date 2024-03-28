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
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStyles, SwipeableDrawer, Typography } from '@mui/material'

import Composer from '@components/composer'
import { StyledBox, Puller, Root } from '.'
import { DrawerContent } from './drawer-content'
import { layout } from '@state'
import { closeDrawer, openDrawer } from '@features'
import { Track } from '@components/timeline/track'

import imageCover from '@assets/images/covers/aintnootherman.png'
import { useDnd } from '../../hooks/use-dnd'

const drawerBleeding = 56

export const Drawer = () => {

    const { location, move } = useDnd()
    const dispatch = useDispatch()
    const isDrawerOpen = useSelector(layout.isDrawerOpen)

    return (
        <>
            <Track
                title='some title'
                artist='some artist'
                duration={200}
                cover={imageCover}
                style={{ zIndex: 100000000, visibility: location.top === 0 ? 'hidden' : 'visible', position: 'absolute', top: location.top, left: location.left }} />

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
                    allowSwipeInChildren={false}
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

                        <DrawerContent move={move} />

                    </StyledBox>
                </SwipeableDrawer>
            </Root>
        </>
    )
}