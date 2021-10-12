import React from 'react'
import useStyles from './NavItem.style';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from './NavItem';

import { colors, icons } from '../../constant';

const Navbar = () => {
    const styles = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="sticky" sx= {{backgroundColor: colors.primary}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <NavItem href='/' title='Home' icon={<icons.Home className={styles.icon}/>}/>
                    <NavItem href='/' title='Hot Discount' icon={<icons.Offer className={styles.icon}/>}/>
                    <NavItem href='/' title='Shipping Policy' icon={<icons.Truck className={styles.icon}/>}/>
                    <NavItem href='/contactus' title='Contact Us' icon={<icons.Phone className={styles.icon}/>}/>

                </Toolbar>
            </AppBar>
        </Box>
    );

}

export default Navbar
