import { React, useEffect } from 'react';
import styles from './ProductSlider.style';
import { icons } from '../../constant';
import Slider from 'react-slick';
import { Container, Typography } from '@mui/material';
import ProductItem from '../ProductItem/ProductItem';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import ProductSkeleton from '../ProductSkeleton/ProductSkeleton';

const CustomNextArrow = ({ onClick }) => (
	<IconButton
		aria-label="next"
		component="span"
		size="large"
		onClick={onClick}
		sx={styles.nextArrow}
	>
		<icons.Next fontSize="inherit" />
	</IconButton>
);
const CustomPrevArrow = ({ onClick }) => (
	<IconButton
		aria-label="prev"
		component="span"
		size="large"
		onClick={onClick}
		sx={styles.prevArrow}
	>
		<icons.Prev fontSize="inherit" />
	</IconButton>
);
const settings = {
	dots: true,
	speed: 350,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnHover: true,
	swipeToSlide: true,
	centerPadding: '60px',
	nextArrow: <CustomNextArrow />,
	prevArrow: <CustomPrevArrow />,
	responsive: [
		{
			breakpoint: 1460,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 1190,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

const ProductSlider = ({ sliderTitle, selector }) => {

	const { isLoading, productList } = useSelector(selector);
	console.log('product List', productList);
	return (
		<Container maxWidth="xl" style={{ marginBottom: '100px' }}>
			<Typography
				gutterBottom
				variant="h5"
				component="div"
				sx={styles.sliderTitle}
			>
				{sliderTitle}
			</Typography>
			{isLoading ? (
				<Slider {...settings}>
					{Array(10)
						.fill()
						.map(() => (
							<ProductSkeleton isSlider />
						))}
				</Slider>
			) : (
				<Slider {...settings}>
					{productList.map((product) => (
						<ProductItem
							product={product}
							key={product.productID}
							isSlider
						/>
					))}
				</Slider>
			)}
		</Container>
	);
};

export default ProductSlider;
