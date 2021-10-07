import React from 'react'
//import styles from './NavItemUser.style'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import { icons } from '../../../constant';
import useStyles from './NavItemUser.style'

const NavUserItems = () => {
    const styles = useStyles();
    return (
        <div className={styles.userItemWrapper}>
            <div className={styles.navItem}>
                <Link to='/checkout/cart' className={styles.navLink}>
                    <Badge badgeContent={1} color="error">
                        <icons.Cart className={styles.icon} />
                    </Badge>
                    <Typography className={styles.navTitle}>Cart</Typography>
                </Link>

                <Link to='/authentication' className={styles.navLink}>
                    <icons.User className={styles.icon} />
                    <Typography className={styles.navTitle}>Login</Typography>
                </Link>
            </div>
        </div>
    )
}

export default NavUserItems

