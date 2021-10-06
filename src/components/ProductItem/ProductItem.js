import React from 'react'
import useStyles from './ProductItem.style';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import { icons } from '../../constant';

const ProductItem = ({ productID, name, img1, rating, sold, price }) => {
    const styles = useStyles()
    const formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
    return (
        <Card sx={{ maxWidth: 345, minHeight: 350 }} className={styles.card}>
            <CardActionArea>
                <div className={styles.imgWrapper}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={img1}
                        alt="product image"
                        className={styles.pImage}
                    />
                </div>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" className={styles.pName}>
                        {name}
                    </Typography>
                </CardContent>

                <CardActions className={styles.cardActions}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography gutterBottom variant="h6" component="div" className={styles.pPrice}>
                                {formatedPrice}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} className={styles.btnWrapper}>
                            <Button size="small" className={styles.pAddCart}>
                                <icons.AddCart />
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default ProductItem
