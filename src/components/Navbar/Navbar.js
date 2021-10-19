import { React, useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NavItem from './NavItem/NavItem';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import NavItemUser from './NavItemUser/NavItemUser';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { colors, icons } from '../../constant';
import useStyles from './Navbar.styles';
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const styles = useStyles();
    
    const userInfo = useSelector(state => state.Authentication.user);
    
    console.log('userInfo: ', userInfo);
    // popUpNav
    const [isPopUp, setIsPopUp] = useState(false)
    useEffect(() => {
        const appBar = document.querySelector(".appBar");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsPopUp(!entry.isIntersecting)
            })
        }, { threshold: 1 })
        observer.observe(appBar)
    }, [])

    // responsiveNav(drawer)
    const isMatch = useMediaQuery("(max-width: 950px)")

    const openSide = 'left' // can be 'right', 'top' or 'bottom'

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button key='home'>
                    <NavItem href='/' title='Home' icon={<icons.Home />} />
                </ListItem>

                <ListItem button key='Hot Discount'>
                    <NavItem href='/' title='Hot Discount' icon={<icons.Offer />} />
                </ListItem>

                <ListItem button key='Shipping Policy'>
                    <NavItem href='/' title='Shipping Policy' icon={<icons.Truck />} />
                </ListItem>

                <ListItem button key='Contact Us'>
                    <NavItem href='/contactus' title='Contact Us' icon={<icons.Phone />} />
                </ListItem>

            </List>
            <Divider />

            <List sx={{ marginTop: 'auto' }}>
                <ListItem button key='cart'>
                    <NavItem href='/checkout/cart' title='Cart' icon={<icons.Cart />} />
                </ListItem>

                <ListItem button key='user'>
                    {
                        userInfo.isEmpty ?
                        <NavItem href='/authentication' title='Login' icon={<icons.User />} />
                        : 
                        <NavItem href='/' title={userInfo.username} icon={<icons.User />} />
                    }
                </ListItem>
            </List>

        </Box>
    );

    // main
    return (
        <AppBar position="sticky" sx={{ backgroundColor: colors.primary, top: '-1px' }} className="appBar">
            <Toolbar>
                <Container maxWidth='xl'>
                    <Grid container spacing={2}>
                        {isMatch ? (
                            <Grid item xs={3}>
                                <IconButton aria-label="menu" size="medium" onClick={toggleDrawer(openSide, true)}>
                                    <icons.Menu style={{ color: 'white' }} />
                                </IconButton>
                                <Drawer
                                    classes={{ paper: styles.paper }}
                                    anchor={openSide}
                                    open={state[openSide]}
                                    onClose={toggleDrawer(openSide, false)}
                                >
                                    {list(openSide)}
                                </Drawer>
                            </Grid>

                        ) : (
                            <>
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
                            </>
                        )}
                        <Grid item xs={9} md={4}>
                            <NavItemUser 
                            userInfo = {userInfo}
                            isPopUp={isPopUp} 
                            />
                        </Grid>
                    </Grid>
                </Container>

            </Toolbar>
        </AppBar>
    );

}

export default Navbar
