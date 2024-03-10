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
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'

type ActionButtonProps = {
    action: any
}

export const ActionButton = ({ action }: ActionButtonProps) => {

    const dispatch = useDispatch()

    return (
        <Button variant={'contained'}
            color={'secondary'}
            onClick={() => dispatch(action)}>Login</Button>
    )
}
