import React from 'react'
import styles from './Category.style';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProductItem from '../ProductItem/ProductItem';
import axios from 'axios';

const Category = ({ categoryName, productList }) => {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then(response => {
    //     console.log(response.data);
    // })

    return (
        <div style={{ marginTop: '80px'}}>
            <div style={styles.category}>
                <Typography gutterBottom variant="h5" component="div" sx={styles.categoryTitle}>{categoryName}</Typography>
                <Button size="small" sx={styles.viewMoreBtn}>View more</Button>
            </div>
            <Grid container spacing={{xs: 0.5, md: 3, lg: 3.5}}>
                {productList.map(product => (
                    <Grid item xs={6} md={4} lg={3} key={product.productID}>
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
