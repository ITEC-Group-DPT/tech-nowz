import React from 'react'
import useStyles from './Category.style';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProductItem from '../ProductItem/ProductItem';


const Category = ({ categoryName, productList }) => {

    const styles = useStyles();
    return (
        <div style={{ marginTop: '80px'}}>
            <div className={styles.category}>
                <Typography gutterBottom variant="h5" component="div" className={styles.categoryTitle}>{categoryName}</Typography>
                <Button size="small" className={styles.viewMoreBtn}>View more</Button>
            </div>
            <Grid container spacing={3}>
                {productList.map(product => (
                    <Grid item lg={3} xs={6} >
                        <ProductItem
                            productID={product.productID}
                            name={product.name}
                            img1={product.img1}
                            rating={product.rating}
                            sold={product.sold}
                            price={product.price}
                            key={product.productID}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Category
