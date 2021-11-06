import { React, useState, useEffect } from 'react';
import styles from './OrderDetail.style';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography } from '@mui/material';
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';
import NotFound from '../../components/NotFound/NotFound';
import { getOrderDetailAPI } from '../../api/orderApi';

const OrderDetail = () => {
	const { id } = useParams();
	const [order, setOrderDetail] = useState([]);

	useEffect(() => {
		getOrderDetailAPI(id).then((response) => {
			if (response.data.success === true) {
				setOrderDetail(response.data.data);
			}
		});
	}, []);

	function formatDateDiff(value) {
		let type = "minutes";
		if (value >= 1440) {
			value /= 1440;
			type = 'days';
		} else if (value >= 60) {
			value /= 60;
			type = 'hours';
		}
		return `${Math.round(value)} ${type} ago`;
	}

	const ProductList = (props) => {
		const productList = props.productList;
		const products = productList.map((product) => (
			<Box sx={{ width: '100%' }}>
				<HorizontalProduct product={product} ratingSize={'20px'} />
			</Box>
		));
		return products;
	}

	return (
		<Box sx={styles.box}>
			<Container sx={styles.main}>
				{order.length !== 0 ? (
					<div>
						<Typography variant="h3" sx={styles.title}>
							Order : #{id}{' '}
						</Typography>
						<Typography variant="h6" sx={styles.content}>
							<b>Created: </b>
							{formatDateDiff(order['orderInfo']['dateDiff'])}
						</Typography>
						<Typography variant="h3" sx={styles.title}>
							Customer Detail
						</Typography>
						<Typography variant="h6" sx={styles.content}>
							<b>Customer: </b>
							{order['orderInfo']['name']} -{' '}
							{order['orderInfo']['phone']}
						</Typography>
						<Typography variant="h6" sx={styles.content}>
							<b>Address: </b>
							{order['orderInfo']['address']}
						</Typography>
						<Typography variant="h3" sx={styles.title}>
							Package Detail
						</Typography>
						<Box sx={styles.productList}>
							<ProductList productList={order['itemList']} />
						</Box>
						<Box sx={styles.priceBox}>
							<Typography variant="h3" sx={styles.title}>
								Total Price
							</Typography>
							<Typography variant="h3" sx={styles.price}>
								{Number(
									order['orderInfo']['totalPrice']
								).toLocaleString() + 'đ'}
							</Typography>
						</Box>
					</div>
				) : (
					<NotFound></NotFound>
				)}
			</Container>
		</Box>
	);
};

export default OrderDetail;
