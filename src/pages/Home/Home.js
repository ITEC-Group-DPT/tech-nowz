import React from 'react'
import styles from './Home.styles'
import { Box } from '@mui/system';
import Category from '../../components/Category/Category';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Banner from '../../components/Banner/Banner';
import Sponsors from '../../components/Sponsors/Sponsors';
import {
    getTopRatingAction,
    getLaptopAction,
    getMonitorAction,
    getCPUAction,
} from '../../store/actions/productAction.js'
import {
    topRatingSelector,
    laptopSelector,
    monitorSelector,
    CPUSelector,
} from '../../store/selectors'

const Home = () => {
    return (
        <Box sx={styles.box}>
            <Banner />
            <ProductSlider sliderTitle="Top Rating" action={getTopRatingAction} selector={topRatingSelector}/>
            <Sponsors />
            <Category categoryName="Laptop" action={getLaptopAction} selector={laptopSelector} />
            <Category categoryName="Monitor" action={getMonitorAction} selector={monitorSelector} />
            <Category categoryName="CPU" action={getCPUAction} selector={CPUSelector} />
        </Box>
    )
}

export default Home
