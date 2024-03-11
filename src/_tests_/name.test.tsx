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
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Name } from '@components/branding'

describe('Branding', () => {

    it('renders name h1', async () => {

        render(<Name variant={'h1'} />)
        await screen.findByRole('heading')
        expect(screen.getByRole('heading').textContent).toBe('MoodMotion')
    })
})
