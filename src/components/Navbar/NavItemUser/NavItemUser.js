import { React, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import { icons } from '../../../constant';
import useStyles from './NavItemUser.style'

const fadeIn = (el) => {
    el.style.display = "flex"
    setTimeout(function () {
        el.style.opacity = "1"
    }, 250)
}

const fadeOut = (el) => {
    el.style.opacity = "0"
    setTimeout(function () {
        el.style.display = "none"
    }, 250)
}

const NavUserItems = ({ isPopUp }) => {
    const styles = useStyles();

    useEffect(() => {
        const popUpNav = document.querySelector('#popUpNav')
        if (isPopUp) fadeIn(popUpNav)
        else fadeOut(popUpNav)
    })

    return (
        <div className={styles.userItemWrapper} id='popUpNav'>
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

