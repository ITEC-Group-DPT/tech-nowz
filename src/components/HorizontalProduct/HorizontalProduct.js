import React, { useEffect, useState } from "react";
import styles from "./HorizontalProduct.style";
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
import { changeQuantityApi } from "../../api/cartApi"

const HorizontalProduct = ({
	cartProduct,
	product,
	canDelete,
	onPressDelete,
	changeQuantity,
	ratingSizeMedium = '1rem',
	ratingSizeSmall = '0.8rem',
	imageSize,
	marginTop,
	width,
	pricePadding,
}) => {
	const formatedPrice = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(product.price);
	const [quantityDifference, setQuantityDifference] = useState(0);

	const increaseQuantity = () => {
		setQuantityDifference(quantityDifference + 1);
		changeQuantity(product, 1);
	}

	const decreaseQuantity = () => {
		if (product.quantity > 1) {
			setQuantityDifference(quantityDifference - 1);
			changeQuantity(product, -1);
		}
	}

	useEffect(() => {

		if (quantityDifference != 0) {
			var timeout = setTimeout(() => {
				setQuantityDifference(0);
				changeQuantityApi(product.productID, quantityDifference).then(response => {
					if (response.data.success) {
						console.log('change quantity: ', quantityDifference);
					}
					else {
						console.log("Something wrong is happend");
					}
				});

			}, 600);
		}

		return () => {
			clearTimeout(timeout);
		}
	}, [quantityDifference])
	return (
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
				<Typography sx={styles.productQuantity}>
					{product.quantity &&
						!cartProduct &&
						"Quantity: " + product.quantity}
				</Typography>
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
						precision={0.1}
					/>
					<Typography sx={styles.productSold}>
						({product.sold})
					</Typography>
				</Box>
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
	);
};

export default HorizontalProduct;
