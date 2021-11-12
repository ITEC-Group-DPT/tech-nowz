import React, { useEffect } from 'react'
import styles from './Home.styles'
import { Box } from '@mui/system';
import Category from '../../components/Category/Category';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Banner from '../../components/Banner/Banner';
import Sponsors from '../../components/Sponsors/Sponsors';
import {
	topRatingSelector,
	laptopSelector,
	monitorSelector,
	CPUSelector,
} from '../../store/selectors';

const Home = () => {
    return (
        <Box sx={styles.box}>
            <Banner />
            <ProductSlider sliderTitle="Top Rating" selector={topRatingSelector} />
            <Sponsors />
            <Category categoryName="Laptop" selector={laptopSelector} noOfSkeleton={8} />
            <Category categoryName="Monitor" selector={monitorSelector} noOfSkeleton={8} />
            <Category categoryName="CPU" selector={CPUSelector} noOfSkeleton={8} />
        </Box>
    )
}

export default Home;
