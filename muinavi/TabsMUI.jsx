import { useState } from 'react';
import { Box, AppBar, Tabs, Tab, Typography } from '@mui/material';

import ReseptiHaku from "../components/ReseptiHaku"
import ReseptiListaus from "../components/ReseptiListaus"
import ReseptiLomake from "../components/ReseptiLomake"
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';


function TabsMUI({ reseptit }) {
    const [value, setValue] = useState(0)

    const handleChange = (e, val) => {
        setValue(val);
    }

    return (

        <Box>

            <AppBar position='static'>
                <Tabs value={value} onChange={handleChange} textColor='inherit' centered>
                    <Tab label="Haku" icon={<SearchIcon />} />
                    <Tab label="Listaus" icon={<AdbIcon />} />
                    <Tab label="Lomake" icon={<AdbIcon />} />
                </Tabs>
            </AppBar >

            {value === 0 && <ReseptiHaku reseptit={reseptit} />
            }
            {value === 1 && <ReseptiListaus reseptit={reseptit} />}
            {value === 2 && <ReseptiLomake reseptit={reseptit} />}

        </Box >
    )
}

export default TabsMUI