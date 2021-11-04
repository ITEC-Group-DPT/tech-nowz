import React from "react";
import styles from "./HorizontalProduct.style";
import { Link } from 'react-router-dom';
import {
	Box,
	Typography,
	Card,
	CardMedia,
	CardContent,
	Button,
	Rating,
} from "@mui/material";
import icons from "../../constant/icons";

const HorizontalProduct = ({
	cartProduct,
	product,
	canDelete,
	onPressDelete,
	decreaseQuantity,
	increaseQuantity,
	ratingSizeMedium = '1rem',
	ratingSizeSmall = '0.6rem',
	imageSize,
	marginTop,
	width,
	pricePadding,
}) => {

	const formatedPrice = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(product.price);

	const productURL =
		'/product/' +
		encodeURIComponent(product.name).replace(/%20/g, '-') +
		`?i=${product.productID}`;

	return (
		<Link to={productURL} style={{ textDecoration: 'none' }}>
			<Card
				sx={Object.assign(
					styles.productCard,
					marginTop && {
						marginTop: marginTop,
					},
					width && {
						width: width,
					}
				)}
			>
				{canDelete && (
					<Button onClick={onPressDelete} sx={styles.buttonClose}>
						<icons.Close sx={styles.closeIc} />
					</Button>
				)}
				<CardMedia
					component="img"
					sx={Object.assign(
						styles.productImg,
						imageSize && {
							height: imageSize,
							width: imageSize,
						}
					)}
					image={product.img1}
				/>
				<CardContent sx={styles.productContent}>
					<Typography
						sx={styles.productName}>{product.name}</Typography>

					<Box sx={styles.ratingContainer}>
						<Rating
							size="small"
							readOnly
							sx={{
								fontSize: {
									xs: ratingSizeSmall,
									md: ratingSizeMedium,
								},
							}}
							value={product.rating}
							precision={0.5}
						/>
						<Typography sx={styles.productSold}>
							({product.sold})
						</Typography>
					</Box>
					<Typography sx={styles.productQuantity}>
						{product.quantity &&
							!cartProduct &&
							"Quantity: " + product.quantity}
					</Typography>
				</CardContent>
				{
					cartProduct &&
					<CardContent
						sx={styles.quantityContainer}>

						<Typography
							onClick={decreaseQuantity}
							sx={styles.changeQty}
						>
							–
						</Typography>
						<Typography sx={styles.productCartQuantity}>{product.quantity}</Typography>
						<Typography
							onClick={increaseQuantity}

							sx={styles.changeQty}
						>
							＋
						</Typography>
					</CardContent>
				}
				<CardContent sx={styles.priceContainer}>
					<Typography
						sx={styles.productPrice}
					>
						{formatedPrice}
					</Typography>
				</CardContent>
			</Card>
		</Link>
	);
};

export default HorizontalProduct;
