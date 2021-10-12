import { React } from 'react'
import useStyles from './NavItemUser.style'
import { Link } from 'react-router-dom';
import { Typography, Fade } from '@mui/material';
import { Box } from '@mui/system';
import Badge from '@mui/material/Badge';
import { icons } from '../../../constant';

const NavUserItems = ({ isPopUp }) => {
    const styles = useStyles();
    return (
        <Fade in = {isPopUp} timeout={500}>
            <Box className={styles.userItemWrapper}>
                <Box className={styles.navItem}>
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
                </Box>
            </Box>
        </Fade>
    )
}

export default NavUserItems

