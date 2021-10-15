import React from 'react'
import styles from './cart.style'

import { Box, Typography, Card, Container, CardMedia, CardContent, Rating } from '@mui/material'

const product = {
    "productID": 69,
    "type": "Headphone",
    "description": "",
    "spec": "- Kết nối: Wirless (đầu thu USB) \n- Drive: 50mm / 32 Ohm \n- Thời gian sử dụng pin lên đến 20 giờ \n- Led RGB tích hợp \n- Âm thanh 7.1 Surround",
    "name": "Tai nghe không dây Corsair Virtuoso RGB Gunmetal",
    "price": 5600000,
    "rating": 2.66545,
    "sold": 15,
    "dateCreated": "2021-07-02 20:50:24",
    "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Headphone%2F09.webp?alt=media&token=17e9d962-608c-4325-aa60-c208f51b23a6",
};
const Cart = () => {
    const formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)
    return (
        <Container sx={styles.main}>
            <Card sx={styles.productCard}>
                <CardMedia
                    component="img"
                    sx={styles.productImg}
                    image={product.img1}
                />

                <CardContent sx = {styles.productContent}>
                    <Typography sx = {styles.productName}>{product.name}</Typography>
                    <Typography>{product.quantity && ("Quantity: " + product.quantity)}</Typography>

                    <Rating size="small" readOnly value={product.rating} precision={0.5} />

                </CardContent>

                <CardContent sx ={styles.priceContainer}>
                    <Typography sx = {styles.productPrice}>{formatedPrice}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Cart
