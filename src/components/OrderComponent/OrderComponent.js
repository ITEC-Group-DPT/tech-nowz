import React from 'react';
import styles from './OrderComponent.style';
import { Link } from 'react-router-dom';
import { Box, Button, Typography, Container } from '@mui/material';
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';

const OrderComponent = ({ orderID, productList }) => {
	const orderHistoryURL = `/profile/orderhistory/${orderID}`;
	function ProductList(props) {
		const productList = props.productList;
		const products = productList.map((product) => (
			<HorizontalProduct product={product} />
		));
		return products;
	}
    
    return (
        <Box sx={styles.main}>
            <Box sx={styles.titleDiv}>
                <Typography sx={styles.title}>Order: #{orderID}</Typography>
                <Link style={styles.link} to={orderHistoryURL}>
                    <Button sx={styles.titleBtn}>See Detail</Button>
                </Link>
            </Box>
            <Box sx={styles.contentDiv}>
                <Box sx={styles.productList}>
                    <ProductList  productList={productList}/>
                </Box>
            </Box>
        </Box>
    )
}

export default OrderComponent;
