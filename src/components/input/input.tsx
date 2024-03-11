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
import { TextField, TextFieldProps, useTheme } from '@mui/material'
import { useIntl } from 'react-intl'

export const Input = ({ id, onChange, ...props }: TextFieldProps) => {

    const intl = useIntl()
    const theme = useTheme()

    return (
        <TextField
            id={id}
            sx={{
                "& .MuiInputLabel-root": { color: '#B1BAD3' },
                "& .MuiOutlinedInput-root": {
                    "& > fieldset": { borderColor: '#435895' },
                },
                "& .MuiOutlinedInput-root:hover": {
                    "& > fieldset": {
                        borderColor: theme.palette.secondary.main
                    }
                }
            }}
            variant={'outlined'}
            color={'secondary'}
            onChange={onChange}
            label={intl.formatMessage({ id })}
            {...props}
        />
    )
}
