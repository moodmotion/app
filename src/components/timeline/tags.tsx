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
import { AcUnit, ArrowLeft, Bolt, Cancel, Refresh } from '@mui/icons-material'
import { Tag } from './tag'

export const Tags = ({ duration }: { duration: number }) => {

    return (
        <div style={{ width: duration, paddingTop: 20, clear: 'left' }}>
            <div style={{ width: 196, textAlign: 'center', float: 'left' }}>
                <Tag label={'3 Turns'} icon={<Refresh />} />
                <Tag label={'Left Leg'} icon={<ArrowLeft />} />
            </div>
            <div style={{ width: 208, textAlign: 'center', float: 'left' }}>
                <Tag label={'Stop cycling'} icon={<Cancel />} />
            </div>
            <div style={{ width: 230, textAlign: 'center', float: 'left' }}>
                <Tag label={'Body frozen'} icon={<AcUnit />} />
            </div>
            <div style={{ width: 128, textAlign: 'center', float: 'left' }}>
                <Tag label={'Powerful'} icon={<Bolt />} />
            </div>
        </div>
    )
}