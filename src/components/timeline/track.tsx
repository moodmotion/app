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
import { Avatar, Card, CardHeader, CardProps, IconButton } from "@mui/material"

type TrackProps = CardProps & {
    title: string
    artist: string
    duration: number
    cover: string
}

export const Track = ({ title, artist, duration, cover, ...props }: TrackProps) => {

    return (
        <Card elevation={4} sx={{ width: duration, float: 'left' }} {...props}>
            <CardHeader
                avatar={
                    <Avatar aria-label="track" src={cover} variant="square" sx={{ width: 48, height: 48, m: 0, p: 0 }} />
                }
                action={
                    <IconButton aria-label="settings">
                        {/** @todo add resizers */}
                    </IconButton>
                }
                title={
                    <span style={{ textOverflow: 'ellipsis', width: duration, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        <b>{title}</b>
                    </span>
                }
                subheader={
                    <span style={{ textOverflow: 'ellipsis', width: duration, overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        {artist}
                    </span>}
            />
        </Card>
    )
}
