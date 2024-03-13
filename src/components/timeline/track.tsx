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
import { MoreVert } from "@mui/icons-material"
import { Avatar, Card, CardHeader, IconButton } from "@mui/material"

type TrackProps = {
    title: string
    artist: string
    duration: number
}

export const Track = ({ title, artist, duration }: TrackProps) => {

    return (
        <Card variant={'outlined'} sx={{ width: duration, float: 'left' }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="track">
                        {title.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={title}
            />
        </Card>
    )
}
