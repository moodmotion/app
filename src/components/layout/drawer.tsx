/*
    MoodMotion.io, motivated to move
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
import { useDispatch, useSelector } from 'react-redux'
import { GlobalStyles, SwipeableDrawer, Typography } from '@mui/material'

import Composer from '@components/composer'
import { StyledBox, Puller, Root } from '.'
import { DrawerContent } from './drawer-content'
import { DnDContext, layout } from '@state'
import { closeDrawer, openDrawer } from '@features'
import { Track } from '@components/timeline/track'

import imageCover from '@assets/images/covers/aintnootherman.png'
import { useDnd } from '../../hooks/use-dnd'
import { useContext } from 'react'

const drawerBleeding = 56

export const Drawer = () => {

    const { location, move } = useDnd()
    const dispatch = useDispatch()
    const isDrawerOpen = useSelector(layout.isDrawerOpen)

    const dndContext = useContext(DnDContext)

    console.info(dndContext)


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