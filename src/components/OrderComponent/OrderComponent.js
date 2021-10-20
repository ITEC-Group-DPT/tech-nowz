import React from 'react'
import styles from './OrderComponent.style'

import { Box, Button } from '@mui/material'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';

const OrderComponent = ({ 
    orderID, productList,
}) => {
    function ProductList(props){
        const productList = props.productList;
        const products = productList.map((product) =>
            <HorizontalProduct
                product={product}
                ratingSize = {"20px"}
                onPressDelete = {() => console.log("hehe")}
            />
        );
        return (products);
    }
    return (
        <Box sx={styles.main}>
            <div style={styles.titleDiv}>
                <h1 style={styles.title}>OrderID: {orderID}</h1>
                <Button style={styles.titleBtn}>See Detail</Button>
            </div>
            <Box sx={styles.productList}>
            <ProductList  productList={productList}/>
            </Box>
        </Box>
    )
}

export default OrderComponent