import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import {Name} from '@components/branding'

describe('Branding', () => {

    it('renders name h1', async () => {

        render(<Name variant={'h1'}/>)
        await screen.findByRole('heading')
        expect(screen.getByRole('heading').textContent).toBe('MoodMotion')
    })

})
