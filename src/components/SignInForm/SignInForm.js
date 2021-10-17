import React, { useState } from "react";
import styles from "../../pages/Authentication/authentication.style"
import { Link } from 'react-router-dom';
import { Input, Button, FormControl, Typography, Slide, easing } from '@mui/material';
import { Box } from '@mui/system';

import { useDispatch } from "react-redux";
import useMediaQuery from '@mui/material/useMediaQuery';

import { Login } from "../../store/actions/authAction";
const SignInForm = ({ isSignIn, setIsSignIn, references }) => {

    const dispatch = useDispatch();
    const minWidth = useMediaQuery('(min-width:900px)');
    const isHide = !minWidth && !isSignIn;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmit = () => {
        dispatch(Login(email, password));
    }

    if (isHide) return <></>;
    return (
        <Box sx={styles.formContainerLeft} ref={references}>
            <Typography sx={styles.title}>Sign in</Typography>
            <Box component="div" sx={styles.socialContainer}>
                <Link to="#" style={styles.socialLink}><i className="fab fa-facebook-f"></i></Link>
                <Link to="#" style={styles.socialLink}><i className="fab fa-google-plus-g"></i></Link>
                <Link to="#" style={styles.socialLink}><i className="fab fa-linkedin-in"></i></Link>
            </Box>
            <Typography variant="span" sx={styles.subTitle}>or use your TechNow account</Typography>

            <Input
                sx={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                disableUnderline
                fullWidth
            />

            <Input
                sx={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                disableUnderline
                type="password"
                fullWidth
            />

            {
                (isSignIn && !minWidth) &&
                <Button onClick={() => setIsSignIn(false)}
                    sx={styles.switch}>Don't have an account? Sign up
                </Button>
            }
            <Link style={styles.back} to="/"><i className="bi bi-arrow-left"></i>&nbsp; Back to home</Link>

            <Button
                onClick={loginSubmit}
                sx={styles.mainButton}
                variant="contained"
            >Sign In
            </Button>

        </Box>
    )
}

export default SignInForm;