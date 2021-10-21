import React from 'react'
import styles from './OrderDetail.style'
import { useParams, useLocation } from "react-router-dom";
import { Box, Typography } from '@mui/material'

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const OrderDetail = () => {
    const { id } = useParams();
    const query = useQuery();
    // const id = query.get("i");
    return (
        <Box sx={styles.wrapper}>
            <Typography component="div" sx={styles.typo}>Product ID: {id} </Typography>
        </Box>
    )
}

export default OrderDetail