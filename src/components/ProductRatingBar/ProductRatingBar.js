import { React, useState } from 'react';
import {
	Rating,
	Box,
	Dialog,
	DialogActions,
	DialogTitle,
	DialogContent,
	Button,
	Typography,
} from '@mui/material';
import styles from './ProductRatingBar.style';
import { rateProduct } from '../../api/orderApi';

const ProductRatingBar = ({ orderID, productID, customerRating }) => {
	const [ratingStar, setRatingStar] = useState(-1);
	const [dialogOpen, setDialogOpen] = useState(false);

	const openDialog = (event, newValue) => {
		setDialogOpen(true);
		setRatingStar(newValue);
	};

	const handleDialogClose = () => {
		setDialogOpen(false);
		const delay = setTimeout(() => {
			setRatingStar(-1);
		}, 150);
		return () => clearTimeout(delay);
	};

	const handleDialogSave = (event) => {
		setDialogOpen(false);
		const newRatingValue = event.target.value;
		rateProduct(orderID, productID, newRatingValue).then((response) => {
			if (response.data.success === true) {
				setRatingStar(newRatingValue);
			}
		});
	};

	return (
		<Box>
			<Rating
				key={productID}
				sx={styles.ratingBar}
				size="large"
				value={customerRating !== -1 ? customerRating : ratingStar}
				readOnly={
					ratingStar !== -1 || customerRating !== -1 ? true : false
				}
				onChange={openDialog}
				precision={0.5}
			/>
			<Dialog
				aria-labelledby="customized-dialog-title"
				open={dialogOpen}
				onClose={handleDialogClose}
				value={ratingStar}
			>
				<DialogActions>
					<DialogTitle>Confirmation</DialogTitle>
					<DialogContent dividers>
						<Typography gutterBottom>
							Do you want to rate this product {ratingStar + ' '}
							star(s) ?
						</Typography>
					</DialogContent>
					<Button onClick={handleDialogSave} value={ratingStar}>
						Save changes
					</Button>
					<Button onClick={handleDialogClose}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default ProductRatingBar;
