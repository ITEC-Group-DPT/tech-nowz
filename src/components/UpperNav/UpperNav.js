import React from 'react'
import useStyles from './UpperNav.style'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';

import logo from '../../img/logo_sub.webp'
import { icons } from '../../constant';
import { Typography } from '@mui/material';



const UpperNav = () => {
    const styles = useStyles();

    return (
        <Container maxWidth='xl' className={styles.container}>
            <Grid container spacing={2}>
                <Grid item lg={3} xs={12} className={styles.logoWrapper}>
                    <Link to='/' >
                        <img className={styles.logo} src={logo} alt="" />
                    </Link>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <TextField fullWidth size='small' label="What are you looking for today?" id="fullWidth" />
                </Grid>
                <Grid item lg={3} xs={12} className={styles.menuContainer}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Link to='/checkout/cart' className={styles.menuItem}>
                                <Badge badgeContent={1} color="error">
                                    <icons.Cart />
                                </Badge>
                                <Typography className={styles.menuTitle}>Cart</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link to='/authentication' className={styles.menuItem}>
                                <icons.User />
                                <Typography className={styles.menuTitle}>Login</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UpperNav
