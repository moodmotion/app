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
import { Divider, List } from '@mui/material'

import AfroHouse from '@assets/images/afro-house.png'
import MelodicHouse from '@assets/images/melodic-house-techno.png'
import { useState } from 'react'
import { IndexItem } from '@components/list/index-item'
import { SubHeader } from '@components/list/sub-header'

export const Tracks = () => {

    const [index, setIndex] = useState(-1)

    return (
        <List
            sx={{
                width: 300,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                height: '50vh',
                '& ul': { padding: 0 },
            }}
            subheader={<li />}>

            <li key={`section-uptempo`}>
                <ul>
                    <SubHeader label='Uptempo' />
                    <IndexItem label='Melodic House' subHeader='Some other text' id={0} index={index} itemClick={() => setIndex(0)} avatar={MelodicHouse} />
                    <Divider />
                    <IndexItem label='Dance' subHeader='Some other text' id={1} index={index} itemClick={() => setIndex(1)} avatar={AfroHouse} />
                    <Divider />
                    <IndexItem label='Hardstyle' subHeader='Some other text' id={2} index={index} itemClick={() => setIndex(2)} avatar={MelodicHouse} />
                </ul>
            </li>
            <li key={`section-focus`}>
                <ul>
                    <SubHeader label='Focus' />
                    <IndexItem label='Japanese Bells' subHeader='Some other text' id={3} index={index} itemClick={() => setIndex(3)} avatar={AfroHouse} />
                    <Divider />
                    <IndexItem label='Buddhist Wind' subHeader='Some other text' id={4} index={index} itemClick={() => setIndex(4)} avatar={MelodicHouse} />
                </ul>
            </li>

        </List>
    )
}