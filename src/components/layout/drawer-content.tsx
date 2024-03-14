import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessibilityNew, Lightbulb, MusicNote } from '@mui/icons-material';
import { Tracks } from '@components/library/tracks';
import { Motions } from '@components/library/motions';
import { Lights } from '@components/library/lights';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export const DrawerContent = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 0, pt: 2 }}>
                <Tab icon={<Lightbulb sx={{ fontSize: 25 }} />} {...a11yProps(0)} />
                <Tab icon={<AccessibilityNew sx={{ fontSize: 25 }} />} {...a11yProps(1)} />
                <Tab icon={<MusicNote sx={{ fontSize: 25 }} />} {...a11yProps(2)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Lights />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Motions />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Tracks />
            </TabPanel>
        </Box>
    );
}