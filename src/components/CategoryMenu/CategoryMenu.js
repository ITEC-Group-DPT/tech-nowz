import React, { useState } from 'react'
import styles from './CategoryMenu.styles'
import { Link } from 'react-router-dom';
import { Typography, MenuList, MenuItem, Popper, Paper, Grow, ClickAwayListener, Box } from '@mui/material';
import { icons } from '../../constant';

const CategoryMenu = ({ anchorRef, clickRef, isDrawer, onClick}) => {
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
                                <Box sx={{display: isDrawer ? 'block' : 'flex'}}>
                                    <Box sx={{mr: isDrawer ? 0 : 5}}>
                                        <Link to='/category/CPU' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>CPU</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/Case' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>Case</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/GamingChair' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>Gaming Chair</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/Headphone' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>Headphone</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/Keyboard' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>Keyboard</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/Laptop' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>Laptop</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/Mainboard' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>Mainboard</Typography>
                                            </MenuItem>
                                        </Link>
                                    </Box>

                                    <Box>
                                        <Link to='/category/Monitor' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>Monitor</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/Mouse' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>Mouse</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/PSU' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>PSU</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/RAM' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>RAM</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/SSD' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>SSD</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/Speaker' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>Speaker</Typography>
                                            </MenuItem>
                                        </Link>
                                        <Link to='/category/VGA' style={styles.menuLink} onClick={onClick}>
                                            <MenuItem onClick={handleClose} sx={isDrawer ? styles.menuItemDrawer : styles.menuItem}>
                                                <Typography sx={styles.menuText}>VGA</Typography>
                                            </MenuItem>
                                        </Link>
                                    </Box>
                                </Box>
                            </MenuList>

                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    )
}

export default CategoryMenu
