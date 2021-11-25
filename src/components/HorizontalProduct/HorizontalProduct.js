import React, { useEffect, useState } from "react";
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
import { changeQuantityApi } from "../../api/cartApi"

import { useDispatch } from "react-redux";
import { showAuthError } from "../../store/actions/authAction"

const HorizontalProduct = ({
	cartProduct,
	product,
	canDelete,
	onPressDelete,
	changeQuantity,
	ratingSizeMedium = '16px',
	ratingSizeSmall = '12px',
	imageSize,
	marginTop,
	width,
	pricePadding,
}) => {

	const dispatch = useDispatch();

	const formatedPrice = new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
	}).format(product.price);
	const [quantityDifference, setQuantityDifference] = useState(0);

	const productURL =
		'/product/' +
		encodeURIComponent(product.name).replace(/%20/g, '-') +
		`?i=${product.productID}`;

	const increaseQuantity = (e) => {
		setQuantityDifference(quantityDifference + 1);
		changeQuantity(product, 1);
	}

	const decreaseQuantity = (e) => {
		if (product.quantity > 1) {
			setQuantityDifference(quantityDifference - 1);
			changeQuantity(product, -1);
		}
	}

	useEffect(() => {

		if (quantityDifference != 0) {
			var timeout = setTimeout(() => {
				let changeQuantity = quantityDifference;
				setQuantityDifference(0);
				changeQuantityApi(product.productID, changeQuantity).then(response => {
					if (response.data.success) {
						console.log('change quantity: ', changeQuantity);
					}
					else {
						console.log("Something wrong is happend");
						dispatch(showAuthError())
					}
				});

			}, 500);
		}

		return () => {
			clearTimeout(timeout);
		}
	}, [quantityDifference])
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
						onClick={(e) => e.preventDefault()}
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
