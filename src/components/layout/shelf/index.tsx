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
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import AnimationIcon from '@mui/icons-material/Animation'
import FolderIcon from '@mui/icons-material/Folder'
import { ShelfItem } from './shelf-item'
import { Divider, Typography } from '@mui/material'

export function Shelf() {

    return (
        <MuiDrawer variant="permanent">
            <ShelfItem>
                <Typography />
            </ShelfItem>
            <Divider />
            <List>
                <ShelfItem>
                    <FolderIcon />
                </ShelfItem>
                <ShelfItem>
                    <VolumeUpIcon />
                </ShelfItem>
                <ShelfItem>
                    <LightbulbIcon />
                </ShelfItem>
                <ShelfItem>
                    <AnimationIcon />
                </ShelfItem>
                <ShelfItem>
                    <TextFieldsIcon />
                </ShelfItem>
            </List>
        </MuiDrawer>
    );
}