import React from "react";
import styles from "../../pages/Authentication/authentication.style"
import { Link } from 'react-router-dom';
import { Input, Button, FormControl, Typography } from '@mui/material';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

const SignUpForm = ({ isSignIn, setIsSignIn, references }) => {

    const minWidth = useMediaQuery('(min-width:900px)');

    const isHide = (!minWidth && isSignIn);
    if (isHide) return <></>;

    return (
        <Box sx={styles.formContainerRight} ref={references}>
            <Typography sx={styles.title}>Create Account
            </Typography>
            <Box component="div" style={styles.socialContainer}>
                <Link to="#" style={styles.socialLink}><i className="fab fa-facebook-f"></i></Link>
                <Link to="#" style={styles.socialLink}><i className="fab fa-google-plus-g"></i></Link>
                <Link to="#" style={styles.socialLink}><i className="fab fa-linkedin-in"></i></Link>
            </Box>
            <Typography variant="span" sx={styles.subTitle}>or use your email for registration
            </Typography>

            <Input
                sx={styles.input}
                placeholder="Email"
                disableUnderline
                type="email"
                fullWidth
            />
            <Typography component="div" sx={styles.errorMsg}></Typography>

            <Input
                sx={styles.input}
                placeholder="Username"
                disableUnderline
                fullWidth
            />
            <Typography component="div" sx={styles.errorMsg}></Typography>

            <Input
                sx={styles.input}
                placeholder="Password"
                disableUnderline
                type="password"
                fullWidth
            />
            <Typography component="div" sx={styles.errorMsg}></Typography>

            <Input
                sx={styles.input}
                placeholder="Confirm Password"
                disableUnderline
                type="password"
                fullWidth
            />
            <Typography component="div" sx={styles.errorMsg}></Typography>

            {
                (!isSignIn && !minWidth) &&
                <Button onClick={() => setIsSignIn(true)}
                    sx={styles.switch}>
                    Already have an account? Sign in
                </Button>
            }
            <Link style={styles.back} to="/"><i className="bi bi-arrow-left"></i>&nbsp; Back to home</Link>

            <Button
                sx={styles.mainButton} variant="contained"
            >Sign Up
            </Button>

        </Box>
    )
}

export default SignUpForm;