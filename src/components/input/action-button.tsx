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

type ActionButtonProps = {
    action: any
}

export const ActionButton = ({ action }: ActionButtonProps) => {

    const dispatch = useDispatch()

    return (
        <Button
            variant={'contained'}
            onClick={() => dispatch(action)}>Login</Button>
    )
}
