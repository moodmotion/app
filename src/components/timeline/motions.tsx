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
import { Motion } from "./motion"

type MotionsProps = {
    duration: number
}

const Motions = ({ duration }: MotionsProps) => {

    return (
        <div style={{ width: duration, clear: 'left' }}>
            <Motion name='Stand' duration={196} />
            <Motion name='Halter / Elastics' duration={208} />
            <Motion name='Stand' duration={230} />
            <Motion name='Seat' duration={128} />
            <Motion name='Sprint' duration={154} />
            <Motion name='Arms' duration={179} />
            <Motion name='Box' duration={156} />
            <Motion name='Stand' duration={187} />
            <Motion name='Elastic' duration={193} />
            <Motion name='Mindful' duration={235} />
        </div>
    )
}

export default Motions