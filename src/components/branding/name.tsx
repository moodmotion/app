/*
 * Copyright (C) 2024 Bikeletics.com - All Rights Reserved
 *
 *   ----------------------------
 *    Proprietary and confidential
 *   ----------------------------
 *
 * This file is part of the Bikeletics Ride application
 *
 * Unauthorized copying of this file, via any medium is 
 * strictly prohibited.
 */
import {Typography, useTheme, TypographyPropsVariantOverrides} from '@mui/material'
import {OverridableStringUnion} from '@mui/types'
import {Variant} from '@mui/material/styles/createTypography'

type NameProps = {
    variant?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>
}

export const Name = ({variant = 'h4'}: NameProps) => {
    const theme = useTheme()
    return (
        <Typography sx={{flexGrow: 1}} fontFamily={'Visby Heavy'} fontWeight={'bold'} variant={variant}>
            <span style={{color: theme.palette.secondary.main}}>BIKE</span>
            <span style={{color: 'white'}}>LETICS</span>
            <span style={{color: 'white', fontSize: 35}}>.</span>
        </Typography>
    )
}
