import React,  {useState } from 'react';
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { NavLink } from 'react-router-dom';

const HeaderLogInSignUp = () => {
  const [value, setvalue]=useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:'#232F3D'}} position='sticky'>
            <Toolbar>
                <Typography>
                    <TravelExploreIcon/>
                </Typography>
                <Tabs sx={{ml:'auto'}}
                textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=> setvalue(val)}>
                    <Tab LinkComponent={NavLink} to="/sites" label = "Camping Sites"/>
                    <Tab LinkComponent={NavLink} to="/login" label="LogIn"/>
                    <Tab LinkComponent={NavLink} to="/register" label="SignUp"/>
                    <Tab LinkComponent={NavLink} to="/aboutus" label="About Us"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default HeaderLogInSignUp;