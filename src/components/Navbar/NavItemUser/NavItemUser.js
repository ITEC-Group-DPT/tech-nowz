import { React, useState, useRef, useEffect } from 'react'
import styles from './NavItemUser.style'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from "../../../store/actions/authAction";
import { Typography, Fade, Button, MenuList, MenuItem, Badge, Divider, Popper, Paper, Grow, ClickAwayListener } from '@mui/material';
import { Box } from '@mui/system';
import { icons } from '../../../constant';

const NavUserItems = ({ isHome, isPopUp, userInfo }) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    const dispatch = useDispatch()
    const history = useHistory()
    const handleSignOut = () => {
        dispatch(logOut(history));
    }

    return (
        <Fade in={isHome ? isPopUp : true} timeout={500}>
            <Box sx={styles.userItemWrapper}>
                <Box sx={styles.navItem}>
                    <Link to='/checkout/cart' style={styles.navLink}>
                        <Box sx={styles.wrapper}>
                            <Badge badgeContent={1} color="error">
                                <icons.Cart sx={styles.icon} />
                            </Badge>
                            <Typography sx={styles.navTitle}>Cart</Typography>
                        </Box>
                    </Link>
                    {
                        userInfo.isEmpty ?
                            <Link to='/authentication' style={styles.navLink}>
                                <Box sx={styles.wrapper}>
                                    <icons.User sx={styles.icon} />
                                    <Typography sx={styles.navTitle}>Login</Typography>
                                </Box>
                            </Link>
                            :
                            <Box>
                                <Button
                                    ref={anchorRef}
                                    id="composition-button"
                                    aria-controls={open ? 'composition-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                    sx={styles.btnNav}
                                >
                                    <icons.User sx={styles.icon} />
                                    <Typography sx={styles.navTitle}>{userInfo.username}</Typography>
                                </Button>
                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    placement="bottom-start"
                                    transition
                                    disablePortal
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                            }}
                                        >
                                            <Paper sx={styles.menu}>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList
                                                        autoFocusItem={open}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                    >
                                                        <Link to='/profile/orderhistory' style={styles.menuLink}>
                                                            <MenuItem onClick={handleClose} sx={styles.menuItem}>
                                                                <icons.Order sx={styles.menuIcon} />
                                                                <Typography sx={styles.menuText}>Order</Typography>
                                                            </MenuItem>
                                                        </Link>
                                                        <Link to='/profile/favorite' style={styles.menuLink}>
                                                            <MenuItem onClick={handleClose} sx={styles.menuItem}>
                                                                <icons.NotFavorite sx={styles.menuIcon} />
                                                                <Typography sx={styles.menuText}>Favorite</Typography>
                                                            </MenuItem>
                                                        </Link>
                                                        <Link to='/profile/addressbook' style={styles.menuLink}>
                                                            <MenuItem onClick={handleClose} sx={styles.menuItem}>
                                                                <icons.Address sx={styles.menuIcon} />
                                                                <Typography sx={styles.menuText}>Address</Typography>
                                                            </MenuItem>
                                                        </Link>
                                                        <Divider />
                                                        <MenuItem onClick={handleSignOut} sx={styles.menuItemSignOut}>
                                                            <icons.SignOut sx={styles.menuIcon} />
                                                            <Typography sx={styles.menuText}>Sign out</Typography>
                                                        </MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </Box>
                    }
                </Box>
            </Box>
        </Fade>
    )
}

export default NavUserItems

