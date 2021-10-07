import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import NavItem from './NavItem/NavItem';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { colors, icons } from '../../constant';
import NavItemUser from './NavItemUser/NavItemUser';

const Navbar = () => {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: colors.primary }}>
            <Toolbar>
                <Container maxWidth='xl'>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <NavItem href='/' title='Home' icon={<icons.Home/>} />
                        </Grid>
                        <Grid item xs={2}>
                            <NavItem href='/' title='Hot Discount' icon={<icons.Offer/>} />
                        </Grid>
                        <Grid item xs={2}>
                            <NavItem href='/' title='Shipping Policy' icon={<icons.Truck/>} />
                        </Grid>
                        <Grid item xs={2}>
                            <NavItem href='/contactus' title='Contact Us' icon={<icons.Phone/>} />
                        </Grid>
                        <Grid item xs={4}>
                            <NavItemUser/>
                        </Grid>
                    </Grid>
                </Container>

            </Toolbar>
        </AppBar>
    );

}

export default Navbar
