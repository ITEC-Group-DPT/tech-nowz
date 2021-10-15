import React from 'react'
import styles from './Home.styles'
<<<<<<< HEAD
import { Box } from '@mui/system';
import Category from '../../components/Category/Category';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Banner from '../../components/Banner/Banner';
import Sponsors from '../../components/Sponsors/Sponsors';
import { useDispatch, useSelector } from 'react-redux';
import { getProductCategory, getTopRating } from '../../store/actions/productAction';
=======
import { Box } from '@mui/system'
import Category from '../../components/Category/Category'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import Banner from '../../components/Banner/Banner'
import Sponsors from '../../components/Sponsors/Sponsors'
>>>>>>> 5a0331b9487522a03b733ed9547f457baa33ba0a

import { getHehe } from '../../store/selectors'

const Home = () => {
<<<<<<< HEAD
    const dispatch = useDispatch();
    const heheObj = useSelector(getHehe);

    const { isLoading, products } = heheObj
    console.log('isLoading: ', isLoading);
    console.log('products: ', products);

    useEffect(() => {
        dispatch(getProductCategory("Laptop"))
        dispatch(getProductCategory("Monitor"))
        dispatch(getProductCategory("CPU"))
        dispatch(getTopRating())
    }, []);

=======
>>>>>>> 5a0331b9487522a03b733ed9547f457baa33ba0a
    return (
        <Box sx={styles.box}>
            <Banner />
            {/* <ProductSlider sliderTitle="Top Rating" /> */}
            <Sponsors />
            {/* <Category categoryName="Laptop" />
            <Category categoryName="Monitor" />
            <Category categoryName="CPU" /> */}
        </Box>
    )
}

export default Home
