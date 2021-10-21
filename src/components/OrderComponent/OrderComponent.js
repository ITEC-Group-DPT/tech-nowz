import React from 'react'
import styles from './OrderComponent.style'
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material'
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
            <div style={styles.titleDiv}>
                <h1 style={styles.title}>Order: #{orderID}</h1>
                <Link style={styles.link} to={orderHistoryURL}>
                    <Button style={styles.titleBtn}>See Detail</Button>
                </Link>
            </div>
            <Box sx={styles.productList}>
                <ProductList  productList={productList}/>
            </Box>
        </Box>
    )
}

export default OrderComponent