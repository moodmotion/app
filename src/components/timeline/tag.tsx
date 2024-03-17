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
import { Chip } from '@mui/material'
import { JSXElementConstructor, ReactElement } from 'react'

type TagProps = {
    label: string,
    icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined
}

export const Tag = ({ label, icon }: TagProps) => {

    return (
        <Chip label={label} variant="outlined" icon={icon} sx={{m:0.2}}/>
    )
}