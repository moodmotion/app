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

type MotionProps = {
    name: string
}

export const Motion = ({ name }: MotionProps) => {

    return (
        <Card variant={'outlined'} sx={{ maxWidth: 280, float: 'left' }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="track">
                        {name.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={name}
                subheader={''}
            />
        </Card>
    )
}
