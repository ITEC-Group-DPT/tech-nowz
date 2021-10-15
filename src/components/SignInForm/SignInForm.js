import React from "react";
import styles from "../../pages/Authentication/authentication.style"
import { Link } from 'react-router-dom';
import { Input, Button, FormControl, Typography, Slide } from '@mui/material';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
const SignInForm = ({ isSignIn, setIsSignIn, references }) => {

    const minWidth = useMediaQuery('(min-width:900px)');

    const isHide = !minWidth && !isSignIn;

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
                placeholder="Email"
                disableUnderline
                fullWidth
            />

            <Input
                sx={styles.input}
                placeholder="Password"
                disableUnderline
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
                sx={styles.mainButton} variant="contained"
            >Sign In
            </Button>

        </Box>
    )
}

export default SignInForm;