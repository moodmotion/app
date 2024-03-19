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
import { ListSubheader, Typography } from "@mui/material"

type SubHeaderProps = {
    label: string
}

export const SubHeader = ({ label }: SubHeaderProps) => {

    return (
        <ListSubheader>
            <Typography variant={'h6'} sx={{ p: 0, m: 0 }}>{label}</Typography>
        </ListSubheader>
    )
}
