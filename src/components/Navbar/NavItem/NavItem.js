import React from 'react'
import useStyles from './NavItem.style';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom'

const NavItem = ({ href, title, icon }) => {
    const styles = useStyles();

    return (
        <Link to={href} className={styles.navLink}>
            <Box className={styles.navItem}>
                <Box className={styles.icon}>
                    {icon}
                </Box>
                <Typography className={styles.navTitle}>{title}</Typography>
            </Box>
        </Link>
    )
}

export default NavItem
