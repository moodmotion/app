/*
    MoodMotion.io, motivate to move
    Copyright (C) 2024  Martijn Benjamin<benjamin@moodmotion.io>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
