import { React, useEffect, useState } from 'react'
import styles from './Home.styles'
import { Box } from '@mui/system';
import Category from '../../components/Category/Category';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Banner from '../../components/Banner/Banner';
import Sponsors from '../../components/Sponsors/Sponsors';
import { useDispatch } from 'react-redux';
import { getProductCategory, getTopRating } from '../../store/actions/productAction';

const Home = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProductCategory("Laptop"))
        dispatch(getProductCategory("Monitor"))
        dispatch(getProductCategory("CPU"))
        dispatch(getTopRating())
    }, []);

    return (
        <Box sx={styles.box}>
            <Banner />
            <ProductSlider sliderTitle="Top Rating"/>
            <Sponsors />
            <Category categoryName="Laptop" />
            <Category categoryName="Monitor" />
            <Category categoryName="CPU" />
        </Box>
    )
}

export default Home
