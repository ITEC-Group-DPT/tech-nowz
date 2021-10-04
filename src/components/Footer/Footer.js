import React from 'react'
import useStyles from './Footer.style';
import { Container, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { colors, icons } from '../../constant';

const Footer = () => {
    const styles = useStyles();

    return (
        <div className={styles.footer}>
            <Container maxwidth="xl">
                
                <div className={styles.wrapper}>
                    <div className={styles.socialMedia}>
                        <icons.Facebook className={styles.icon} />
                        <icons.Twitter className={styles.icon} />
                        <icons.Google className={styles.icon} />
                        <icons.Instagram className={styles.icon} />
                        <icons.LinkedIn className={styles.icon} />
                        <icons.GitHub className={styles.icon} />
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.newsletter}>
                        <Typography className={styles.signUp}>Sign up for our newsletter</Typography>
                        <TextField InputProps={{
                            className: styles.textField
                        }} size='small' id="standard-basic" label="Email" variant="standard" className={styles.textField} />
                        <Button className={styles.subscribeBtn} variant="outlined">Subscribe</Button>
                    </div>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.address}>
                        <Typography>227 Đ. Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh, Việt Nam</Typography>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Footer
