import React from 'react'
import useStyles from './ProductSlider.style';
import Slider from "react-slick";
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProductItem from '../ProductItem/ProductItem';

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true
}

const ProductSlider = ({ sliderTitle, productList }) => {
    const styles = useStyles()

    return (
        <div style={{ marginTop: '100px'}}>
            <Typography gutterBottom variant="h5" component="div" className={styles.sliderTitle}>{sliderTitle}</Typography>
            <Slider {...settings}>
                {productList.map(product => (
                    <ProductItem
                        productID={product.productID}
                        name={product.name}
                        img1={product.img1}
                        rating={product.rating}
                        sold={product.sold}
                        price={product.price}
                        key={product.productID}
                    />
                ))}

            </Slider>
        </div>


    )
}

export default ProductSlider
