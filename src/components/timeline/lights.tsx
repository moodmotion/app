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
import { Light } from './light'

type LightsProps = {
    duration: number
}

const Lights = ({ duration }: LightsProps) => {

    return (
        <div style={{ width: duration, paddingTop: 30, clear: 'left' }}>
            <Light color='blue' duration={196} />
            <Light color='orange' duration={50} />
            <Light color='red' duration={50} />
            <Light color='blue' duration={50} />
            <Light color='green' duration={50} />
            <Light color='blue' duration={50} />
            <Light color='orange' duration={50} />
            <Light color='green' duration={50} />
            <Light color='red' duration={50} />
            <Light color='blue' duration={200} />
        </div>
    )
}

export default Lights