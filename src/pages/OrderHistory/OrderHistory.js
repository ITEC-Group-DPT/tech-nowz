import { React, useState, useEffect } from 'react';
import styles from './OrderHistory.style';
import { Container, Typography } from '@mui/material';
import OrderComponent from '../../components/OrderComponent/OrderComponent';
import { getOrderListAPI } from '../../api/orderApi';

const OrderHistory = () => {
	const [orderList, getOrderList] = useState([]);
	useEffect(() => {
		getOrderListAPI().then((response) => {
			if (response.data['success'] == true) {
				getOrderList(response.data['data']);
			}
		});
	}, []);

	function OrderList(props) {
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
		<Container sx={styles.main}>
			<Typography sx={styles.title}>My Orders</Typography>
			<OrderList orderList={orderList} />
		</Container>
	);
};

export default OrderHistory;
