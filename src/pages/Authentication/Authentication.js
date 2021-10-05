import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Input, Button, Slide, Fade } from '@mui/material';
import useStyles from './authentication.style';


const Authentication = () => {
    const styles = useStyles();

    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const [state, setState] = useState(false);

    return (
        <div className={styles.main}>
            <div className={styles.container}

            >
                <form className={styles.formContainer} ref={leftRef}>
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

                    <Button
                        className={styles.signInButton} variant="contained"
                    >Sign In
                    </Button>

                </form>

                <form className={styles.formContainer} ref={rightRef}>
                    <h1>Sign Up</h1>
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

                    <Button
                        className={styles.signInButton} variant="contained"
                    >Sign Up
                    </Button>

                </form>

                <Slide
                    direction="right"
                    in={!state}
                    container={rightRef.current}
                    timeout = {500}
                >
                    <div className={styles.overlayRight}>
                        <h1>Welcome To TechNow</h1>
                        <p>Fill in some personal details and start shopping with us</p>
                        <Button
                            onClick={() => setState(!state)}
                            className={styles.overlayButton} variant="outlined">Sign Up</Button>
                    </div>
                </Slide>

                <Fade
                    in={state}
                    timeout = {550}
                >
                    <div className={styles.overlayLeft}>
                        <h1>Abcxyz</h1>
                        <p>Kcjasdads</p>
                        <Button
                            onClick={() => setState(!state)}
                            className={styles.overlayButton} variant="outlined">Sign In</Button>
                    </div>
                </Fade>
            </div>

        </div>
    )
}

export default Authentication
