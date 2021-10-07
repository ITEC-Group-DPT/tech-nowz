import React from 'react'
import Slider from "react-slick";
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductSlider.style'
import './styles.css'
import IconButton from '@mui/material/IconButton';
import { icons } from '../../constant';

// const CustomNextArrow = ({ className, style, onClick }) => (
//     <div className={className} onClick={onClick}>
//         <IconButton aria-label="next" component="span">
//             <icons.Next />
//         </IconButton>
//     </div >
// )

// const CustomPrevArrow = props => {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "green" }}
//             onClick={onClick}
//         />
//     );
// }

const settings = {
  dots: true,
  speed: 500,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipeToSlide: true,

  // nextArrow: <CustomNextArrow />,
  // prevArrow: <CustomPrevArrow />

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
    <div>
      <Typography gutterBottom variant="h5" component="div" sx={styles.sliderTitle}>{sliderTitle}</Typography>
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
