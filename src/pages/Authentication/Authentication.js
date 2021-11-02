import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Input, Button, Slide, Fade, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userInfoSelector } from '../../store/selectors'
import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import styles from './authentication.style';
import { Box } from '@mui/system';

const Authentication = () => {
    const user = useSelector(userInfoSelector)
    const history = useHistory()
    
    if(user.isEmpty !== true) {
        history.push("/");
    }

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <Box sx={styles.main}>
            <Box sx={styles.container}>
                <SignInForm
                    isSignIn={isSignIn}
                    setIsSignIn={setIsSignIn}
                    references={leftRef}
                />

                <SignUpForm
                    isSignIn={isSignIn}
                    setIsSignIn={setIsSignIn}
                    references={rightRef}
                />

                <Slide
                    appear={false}
                    direction="right"
                    in={isSignIn}
                    container={rightRef.current}
                    timeout={500}
                >
                    <Box sx={styles.overlayRight}>
                        <Typography variant="h1" sx={styles.overlayTitle}>Welcome To TechNow!</Typography>
                        <Typography sx={styles.overlaySubTitle} variant="p">Fill in some personal details and start shopping with us</Typography>
                        <Button
                            onClick={() => setIsSignIn(false)}
                            sx={styles.overlayButton} variant="outlined">Sign Up</Button>
                    </Box>
                </Slide>

                <Fade
                    in={!isSignIn}
                    timeout={570}
                >
                    <Box sx={styles.overlayLeft}>
                        <Typography variant="h1" sx={styles.overlayTitle}>Welcome Back!
                        </Typography>
                        <Typography sx={styles.overlaySubTitle} variant="p">Time for shopping, please login with your personal info

                        </Typography>
                        <Button
                            onClick={() => setIsSignIn(true)}
                            sx={styles.overlayButton} variant="outlined">Sign In</Button>
                    </Box>
                </Fade>
            </Box>
        </Box>
    )
}

export default Authentication;
