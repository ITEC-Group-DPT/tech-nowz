import React from "react";
import styles from "../../pages/Authentication/authentication.style"
import { Link } from 'react-router-dom';
import { Input, Button, FormControl, Typography } from '@mui/material';
import { Box } from '@mui/system';
const SignInForm = (props) => {
    return (
        <Box sx={styles.formContainerLeft} ref={props.references}>
            <Typography sx={styles.title}>Sign in</Typography>
            <Box component="div" sx={styles.socialContainer}>
                <Link to="#" style={styles.socialLink}><i class="fab fa-facebook-f"></i></Link>
                <Link to="#" style={styles.socialLink}><i class="fab fa-google-plus-g"></i></Link>
                <Link to="#" style={styles.socialLink}><i class="fab fa-linkedin-in"></i></Link>
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

            <Link style={styles.back} to="/"><i class="bi bi-arrow-left"></i>&nbsp; Back to home</Link>

            <Button
                sx={styles.mainButton} variant="contained"
            >Sign In
            </Button>

        </Box>
    )
}

export default SignInForm;