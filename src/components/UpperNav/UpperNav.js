import { React, useRef } from 'react'
import { useSelector } from 'react-redux';
import styles from './UpperNav.style'
import { Link } from 'react-router-dom'
import { Box, Typography, Button, Grid, Container, TextField, InputAdornment, Badge } from '@mui/material';
import logo from '../../img/logo_sub.webp'
import { icons } from '../../constant';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

const UpperNav = () => {
    const userInfo = useSelector(state => state.Authentication.user)

    const anchorRef = useRef(null)
    const clickRef = useRef(null)

    return (
        <Container maxWidth='xl' sx={styles.container}>
            <Grid container spacing={2}>
                <Grid item lg={3} xs={12} sx={styles.logoWrapper}>
                    <Link to='/' >
                        <img style={styles.logo} src={logo} alt="" />
                    </Link>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <TextField fullWidth size='small'
                        label="Search"
                        placeholder="Product names..."
                        multiline id="fullWidth"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <icons.Search />
                                </InputAdornment>
                            ),
                        }} />
                </Grid>
                <Grid item lg={3} xs={12} sx={styles.menuContainer}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} sx={styles.menuWrapper}>
                            <Link to='/checkout/cart' style={styles.menuItem}>
                                <Badge badgeContent={1} color="error">
                                    <icons.Cart />
                                </Badge>
                                <Typography sx={styles.menuTitle}>Cart</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            {
                                userInfo.isEmpty ?
                                    <Link to='/authentication' style={styles.menuItem}>
                                        <icons.User />
                                        <Typography sx={styles.menuTitle}>Login</Typography>
                                    </Link>
                                    :
                                    <Box>
                                        <Button
                                            ref={anchorRef}
                                            id="composition-button"
                                            aria-controls={open ? 'composition-menu' : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-haspopup="true"
                                            onClick={() => clickRef.current()}
                                            sx={styles.btnNav}
                                        >
                                            <icons.User />
                                            <Typography sx={styles.menuTitle}>{userInfo.username}</Typography>
                                        </Button>
                                        <ProfileMenu anchorRef={anchorRef} clickRef={clickRef} />
                                    </Box>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UpperNav
