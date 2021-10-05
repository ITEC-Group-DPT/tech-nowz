import React from 'react'
import { Link } from 'react-router-dom';
import { Input, Button, Slide } from '@mui/material';
import useStyles from './authentication.style';


const Authentication = () => {
    const styles = useStyles();

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form className={styles.formContainer}>
                    <h1>Sign in</h1>
                    <div className={styles.socialContainer}>
                        <a href="#" className={styles.socialLink}><i class="fab fa-facebook-f"></i></a>
                        <a href="#" className={styles.socialLink}><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" className={styles.socialLink}><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <p>or use your TechNow account</p>

                    <Input
                        className={styles.input}
                        placeholder="Email"
                        disableUnderline
                        fullWidth
                    />

                    <Input
                        className={styles.input}
                        placeholder="Password"
                        disableUnderline
                        fullWidth
                    />

                    <Link className={styles.back} path="/"><i class="bi bi-arrow-left"></i> Back to home</Link>

                    <Button className={styles.signInButton} variant="contained">Sign In</Button>

                </form>

                <div className={styles.overlayContainer}>
                    <h1>Welcome To TechNow</h1>
                    <p>Fill in some personal details and start shopping with us</p>
                    <Button className={styles.overlayButton} variant="outlined">Sign In</Button>
                </div>
            </div>
            {/* <div className={styles.container}>
                <div className={styles.overlayContainer}>
                    <h1>Welcome To TechNow</h1>
                    <p>Fill in some personal details and start shopping with us</p>
                    <Button className={styles.overlayButton} variant="outlined">Sign In</Button>
                </div>
                <form className={styles.formContainer}>
                    <h1>Sign in</h1>
                    <div className={styles.socialContainer}>
                        <a href="#" className={styles.socialLink}><i class="fab fa-facebook-f"></i></a>
                        <a href="#" className={styles.socialLink}><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" className={styles.socialLink}><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <p>or use your TechNow account</p>

                    <Input
                        className={styles.input}
                        placeholder="Email"
                        disableUnderline
                        fullWidth
                    />

                    <Input
                        className={styles.input}
                        placeholder="Password"
                        disableUnderline
                        fullWidth
                    />

                    <Link className={styles.back} path="/"><i class="bi bi-arrow-left"></i> Back to home</Link>

                    <Button className={styles.signInButton} variant="contained">Sign In</Button>

                </form>


            </div> */}
        </div>
    )
}

export default Authentication
