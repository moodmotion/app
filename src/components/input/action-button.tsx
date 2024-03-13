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
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { useIntl } from 'react-intl'

type ActionButtonProps = {
    id: string
    action: any
}

export const ActionButton = ({ id, action }: ActionButtonProps) => {

    const intl = useIntl()
    const dispatch = useDispatch()

    return (
        <Button
            variant={'contained'}
            onClick={() => dispatch(action)}>
            {intl.formatMessage({ id })}
        </Button>
    )
}
