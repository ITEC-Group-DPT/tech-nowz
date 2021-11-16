import React from 'react'
import styles from './ProductSkeleton.style'
import { Stack, Skeleton } from '@mui/material'

const ProductSkeleton = ({ isSlider }) => {
	return (
		<Stack spacing={1}>
			<Skeleton
				animation="wave"
				variant="rectangular"
				sx={isSlider ? styles.rectangularSlider : styles.rectangular}
			/>
		</Stack>
	)
}

export default ProductSkeleton
