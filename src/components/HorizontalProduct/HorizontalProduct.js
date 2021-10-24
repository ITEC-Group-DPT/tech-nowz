import React from 'react'
import styles from './horizontalProduct.style'

import { Box, Typography, Card, CardMedia, CardContent, Rating, Button } from '@mui/material'
import icons from "../../constant/icons"

const HorizontalProduct = ({ 
    product, canDelete, onPressDelete,ratingSize = 18, 
}) => {
    const formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)
    return (
        <Card sx={styles.productCard}>
            {
                canDelete &&
                <Button
                    onClick = {onPressDelete}
                    sx = {styles.buttonClose}
                >
                    <icons.Close
                        sx={styles.closeIc}
                    />
                </Button>
            }
            <CardMedia
                component="img"
                sx={styles.productImg}
                image={product.img1}
            />

            <CardContent sx={styles.productContent}>
                <Typography sx={styles.productName}>{product.name}</Typography>
                <Typography sx={styles.productQuantity}>{product.quantity && ("Quantity: " + product.quantity)}</Typography>

                <Box sx={styles.ratingContainer}>
                    <Rating 
                    size="small" 
                    readOnly
                    sx = {{fontSize: ratingSize}}
                    value={product.rating} 
                    precision={0.5} />
                    <Typography sx={styles.productSold}>
                        ({product.sold})</Typography>
                </Box>

            </CardContent>

            <CardContent sx={styles.priceContainer}>
                <Typography sx={styles.productPrice}>{formatedPrice}</Typography>
            </CardContent>
        </Card>
    )
}

export default HorizontalProduct;
