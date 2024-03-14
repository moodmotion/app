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
import { Avatar, Card, CardHeader, IconButton } from '@mui/material'
import { Lightbulb } from '@mui/icons-material'

type LightProps = {
    color: string
    label: string,
    duration: number
}

export const Light = ({ color, label, duration }: LightProps) => {

    return (
        <Card elevation={4} sx={{ width: duration, float: 'left' }}>
            <CardHeader
                
                avatar={
                    <Avatar sx={{ bgcolor: color }} aria-label="light">
                        <Lightbulb />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        {/** @todo add resizers */}
                    </IconButton>
                }
                title={label}
            />
        </Card>
    )
}