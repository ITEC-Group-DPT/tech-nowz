import React from 'react'
import styles from './Product.styles'
import { useParams, useLocation } from "react-router-dom";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { getProduct } from '../../api/api';
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Product = () => {
    const { name } = useParams()
    const query = useQuery()
    const id = query.get("i")
    getProduct(id).then(response => {
        // if (response.data.success) {}
        // else {}
        if(response.status === 200) {
            console.log(response.data);
        }
    })

    return (
        <Box sx={styles.wrapper}>
            <Typography component="div" sx={styles.typo}>Product Name: {name} </Typography>
            <Typography component="div" sx={styles.typo}>Product ID: {id} </Typography>
        </Box>
    )
}

export default Product
