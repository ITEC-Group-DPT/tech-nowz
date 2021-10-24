import React from 'react'
import styles from './Product.styles'
import { useParams, useLocation } from "react-router-dom";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Product = () => {
    const { name } = useParams();
    const query = useQuery();
    const id = query.get("i")
    return (
        <Box sx={styles.wrapper}>
            <Typography component="div" sx={styles.typo}>Product Name: {name} </Typography>
            <Typography component="div" sx={styles.typo}>Product ID: {id} </Typography>
        </Box>
    )
}

export default Product
