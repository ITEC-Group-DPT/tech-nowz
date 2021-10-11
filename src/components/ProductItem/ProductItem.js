import React from 'react'
import Card from '@mui/material/Card';
import styles from './ProductItem.style';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';
import { icons } from '../../constant';

const ProductItem = ({ productID, name, img1, rating, sold, price, isSlider }) => {
    const formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
    return (
        <Card sx={isSlider ? styles.cardSlider : styles.card}>
            <CardActionArea sx={isSlider ? styles.cardActionAreaSlider: styles.cardActionArea}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img1}
                    alt="product image"
                    sx={styles.pImage}
                />
                <CardContent sx={styles.pNameWrapper}>
                    <Typography variant="h6" component="div" sx={isSlider ? styles.pNameSlider: styles.pName}>
                        {name}
                    </Typography>
                </CardContent>

                <div style={styles.pRatingWrapper}>
                    <Rating size="small" readOnly value={rating} precision={0.5} sx={isSlider ? styles.pRatingSlider: styles.pRating} />
                    <Typography variant="h5" sx={isSlider ? styles.pSoldSlider : styles.pSold}>({sold})</Typography>
                </div>

                <CardActions sx={styles.cardBottom}>
                    <Typography variant="h6" component="div" sx={isSlider ? styles.pPriceSlider:styles.pPrice}>
                        {formatedPrice}
                    </Typography>
                    <Button size="small" sx={styles.pAddCart}>
                        <icons.AddCart />
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default ProductItem
