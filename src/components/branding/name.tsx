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
import { Typography, TypographyPropsVariantOverrides } from '@mui/material'
import { OverridableStringUnion } from '@mui/types'
import { Variant } from '@mui/material/styles/createTypography'

type NameProps = {
    variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>
}

export const Name = ({ variant = 'h4' }: NameProps) => {
    return (
        <Typography sx={{ flexGrow: 1 }} fontFamily={'Visby Heavy'} fontWeight={'bold'} variant={variant}>
            <span>MoodMotion.</span>
        </Typography>
    )
}
