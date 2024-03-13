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
import { Face, Folder } from '@mui/icons-material'
import { Avatar, Chip, Paper, Stack, styled } from '@mui/material'

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5)
}))

const Text = () => {

    return (
        <>
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
        </>
    )

}

export default Text