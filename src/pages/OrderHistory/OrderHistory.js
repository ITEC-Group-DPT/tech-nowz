import { React, useState, useEffect } from 'react';
import styles from './OrderHistory.style';
import { Container, Typography, Box } from '@mui/material';
import OrderComponent from '../../components/OrderComponent/OrderComponent';
import { getOrderListAPI } from '../../api/orderApi';

const OrderHistory = () => {
	const [orderList, setOrderList] = useState([]);
	useEffect(() => {
		getOrderListAPI().then((response) => {
			if (response.data['success'] === true) {
				setOrderList(response.data['data']);
			}
		});
	}, []);

	const OrderList = (props) => {
		const list = props.orderList;
		const orders = Object.keys(list).map((order, index) => (
			<OrderComponent
				orderID={Object.keys(list)[index]}
				productList={list[order]}
			/>
		));
		return orders;
	}

	return (
		<Box sx={styles.box}>
			<Container sx={styles.main}>
				<Typography sx={styles.title}>Order History</Typography>
				<OrderList orderList={orderList} />
			</Container>
		</Box>
	);
};

export default OrderHistory;
