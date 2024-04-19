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
import { Divider, Grid, List } from '@mui/material'

import AfroHouse from '@assets/images/afro-house.png'
import MelodicHouse from '@assets/images/melodic-house-techno.png'
import { useState } from 'react'
import { Item } from '@components/list/item'
import { SubHeader } from '@components/list/sub-header'
import { Filter } from '@components/list/filter'

export const Tracks = () => {

    const [currentFilterIndex, setCurrentFilterIndex] = useState<string>('')
    const [currentTrackIndex, setCurrentTrackIndex] = useState<string>('')

    return (
        <Grid
            container
            height={'100%'}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ pl: 4 }}>

            <Grid item xs={4}>
                <List
                    sx={{
                        bgcolor: 'background.paper',
                        overflow: 'auto',
                        height: '50vh',
                        '& ul': { padding: 0 },
                    }}
                    subheader={<li />}>
                    <li key={`section-uptempo`}>
                        <ul>
                            <SubHeader label='Uptempo' />
                            <Filter
                                label='Melodic House'
                                subHeader='Some other text'
                                id={'65ef38ba5316b19ab4921c51'}
                                index={currentFilterIndex}
                                itemClick={() => setCurrentFilterIndex('65ef38ba5316b19ab4921c51')}
                                avatar={MelodicHouse} />
                            <Divider />

                            <Filter
                                label='Dance'
                                subHeader='Some other text'
                                id={'65ef38ba5316b19ab4921c52'}
                                index={currentFilterIndex}
                                itemClick={() => setCurrentFilterIndex('65ef38ba5316b19ab4921c52')}
                                avatar={AfroHouse} />
                            <Divider />

                            <Filter
                                label='Hardstyle'
                                subHeader='Some other text'
                                id={'65ef38ba5316b19ab4921c53'}
                                index={currentFilterIndex}
                                itemClick={() => setCurrentFilterIndex('65ef38ba5316b19ab4921c53')}
                                avatar={MelodicHouse} />
                        </ul>
                    </li>
                    <li key={`section-focus`}>
                        <ul>
                            <SubHeader label='Focus' />
                            <Filter
                                label='Japanese Bells'
                                subHeader='Some other text'
                                id={'65ef38ba5316b19ab4921c54'}
                                index={currentFilterIndex}
                                itemClick={() => setCurrentFilterIndex('65ef38ba5316b19ab4921c54')}
                                avatar={AfroHouse} />
                            <Divider />

                            <Filter
                                label='Buddhist Wind'
                                subHeader='Some other text'
                                id={'65ef38ba5316b19ab4921c55'}
                                index={currentFilterIndex}
                                itemClick={() => setCurrentFilterIndex('65ef38ba5316b19ab4921c55')}
                                avatar={MelodicHouse} />
                        </ul>
                    </li>
                </List>
            </Grid>

            <Grid item xs={8}>
                <List
                    sx={{
                        bgcolor: 'background.paper',
                        overflow: 'auto',
                        height: '50vh',
                        '& ul': { padding: 0 },
                    }}>
                    <Item
                        label='Cool track number 1'
                        subHeader='Some other text'
                        id={'65ef38ba5316b19ab4921c56'}
                        index={currentTrackIndex}
                        itemClick={() => setCurrentTrackIndex('65ef38ba5316b19ab4921c56')}
                        avatar={MelodicHouse} />
                    <Divider />

                    <Item
                        label='Dope music'
                        subHeader='Some other text'
                        id={'65ef38ba5316b19ab4921c57'}
                        index={currentTrackIndex}
                        itemClick={() => setCurrentTrackIndex('65ef38ba5316b19ab4921c57')}
                        avatar={AfroHouse} />
                    <Divider />

                    <Item
                        label='Baddabing'
                        subHeader='Some other text'
                        id={'65ef38ba5316b19ab4921c58'}
                        index={currentTrackIndex}
                        itemClick={() => setCurrentTrackIndex('65ef38ba5316b19ab4921c58')}
                        avatar={MelodicHouse} />
                </List>
            </Grid>
        </Grid>
    )
}