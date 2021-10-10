import { React, useState, useEffect } from 'react'
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
    const [isPopUp, setIsPopUp] = useState(false)
    useEffect(() => {
        const appBar = document.querySelector(".appBar");
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                setIsPopUp(!entry.isIntersecting)
            })
        }, { threshold: 1})
        observer.observe(appBar)
    }, [])

    return (
        <AppBar position="sticky" sx={{ backgroundColor: colors.primary, top: '-1px' }} className="appBar">
            <Toolbar>
                <Container maxWidth='xl'>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <NavItem href='/' title='Home' icon={<icons.Home />} />
                        </Grid>
                        <Grid item xs={2}>
                            <NavItem href='/' title='Hot Discount' icon={<icons.Offer />} />
                        </Grid>
                        <Grid item xs={2}>
                            <NavItem href='/' title='Shipping Policy' icon={<icons.Truck />} />
                        </Grid>
                        <Grid item xs={2}>
                            <NavItem href='/contactus' title='Contact Us' icon={<icons.Phone />} />
                        </Grid>
                        <Grid item xs={4}>
                            <NavItemUser isPopUp={isPopUp} />
                        </Grid>
                    </Grid>
                </Container>

            </Toolbar>
        </AppBar>
    );

}

export default Navbar
