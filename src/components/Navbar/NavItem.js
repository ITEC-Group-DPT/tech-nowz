import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './NavItem.style';

const NavItem = (props) => {
    const styles = useStyles();
    return (
        <Link to={props.href} className={styles.navLink}>
            <div className={styles.navItem}>

                {props.icon}
                <Typography className={styles.navTitle}>{props.title}</Typography>

            </div>
        </Link>
    )
}

export default NavItem
