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

type ProductNameProps = {
    variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>
}

export const ProductName = ({ variant = 'h4' }: ProductNameProps) => {
    return (
        <Typography sx={{ flexGrow: 1 }} variant={variant}>
            <span>MoodMotion.</span>
        </Typography>
    )
}
