import { React, useRef } from 'react'
import styles from './NavItemUser.style'
import ProfileMenu from '../../ProfileMenu/ProfileMenu';
import { Link } from 'react-router-dom';
import { Typography, Fade, Button, Badge } from '@mui/material';
import { Box } from '@mui/system';
import { icons } from '../../../constant';

import { cartSelector } from "../../../store/selectors"
import { useSelector } from 'react-redux';

const NavUserItems = ({ isHome, isPopUp, userInfo }) => {

    const cart = useSelector(cartSelector);
    const anchorRef = useRef(null)
    const clickRef = useRef(null)

    return (
        <Fade in={isHome ? isPopUp : true} timeout={500}>
            <Box sx={styles.userItemWrapper}>
                <Box sx={styles.navItem}>
                    <Link to='/checkout/cart' style={styles.navLink}>
                        <Box sx={styles.wrapper}>
                            <Badge badgeContent={cart.totalQuantity || 0} color="error">
                                <icons.Cart />
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
                                    aria-controls={'composition-menu'}
                                    aria-expanded={'true'}
                                    aria-haspopup="true"
                                    onClick={() => clickRef.current()}
                                    sx={styles.btnNav}
                                >
                                    <icons.User sx={styles.icon} />
                                    <Typography sx={styles.navTitle}>{userInfo.username}</Typography>
                                </Button>
                                <ProfileMenu anchorRef={anchorRef} clickRef={clickRef} />
                            </Box>
                    }
                </Box>
            </Box>
        </Fade>
    )
}

export default NavUserItems