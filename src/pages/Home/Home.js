import React from 'react'
import styles from './Home.styles'
import { Box } from '@mui/system'
import Category from '../../components/Category/Category'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import Banner from '../../components/Banner/Banner'
import Sponsors from '../../components/Sponsors/Sponsors'

const Home = () => {
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
