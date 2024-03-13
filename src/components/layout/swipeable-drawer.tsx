import * as React from 'react'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Grid } from '@mui/material'
import Timeline from '@components/timeline'
import Visual from '../visual'
import Text from '../text'

const drawerBleeding = 56

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

export default function MySwipeableDrawer() {

    const [open, setOpen] = React.useState(false)

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    };

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }} />

            <Grid container height={'100vh'}>

                <Grid item xs={8}>
                    <Timeline />
                </Grid>

                <Grid item xs={4}>

                    <Grid container height={'100vh'} direction={'column'}>

                        <Grid item xs={8}>
                            <Visual />
                        </Grid>

                        <Grid item xs={4}>

                            <Grid container>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={10}>
                                    <Text />
                                </Grid>
                                <Grid item xs={1}></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}>
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
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
                    <Skeleton variant="rectangular" height="100%" />

                </StyledBox>
            </SwipeableDrawer>
        </Root>
    )
}