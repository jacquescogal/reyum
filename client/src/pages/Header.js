import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Header=({setMobileOpen,pageTitle})=> {
  const navigate=useNavigate();

  const [menuPing,setMenuPing]=useState(true);

  return (
    <React.Fragment>
      <blockquote class="text-xs md:text-base font-semibold italic text-center text-slate-900 bg-black text-white mb-0 z-1 h-fit">
      {'Get '}
      <span class="relative">
        <span class="block absolute -inset-0 h-1/4 top-3/4 bg-pink-500 z-0" aria-hidden="true"></span>
        <span class="relative text-white text-md md:text-xl">$5</span>
      </span>
      <span class="relative text-white">{" off your next purchase when you refer a friend"}</span>
    </blockquote>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: 'block'  }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={()=>{setMobileOpen(true);setMenuPing(false)}}
                edge="start"
              >
                <MenuIcon />
                {(menuPing==true)?<MenuIcon className='absolute animate-ping'/>:null}
              </IconButton>
            </Grid>
            
            <Grid item xs >
              <h1 className='absolute top-0 font-serif '>{pageTitle}</h1>
            </Grid>
            
            <Grid item>
            </Grid>
            
            <Grid item>
              {/* <Tooltip title="Open cart">
                <IconButton color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip> */}
            </Grid>
              {/* <Tooltip title="Guest account">
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="Guest" />
              </IconButton>
              </Tooltip> */}
              <span class="hover:underline hover:cursor-pointer font-sans" onClick={()=>{navigate("Login")}}>Login/Register</span>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;