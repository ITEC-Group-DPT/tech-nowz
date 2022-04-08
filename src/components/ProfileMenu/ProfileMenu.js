import { React, useState, useRef, useEffect } from 'react'
import styles from './ProfileMenu.style'
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from "../../store/actions/authAction";
import { Typography, MenuList, MenuItem, Divider, Popper, Paper, Grow, ClickAwayListener } from '@mui/material';
import { icons } from '../../constant';
import { userInfoSelector } from "../../store/selectors";
import {useSelector } from "react-redux";
const ProfileMenu = ({ anchorRef, clickRef }) => {
    const { userID, userRole } = useSelector(userInfoSelector);
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const dispatch = useDispatch()
    const history = useHistory()
    const handleSignOut = () => {
        dispatch(logOut(history));
    }

    clickRef.current = handleToggle // assign button onclick of parent component to handleToggle function

    return (
        <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            style={styles.wrapper}
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
                                {/* {userRole==0 && (<Link to='/profile/createproduct' style={styles.menuLink}>
                                    <MenuItem onClick={handleClose} sx={styles.menuItem}>
                                        <icons.Add sx={styles.menuIcon} />
                                        <Typography sx={styles.menuText}>Create Product</Typography>
                                    </MenuItem>
                                </Link>)} */}
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
    )
}

export default ProfileMenu
