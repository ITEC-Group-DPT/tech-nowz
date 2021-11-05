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
            <Category categoryName="Laptop"selector={laptopSelector} />
            <Category categoryName="Monitor" selector={monitorSelector} />
            <Category categoryName="CPU" selector={CPUSelector} />
        </Box>
    )
}

export default Home;
