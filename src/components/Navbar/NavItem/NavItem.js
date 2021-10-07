import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './NavItem.style';

const NavItem = ({ href, title, icon }) => {
    const styles = useStyles();

    return (
        <Link to={href} className={styles.navLink}>
            <div className={styles.navItem}>
                <div className={styles.icon}>
                    {icon}
                </div>
                <Typography className={styles.navTitle}>{title}</Typography>

            </div>
        </Link>
    )
}

export default NavItem
