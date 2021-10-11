import React from 'react'
import styles from './ProductSlider.style'
import { icons } from '../../constant';
import Slider from "react-slick";
import { Container, Typography } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem';
import IconButton from '@mui/material/IconButton';

const CustomNextArrow = ({ onClick }) => (
  <IconButton aria-label="next" component="span" size="large" onClick={onClick} sx={styles.nextArrow}>
    <icons.Next fontSize="inherit" />
  </IconButton>
)

const CustomPrevArrow = ({ onClick }) => (
  <IconButton aria-label="prev" component="span" size="large" onClick={onClick} sx={styles.prevArrow}>
    <icons.Prev fontSize="inherit" />
  </IconButton>
)

const settings = {
  dots: true,
  speed: 500,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  swipeToSlide: true,
  centerPadding: '60px',

  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ],
}

const ProductSlider = ({ sliderTitle, productList }) => {
  return (
    <Container maxWidth="lg" style={{ marginBottom: '100px' }}>
      <Typography gutterBottom variant="h5" component="div" sx={styles.sliderTitle}>{sliderTitle}</Typography>
      <Slider {...settings}>
        {productList.map(product => (
          <ProductItem
            product={product}
            key={product.productID}
            isSlider
          />
        ))}
      </Slider>
    </Container>
  )
}

export default ProductSlider
