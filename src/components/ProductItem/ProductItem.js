import React from 'react'
import Card from '@mui/material/Card';
import styles from './ProductItem.style';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import { icons } from '../../constant';

const ProductItem = ({ productID, name, img1, rating, sold, price }) => {
    const formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)

    return (
        <Card sx={{ maxWidth: 345, minHeight: 350 }} sx={styles.card}>
            <CardActionArea sx={styles.cardActionArea}>
                <CardMedia
                    component="img"
                    height="200"
                    image={img1}
                    alt="product image"
                    sx={styles.pImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={styles.pName}>
                        {name}
                    </Typography>
                </CardContent>

                <Rating name="read-only" size="small" readOnly value={rating} precision={0.5} sx={styles.pRating} />

                <CardActions sx={styles.cardBottom}>
                    <Typography gutterBottom variant="h6" component="div" sx={styles.pPrice}>
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
