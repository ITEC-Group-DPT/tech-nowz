import { React, useState, useEffect } from 'react'
import styles from './OrderDetail.style'
import { useParams } from 'react-router-dom'
import { Container, Box, Typography, Grid, Divider, Skeleton, Collapse, Fab } from '@mui/material'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct'
import HorizontalProductSkeleton from '../../components/HorizontalProductSkeleton/HorizontalProductSkeleton'
import ProductRatingBar from '../../components/ProductRatingBar/ProductRatingBar'
import { getOrderDetailAPI } from '../../api/orderApi'
import { TransitionGroup } from 'react-transition-group'
import icons from "../../constant/icons";

const statusList = ['Received', 'Processing', 'Shipping', 'Completed']

const Stepper = ({ isChecked, title }) => (
	<Box sx={styles.stepWrapper}>
		<Fab sx={styles.checked}>
			{isChecked && <icons.Check sx={styles.checkIcon} />}
		</Fab>
		<Typography sx={styles.stepTitle}>{title}</Typography>
	</Box>
)

const LineStepper = () => (
	<Box sx={styles.lineWrapper}>
		<Divider sx={styles.stepLine} />
	</Box>
)

const OrderDetail = () => {
	const { id } = useParams()
	const [orderDetail, setOrderDetail] = useState({ "isLoading": true })
	const [activeStatusList, setActiveStatusList] = useState([])

	useEffect(() => {
		getOrderDetailAPI(id).then((response) => {
			if (response.data.success === true) {
				const resData = response.data.data
				setOrderDetail({ "isLoading": false, data: resData })
				console.log("orderDetail ", resData)

				const orderStatus = resData.orderInfo.status

				if (orderStatus != 'Cancelled') {
					const statusIndex = statusList.indexOf(orderStatus)
					let tempList = []

					for (let i = 0; i < statusList.length; i++) {
						if (i <= statusIndex)
							tempList[i] = true;
						else
							tempList[i] = false;
					}

					setActiveStatusList(tempList);
				}
			}
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
				{orderDetail.isLoading ? (
					<Grid container spacing={6}>
						<Grid item xs={12} lg={5}>
							<Box sx={styles.wrapperSkeleton}>
								<Skeleton variant="rectangular" animation="wave" sx={styles.orderInfoSkeleton} />
							</Box>
						</Grid>
						<Grid item xs={12} lg={7} sx={styles.packageWrapper}>
							<Box sx={styles.productList}>
								<TransitionGroup>
									<Collapse>
										<HorizontalProductSkeleton />
										<Box
											sx={{
												display: 'flex',
												mb: '20px',
											}}
										>
											<Skeleton animation="wave" sx={styles.ratingSkeleton} />
										</Box>
									</Collapse>
								</TransitionGroup>
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
											orderDetail.data.orderInfo.dateDiff,
										)}
									</Typography>

									<Typography sx={{ ...styles.title, mt: 4 }}>
										Customer detail
									</Typography>
									<Typography sx={styles.content}>
										Name: {orderDetail.data.orderInfo.name}
									</Typography>
									<Typography sx={styles.content}>
										Phone: {orderDetail.data.orderInfo.phone}
									</Typography>
									<Typography sx={styles.content}>
										Address: {orderDetail.data.orderInfo.address}
									</Typography>

									<Typography sx={{ ...styles.title, mt: 4, mb: 2 }}>
										Status
									</Typography>

									<Box sx={styles.stepper}>
										{activeStatusList.map((isChecked, index) => {
											if (index < 3)
												return (
													<>
														<Stepper isChecked={isChecked} title={statusList[index]} />
														<LineStepper />
													</>
												)
											else
												return (
													<Stepper isChecked={isChecked} title={statusList[index]} />
												)
										})}

										{activeStatusList.length == 0 ?
											(<Typography sx={{ color: 'red', fontWeight: 600 }}>THIS ORDER IS CANCELLED</Typography>)
											: ("")}
									</Box>

									<Divider sx={styles.divider} />
									<Box sx={{ mt: 4 }}>
										<Box sx={styles.lowerPriceWrapper}>
											<Typography sx={styles.lowerTitles}>
												Total price:
											</Typography>
											<Typography sx={styles.lowerValues}>
												{formatPrice(
													orderDetail.data.orderInfo.totalPrice,
												)}
											</Typography>
										</Box>
									</Box>
								</Box>
							</Box>
						</Grid>
						<Grid item xs={12} lg={7} sx={styles.packageWrapper}>
							<Box sx={styles.productList}>
								<TransitionGroup>
									{
										orderDetail.data.itemList.map(product =>
											<Collapse>
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
													{
														activeStatusList[3] &&
														<Box>
															<Typography sx={styles.ratingTitle}>
																Your rating:
															</Typography>
															<ProductRatingBar
																orderID={id}
																productID={product.productID}
																customerRating={
																	product.customerRating
																}
															/>
														</Box>
													}
												</Box>
											</Collapse>
										)}
								</TransitionGroup>
							</Box>
						</Grid>
					</Grid>
				)}
			</Container>
		</Box>
	)
}

export default OrderDetail
