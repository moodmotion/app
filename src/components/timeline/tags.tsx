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
import { AcUnit, ArrowLeft, ArrowRight, Bolt, Cancel, Refresh } from '@mui/icons-material'
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