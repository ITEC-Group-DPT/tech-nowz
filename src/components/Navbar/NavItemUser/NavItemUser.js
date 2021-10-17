import { React } from 'react'
import styles from './NavItemUser.style'
import { Link } from 'react-router-dom';
import { Typography, Fade } from '@mui/material';
import { Box } from '@mui/system';
import Badge from '@mui/material/Badge';
import { icons } from '../../../constant';

const NavUserItems = ({ isPopUp, userInfo }) => {
    return (
        <Fade in={isPopUp} timeout={500}>
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

