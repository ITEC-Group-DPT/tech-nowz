import { React, useState, useEffect } from 'react';
import styles from './OrderDetail.style';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';
import NotFound from '../../components/NotFound/NotFound';
import { getOrderDetailAPI } from '../../api/orderApi';

const OrderDetail = () => {
	const { id } = useParams();
	const [order, getOrderDetail] = useState([]);
	useEffect(() => {
		getOrderDetailAPI(id).then((response) => {
			if (response.data['success'] == true) {
				getOrderDetail(response.data['data']);
			}
		});
	}, []);
	function formatDateDiff(value) {
		let type;
		if (value >= 1440) {
			value /= 1440;
			type = 'days';
		} else if (value >= 60) {
			value /= 60;
			type = 'hours';
		}
		return `${Math.round(value)} ${type} ago`;
	}

	const dateDiff = formatDateDiff(order['orderInfo']['dateDiff']);
	const totalPrice =
		Number(order['orderInfo']['totalPrice']).toLocaleString() + 'đ';
	const name = order['orderInfo']['name'];
	const phone = order['orderInfo']['phone'];
	const address = order['orderInfo']['address'];
	const productList = order['itemList'];

	function ProductList(props) {
		const productList = props.productList;
		const products = productList.map((product) => (
			<HorizontalProduct product={product} ratingSize={'20px'} />
		));
		return products;
	}
	return (
		<Container sx={styles.main}>
			{order.length != 0 ? (
				<div>
					<Typography variant="h3" sx={styles.title}>
						Order : #{id}{' '}
					</Typography>
					<Typography variant="h6" sx={styles.content}>
						<b>Created: </b>
						{dateDiff}
					</Typography>
					<Typography variant="h3" sx={styles.title}>
						Customer Detail
					</Typography>
					<Typography variant="h6" sx={styles.content}>
						<b>Customer: </b>
						{name} - {phone}
					</Typography>
					<Typography variant="h6" sx={styles.content}>
						<b>Address: </b>
						{address}
					</Typography>
					<Typography variant="h3" sx={styles.title}>
						Package Detail
					</Typography>
					<Box sx={styles.productList}>
						<ProductList productList={productList} />
					</Box>
					<Box sx={styles.priceBox}>
						<Typography variant="h3" sx={styles.title}>
							Total Price
						</Typography>
						<Typography variant="h3" sx={styles.price}>
							{totalPrice}
						</Typography>
					</Box>
				</div>
			) : (
				<NotFound></NotFound>
			)}
		</Container>
	);
};

export default OrderDetail;
