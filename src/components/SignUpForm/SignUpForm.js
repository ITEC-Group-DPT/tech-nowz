import React from "react";
import styles from "../../pages/Authentication/authentication.style"
import { Link } from 'react-router-dom';
import { Input, Button, FormControl, Typography } from '@mui/material';
import { Box } from '@mui/system';
const SignUpForm = (props) => {

    return (
        <Box sx={styles.formContainerRight} ref={props.references}>
            <Typography sx={styles.title}>Create Account
            </Typography>
            <Box component="div" style={styles.socialContainer}>
                <Link to="#" style={styles.socialLink}><i class="fab fa-facebook-f"></i></Link>
                <Link to="#" style={styles.socialLink}><i class="fab fa-google-plus-g"></i></Link>
                <Link to="#" style={styles.socialLink}><i class="fab fa-linkedin-in"></i></Link>
            </Box>
            <Typography variant="span" sx={styles.subTitle}>or use your email for registration
            </Typography>

            <Input
                sx={styles.input}
                placeholder="Email"
                disableUnderline
                fullWidth
            />

            <Input
                sx={styles.input}
                placeholder="Username"
                disableUnderline
                fullWidth
            />

            <Input
                sx={styles.input}
                placeholder="Password"
                disableUnderline
                fullWidth
            />

            <Input
                sx={styles.input}
                placeholder="Confirm Password"
                disableUnderline
                fullWidth
            />

            <Link style={styles.back} to="/"><i class="bi bi-arrow-left"></i>&nbsp; Back to home</Link>

            <Button
                sx={styles.mainButton} variant="contained"
            >Sign Up
            </Button>

        </Box>
    )
}

export default SignUpForm;