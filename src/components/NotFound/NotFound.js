import React from 'react'
import styles from './NotFound.styles'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const NotFound = () => {
    return (
        <Box sx={styles.wrapper}>
            <Typography component="div" sx={styles.typo}>Page Not Found! (Error: 404)</Typography>
        </Box>
    )
}

export default NotFound
