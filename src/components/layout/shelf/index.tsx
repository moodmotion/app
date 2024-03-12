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
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import TextFieldsIcon from '@mui/icons-material/TextFields'
import AnimationIcon from '@mui/icons-material/Animation'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import SaveIcon from '@mui/icons-material/Save'
import UndoIcon from '@mui/icons-material/Undo'

import { ShelfItem } from './shelf-item'

export function Shelf() {

    return (
        <MuiDrawer variant="permanent">
            <List sx={{ height: '50vh' }}>
                <ShelfItem>
                    <FolderOpenIcon />
                </ShelfItem>
                <ShelfItem>
                    <UndoIcon />
                </ShelfItem>
                <ShelfItem>
                    <SaveIcon />
                </ShelfItem>
            </List>

            <List sx={{ height: '50vh' }}>
                <ShelfItem>
                    <AudiotrackIcon />
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