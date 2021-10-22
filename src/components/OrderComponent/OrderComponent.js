import React from 'react'
import styles from './OrderComponent.style'
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';

const OrderComponent = ({ orderID, productList, }) => {
    const orderHistoryURL = `/profile/orderhistory/${orderID}` ;
    function ProductList(props){
        const productList = props.productList;
        const products = productList.map((product) =>
            <HorizontalProduct
                product={product}
                ratingSize = {"20px"}
            />
        );
        return (products);
    }
    return (
        <Box sx={styles.main}>
            <Box sx={styles.titleDiv}>
                <Typography sx={styles.title}>Order: #{orderID}</Typography>
                <Link style={styles.link} to={orderHistoryURL}>
                    <Button sx={styles.titleBtn}>See Detail</Button>
                </Link>
            </Box>
            <Box sx={styles.productList}>
                <ProductList  productList={productList}/>
            </Box>
        </Box>
    )
}

export default OrderComponent