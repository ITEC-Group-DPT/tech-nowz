import React from 'react'
import styles from "./SearchProductItem.styles"
import { Link } from 'react-router-dom'
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Rating,
} from "@mui/material";

const SearchProductItem = ({ product }) => {
    const formatedPrice = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    }).format(product.price)

    const productURL =
        '/product/' +
        encodeURIComponent(product.name).replace(/%20/g, '-') +
        `?i=${product.productID}`

    return (
        <Link to={productURL} style={{ textDecoration: 'none' }}>
            <Card sx={styles.productCard} >
                <CardMedia
                    component="img"
                    sx={styles.productImg}
                    image={product.img1}
                />
                <CardContent sx={styles.productContent}>
                    <Typography
                        sx={styles.productName}>{product.name}</Typography>

                    <Box sx={styles.ratingContainer}>
                        <Rating
                            readOnly
                            sx={styles.rating}
                            value={product.rating}
                            precision={0.5}
                        />
                        <Typography sx={styles.productSold}>
                            ({product.sold})
                        </Typography>
                    </Box>
                </CardContent>
                <CardContent sx={styles.priceContainer}>
                    <Typography sx={styles.productPrice}>{formatedPrice}</Typography>
                </CardContent>
            </Card>
        </Link>
    )
}

export default SearchProductItem
