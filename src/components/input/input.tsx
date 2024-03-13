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
import { TextField, TextFieldProps } from '@mui/material'
import { useIntl } from 'react-intl'

export const Input = ({ id, onChange, ...props }: TextFieldProps) => {

    const intl = useIntl()

    return (
        <TextField
            id={id}
            variant={'outlined'}
            onChange={onChange}
            label={intl.formatMessage({ id })}
            {...props} />
    )
}
