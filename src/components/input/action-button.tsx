/*
    MoveMotion.io
    Copyright (C) 2024  Martijn Benjamin<benjamin@movemotion.io>

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
