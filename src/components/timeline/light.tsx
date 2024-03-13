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
import { Avatar, Card, CardHeader, IconButton } from '@mui/material'
import { Lightbulb } from '@mui/icons-material'

type LightProps = {
    color: string
    label: string,
    duration: number
}

export const Light = ({ color, label, duration }: LightProps) => {

    return (
        <Card variant={'outlined'} sx={{ width: duration, float: 'left' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: color, opacity: 0.5 }} aria-label="light">
                        <Lightbulb />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={label}
            />
        </Card>
    )
}