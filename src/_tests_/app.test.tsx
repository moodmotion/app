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

describe('something truthy and falsy', () => {

    it('true to be true', () => {
        expect(true).toBe(true)
    })

    it('false to be false', () => {
        expect(false).toBe(false)
    })

})
