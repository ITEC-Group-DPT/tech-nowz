import { React, useState, useEffect } from 'react'
import styles from './OrderDetail.style'
import { useParams } from 'react-router-dom'
import { Container, Box, Typography, Grid, Divider, Skeleton } from '@mui/material'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct'
import HorizontalProductSkeleton from '../../components/HorizontalProductSkeleton/HorizontalProductSkeleton'
import ProductRatingBar from '../../components/ProductRatingBar/ProductRatingBar'
import { getOrderDetailAPI } from '../../api/orderApi'

const OrderDetail = () => {
	const { id } = useParams()
	const [order, setOrderDetail] = useState({ "isLoading": true })

	useEffect(() => {
		getOrderDetailAPI(id).then((response) => {
			if (response.data.success === true)
				setOrderDetail({ "isLoading": false, data: response.data.data })
				console.log(response.data.data)
		})
	}, [])

	const formatDateDiff = (value) => {
		let type = 'minutes'
		if (value >= 1440) {
			value /= 1440
			type = 'days'
		} else if (value >= 60) {
			value /= 60
			type = 'hours'
		}
		return `${Math.round(value)} ${type} ago`
	}

	const formatPrice = (value) => {
		return new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND',
		}).format(value)
	}

	return (
		<Box sx={styles.box}>
			<Container maxWidth="lg">
				{order.isLoading ? (
					<Grid container spacing={6}>
						<Grid item xs={12} lg={5}>
							<Box sx={styles.wrapperSkeleton}>
								<Skeleton variant="rectangular" animation="wave" sx={styles.orderInfoSkeleton} />
							</Box>
						</Grid>
						<Grid item xs={12} lg={7} sx={styles.packageWrapper}>
							<Box sx={styles.productList}>
								{Array(2).fill().map(() => (
									<Box>
										<HorizontalProductSkeleton />
										<Box
											sx={{
												display: 'flex',
												mb: '20px',
											}}
										>
											<Skeleton animation="wave" sx={styles.ratingSkeleton} />
										</Box>
									</Box>
								))}
							</Box>
						</Grid>
					</Grid>
				) : (
					<Grid container spacing={6}>
						<Grid item xs={12} lg={5}>
							<Box sx={styles.wrapper}>
								<Box sx={{ width: '100%' }}>
									<Typography sx={styles.title}>
										Order : #{id}{' '}
									</Typography>
									<Typography sx={styles.content}>
										{formatDateDiff(
											order.data.orderInfo.dateDiff,
										)}
									</Typography>
									<Divider sx={styles.divider} />
									<Typography sx={styles.title}>
										Customer detail
									</Typography>
									<Typography sx={styles.content}>
										Name: {order.data.orderInfo.name}
									</Typography>
									<Typography sx={styles.content}>
										Phone: {order.data.orderInfo.phone}
									</Typography>
									<Typography sx={styles.content}>
										Address: {order.data.orderInfo.address}
									</Typography>
									<Divider sx={styles.divider} />
									<Box sx={{ mt: 4 }}>
										<Box sx={styles.lowerPriceWrapper}>
											<Typography sx={styles.lowerTitles}>
												Total price:
											</Typography>
											<Typography sx={styles.lowerValues}>
												{formatPrice(
													order.data.orderInfo.totalPrice,
												)}
											</Typography>
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} lg={7} sx={styles.packageWrapper}>
							<Box sx={styles.productList}>
								{order.data.itemList.map((product) => (
									<Box>
										<HorizontalProduct
											product={product}
											ratingSize={'20px'}
										/>
										<Box
											sx={{
												display: 'flex',
												mb: '20px',
											}}
										>
											<Typography sx={styles.ratingTitle}>
												Your rating:
											</Typography>
											<ProductRatingBar
												orderID={id}
												productID={product.productID}
												customerRating={
													product.customerRating
												}
											></ProductRatingBar>
										</Box>
									</Box>
								))}
							</Box>
						</Grid>
					</Grid>
				)}
			</Container>
		</Box>
	)
}

export default OrderDetail
