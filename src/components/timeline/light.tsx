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
import { Card, CardContent, Divider } from '@mui/material'

type LightProps = {
    color: string
    duration: number
}

export const Light = ({ color, duration }: LightProps) => {

    return (
        <Card elevation={4} sx={{ width: duration, float: 'left' }}>
            <CardContent>
                <Divider style={{ borderColor: color }} />
            </CardContent>
        </Card>
    )
}