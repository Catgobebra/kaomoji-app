import React from "react";

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import BookmarkIcon from '@mui/icons-material/Bookmark';


const Menu = (props) => {

    const {category, handleChange } = props;
    
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <>
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, maxHeight: { xs: 20, sm: 50 }, bgcolor: 'background.paper'}}>
            <Tabs
              value={category}
              onChange={handleChange}
              variant="scrollable"
              style={{'margin-bottom' : "10%"}}
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              >
              <Tab icon={<BookmarkIcon />} iconPosition="start"  label="Избранное" {...a11yProps(0)}/>
              <Tab label="Все" {...a11yProps(1)}/>
              <Tab label="Положительные эмоции" {...a11yProps(2)}></Tab>
              <Tab label="Отрицательные эмоции" {...a11yProps(3)}/>
              <Tab label="Нейтральные эмоции" {...a11yProps(4)}/>
              <Tab label="Различные действия" {...a11yProps(5)}/>
              <Tab label="Животные" {...a11yProps(6)}/>
              <Tab label="Прочие вариации" {...a11yProps(7)}/>
              </Tabs>
        </Box>
        </>
    )
}

export default Menu