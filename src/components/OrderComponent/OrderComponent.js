import React from 'react'
import styles from './OrderComponent.style'
import { Link } from 'react-router-dom'
import { Box, Button, Typography, Collapse } from '@mui/material'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct'
import { TransitionGroup } from 'react-transition-group'

const OrderComponent = ({ orderID, productList }) => {
	const orderHistoryURL = `/profile/orderhistory/${orderID}`

	return (
		<Box sx={styles.main}>
			<Box sx={styles.titleDiv}>
				<Typography sx={styles.title}>Order: #{orderID}</Typography>
				<Link style={styles.link} to={orderHistoryURL}>
					<Button sx={styles.titleBtn}>See detail</Button>
				</Link>
			</Box>
			<Box sx={styles.contentDiv}>
				<Box sx={styles.productList}>
					{/* <TransitionGroup> */}
						{productList.map(product =>
							// <Collapse key={product.productID}>
								<HorizontalProduct product={product} />
							// </Collapse>
						)}
					{/* </TransitionGroup> */}
				</Box>
			</Box>
		</Box>
	)
}

export default OrderComponent
