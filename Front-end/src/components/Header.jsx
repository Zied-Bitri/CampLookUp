import React, { useState } from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [value, setvalue]=useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:'#232F3D'}} position='Sticky'>
            <Toolbar>
                <Typography>
                    <TravelExploreIcon/>
                </Typography>
                <Tabs sx={{ml:'auto'}}
                textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=> setvalue(val)}>
                    <Tab LinkComponent={NavLink} to= "/" label = "Home"/>
                    <Tab LinkComponent={NavLink} to= "/addsite" label="Add Site"/>
                    <Tab LinkComponent={NavLink} to= "/booking" label="Booking"/>
                    <Tab LinkComponent={NavLink} to= "/aboutus" label="About Us"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;