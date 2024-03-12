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
import { Avatar, Chip, Divider, Grid, Paper, Stack } from '@mui/material'
import { ReactNode } from 'react'
import Visual from '../visual'
import Timeline from '@components/timeline'
import { Face, Folder } from '@mui/icons-material'
import { styled } from '@mui/material/styles';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const Composer = ({ children }: { children: ReactNode }) => {

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            height={'100vh'}>

            <Grid item>

                <Grid container sx={{ pl: 9 }} height={'50vh'}>
                    <Grid item xs={9}>
                        <Timeline />
                    </Grid>
                    <Grid item xs={3}>

                        <Grid container height={'50vh'}>
                            <Grid item xs={12} sx={{ height: '70%' }}>
                                <Visual />
                            </Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10} sx={{ height: '30%' }}>

                                <br />

                                <Paper
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                        listStyle: 'none',
                                        p: 0.5,
                                        m: 0,
                                    }}
                                    component="ul">
                                    <ListItem>
                                        <Chip label="Chip Filled" onDelete={() => console.info('delete')} icon={<Face />} />
                                        <Chip label="Chip Outlined" variant="outlined" onDelete={() => console.info('delete')} icon={<Face />} />
                                    </ListItem>
                                </Paper>

                                <br />

                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}>

                                    <Avatar>
                                        <Folder />
                                    </Avatar>

                                    <Avatar variant="rounded">
                                        N
                                    </Avatar>

                                </Stack>


                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>

            <Grid item height={'50vh'}>
                <Divider />
                {children}
            </Grid>

        </Grid>

    )
}

export default Composer
