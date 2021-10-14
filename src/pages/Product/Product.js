import React from 'react'
import styles from './Product.styles'
import { useParams } from "react-router-dom";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Product = () => {
    const { name } = useParams();
    return (
        <Box sx={styles.wrapper}>
            <Typography component="div" sx={styles.typo}>Product Name: {name}</Typography>
        </Box>
    )
}

export default Product
