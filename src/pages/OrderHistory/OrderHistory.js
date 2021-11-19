import { React, useState, useEffect } from 'react'
import styles from './OrderHistory.style'
import { Container, Typography, Box, Collapse, Skeleton, Button } from '@mui/material'
import OrderComponent from '../../components/OrderComponent/OrderComponent'
import { getOrderListAPI } from '../../api/orderApi'
import { TransitionGroup } from 'react-transition-group'
import HorizontalProductSkeleton from '../../components/HorizontalProductSkeleton/HorizontalProductSkeleton'
import EmptyList from "../../components/EmptyList/EmptyList"
import emptyOrder from "../../img/empty-order.png"

const OrderHistory = () => {
	const [orderList, setOrderList] = useState({ "isLoading": true })
	useEffect(() => {
		getOrderListAPI().then((response) => {
			if (response.data.success === true) {
				setOrderList({ "isLoading": false, "data": response.data.data })
				console.log("orderList: ", response.data.data)
			}
		})
	}, [])

	return (
		<Box sx={styles.box}>
			<Container>
				<Typography sx={styles.title}>Order History</Typography>
				{orderList.isLoading ? (
					<Box sx={styles.isLoadingMain}>
						<Box sx={styles.titleDiv}>
							<Skeleton variant="text" animation="wave" sx={styles.skeletonOrderID}>
								<Typography sx={styles.title}>Order: #0000</Typography>
							</Skeleton>
							<Skeleton variant="text" animation="wave" sx={styles.skeletonBtn}>
								<Button sx={styles.titleBtn}>See detail</Button>
							</Skeleton>
						</Box>
						<Box sx={styles.contentDiv}>
							<Box sx={styles.productList}>
								<HorizontalProductSkeleton />
							</Box>
						</Box>
					</Box>
				) : (
					<>
						{orderList.data && orderList.data.length === 0 ? (
							<EmptyList img={emptyOrder} title={"Your order history is empty"} imgHeight={'45vh'} btnMarginTop={"5vh"} />
						) : (
							<Box>
								{Object.keys(orderList.data).map((order, index) =>
									<OrderComponent
										orderID={Object.keys(orderList.data)[index]}
										productList={orderList.data[order]}
									/>
								)}
							</Box>
						)}
					</>
				)}

			</Container>
		</Box>
	)
}

export default OrderHistory
