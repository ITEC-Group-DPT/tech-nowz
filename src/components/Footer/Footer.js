import React from 'react'
import styles from './Footer.style';
import { Container, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { colors, icons } from '../../constant';

const Footer = () => {
    return (
        <>
            <div style={styles.footer}>
                <Container maxWidth="xs" >
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <icons.Facebook sx={styles.icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <icons.Twitter sx={styles.icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <icons.Google sx={styles.icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <icons.Instagram sx={styles.icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <icons.LinkedIn sx={styles.icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <icons.GitHub sx={styles.icon} />
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="md">
                    <Grid container spacing={2} mt={1}>
                        <Grid item lg={3} xs={12}>
                            <Typography sx={styles.signUp}>Sign up for our newsletter</Typography>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TextField size='small' id="standard-basic" label="Email" variant="standard" sx={styles.textField} />
                        </Grid>
                        <Grid item lg={3} xs={12} sx={styles.btnWrapper}>
                            <Button sx={styles.subscribeBtn} variant="outlined">Subscribe</Button>
                        </Grid>
                    </Grid>
                </Container>

                <div style={styles.addressWrapper}>
                    <div style={styles.address}>
                        <Typography>227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Việt Nam</Typography>
                    </div>
                </div>

            </div>
            <div style={styles.bottomFooter}>
                <div style={styles.copyright}>
                    <Typography>© 2021 Copyright: TechNow</Typography>
                </div>
            </div>
        </>
    )
}

export default Footer
