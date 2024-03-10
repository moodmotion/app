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
import { Card, CardMedia, CardContent, Typography, Button, Divider, CardActions } from '@mui/material'

export const SimpleCard = ({ title, help, image, action }: { title: string, help: string, image: string, action: string }) => {

    return (
        <Card sx={{ width: '95vw' }} elevation={4}>
            <CardMedia
                sx={{ p: 1 }}
                component="img"
                height="140"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {help}
                </Typography>
            </CardContent>
            <Divider sx={{ mx: 2 }} />
            <CardActions sx={{ ml: 1 }}>
                <Button variant={'contained'}>{action}</Button>
            </CardActions>
        </Card>
    )
}
