import { React, useRef } from 'react'
import { styles, useStyles } from './NavItemUser.style'
import ProfileMenu from '../../ProfileMenu/ProfileMenu';
import { Link } from 'react-router-dom';
import { Typography, Fade, Button, Badge, Tooltip, Zoom, styled } from '@mui/material';
import { tooltipClasses } from '@mui/material/Tooltip';
import { Box } from '@mui/system';
import { icons } from '../../../constant';

import { cartSelector, cartNotiSelector, favoriteNotiSelector } from "../../../store/selectors"
import { useSelector } from 'react-redux';

//custom tooltip
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'black',
        fontSize: '18px',
        fontWeight: '400',
        padding: '15px',
        border: '1px solid gray',
    },
}));

const NavUserItems = ({ isHome, isPopUp, userInfo }) => {
    const classes = useStyles();
    const cart = useSelector(cartSelector)
    const cartNoti = useSelector(cartNotiSelector)
    const favoriteNoti = useSelector(favoriteNotiSelector)

    const anchorRef = useRef(null)
    const clickRef = useRef(null)

    return (
        <Fade in={isHome ? isPopUp : true} timeout={500}>
            <Box sx={styles.userItemWrapper}>
                <Box sx={styles.navItem}>
                    <BootstrapTooltip
                        title="Product is added to your cart"
                        TransitionComponent={Zoom}
                        open={cartNoti.addToCart}
                    >
                        <Link to='/checkout/cart' style={styles.navLink}>
                            <Box sx={styles.wrapper}>
                                <Badge badgeContent={cart.totalQuantity || 0} classes={{ badge: classes.badge }} color="error">
                                    <icons.Cart sx={styles.icon} />
                                </Badge>
                                <Typography sx={styles.navTitle}>Cart</Typography>
                            </Box>
                        </Link>
                    </BootstrapTooltip>
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
                                <BootstrapTooltip
                                    title={favoriteNoti.title}
                                    TransitionComponent={Zoom}
                                    open={favoriteNoti.isShown}
                                >
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
                                </BootstrapTooltip>
                                <ProfileMenu anchorRef={anchorRef} clickRef={clickRef} />
                            </Box>
                    }
                </Box>
            </Box>
        </Fade>
    )
}

export default NavUserItems