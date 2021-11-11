import { React, useState } from 'react';
import { Rating } from '@mui/material';
import styles from './ProductRatingBar.style';
import { rateProduct } from '../../api/orderApi';

const ProductRatingBar = ({ orderID, productID, customerRating }) => {
	const [ratingStar, setRatingStar] = useState(-1);

	const ratingProduct = (event, newValue) => {
		rateProduct(orderID, productID, newValue).then((response) => {
			if (response.data.success === true) {
				setRatingStar(newValue);
			}
		});
	};

	return (
		<Rating
			key={productID}
			sx={styles.ratingBar}
			size="large"
			value={customerRating !== -1 ? customerRating : ratingStar}
			readOnly={ratingStar !== -1 || customerRating !== -1 ? true : false}
			onChange={ratingProduct}
			precision={0.5}
		></Rating>
	);
};

export default ProductRatingBar;
