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
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductName } from '@components/branding'

describe('Branding', () => {

    it('renders name h1', async () => {

        render(<ProductName variant={'h1'} />)
        await screen.findByRole('heading')
        expect(screen.getByRole('heading').textContent).toBe('MoodMotion')
    })
})
