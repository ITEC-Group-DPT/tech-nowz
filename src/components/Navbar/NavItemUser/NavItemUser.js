import { React } from 'react'
import styles from './NavItemUser.style'
import { Link } from 'react-router-dom';
import { Typography, Fade } from '@mui/material';
import { Box } from '@mui/system';
import Badge from '@mui/material/Badge';
import { icons } from '../../../constant';

import {cartSelector} from '../../../store/selectors'
import { useSelector } from 'react-redux';

const NavUserItems = ({ isHome, isPopUp, userInfo }) => {

    const cart = useSelector(cartSelector);
    return (
        <Fade in={isHome ? isPopUp : true} timeout={500}>
            <Box sx={styles.userItemWrapper}>
                <Box sx={styles.navItem}>
                    <Link to='/checkout/cart' style={styles.navLink}>
                        <Box sx={styles.wrapper}>
                            <Badge badgeContent={cart.totalQuantity || 0} color="error">
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
                        <Link to='/' style={styles.navLink}>
                            <Box sx={styles.wrapper}>
                                <icons.User sx={styles.icon} />
                                <Typography sx={styles.navTitle}>{userInfo.username}</Typography>
                            </Box>
                        </Link>
                    }
                </Box>
            </Box>
        </Fade>
    )
}

export default NavUserItems

