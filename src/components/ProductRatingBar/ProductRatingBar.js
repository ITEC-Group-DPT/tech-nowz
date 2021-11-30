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

	const openDialog = (event, newRatingValue) => {
		setDialogOpen(true);
		setRatingStar(newRatingValue);
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
			<Dialog open={dialogOpen} onClose={handleDialogClose}>
				<DialogActions sx={{ display: 'block' }}>
					<DialogTitle sx={{ m: 0, p: 2 }}>Confirmation</DialogTitle>
					<DialogContent sx={{ m: 0, p: 2 }}>
						<Typography gutterBottom>
							Do you want to rate {ratingStar + ' '}
							star(s) ?
						</Typography>
					</DialogContent>
					<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
						<Button onClick={handleDialogSave} value={ratingStar}>
							Save changes
						</Button>
						<Button
							onClick={handleDialogClose}
							sx={{ color: 'black' }}
						>
							Cancel
						</Button>
					</Box>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default ProductRatingBar;
