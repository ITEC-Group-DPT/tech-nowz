import React from 'react'
import useStyles from './Footer.style';
import { Container, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { colors, icons } from '../../constant';

const Footer = () => {
    const styles = useStyles();

    return (
        <>
            <div className={styles.footer}>
                <Container maxWidth="xs" >
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <icons.Facebook className={styles.icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <icons.Twitter className={styles.icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <icons.Google className={styles.icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <icons.Instagram className={styles.icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <icons.LinkedIn className={styles.icon} />
                        </Grid>
                        <Grid item xs={2}>
                            <icons.GitHub className={styles.icon} />
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="md">
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={3}>
                            <Typography className={styles.signUp}>Sign up for our newsletter</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField InputProps={{
                                className: styles.textField
                            }} size='small' id="standard-basic" label="Email" variant="standard" className={styles.textField} />
                        </Grid>
                        <Grid item xs={3} className={styles.btnWrapper}>
                            <Button className={styles.subscribeBtn} variant="outlined">Subscribe</Button>
                        </Grid>
                    </Grid>
                </Container>

                <div className={styles.addressWrapper}>
                    <div className={styles.address}>
                        <Typography>227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Việt Nam</Typography>
                    </div>
                </div>

            </div>
            <div className={styles.bottomFooter}>
                <div className={styles.copyright}>
                    <Typography>© 2021 Copyright: TechNow</Typography>
                </div>
            </div>
        </>
    )
}

export default Footer
