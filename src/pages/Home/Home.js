import { React, useEffect, useState } from 'react'
import styles from './Home.styles'
import { Box } from '@mui/system';
import Category from '../../components/Category/Category';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import Banner from '../../components/Banner/Banner';
import Sponsors from '../../components/Sponsors/Sponsors';
import { getProductCategory, getTopRating } from "../../api/api.js"

const Home = () => {
    const [laptopList, setLaptopList] = useState([])
    const [cpuList, setCPUList] = useState([])
    const [monitorList, setMonitorList] = useState([])
    const [topRatingList, setTopRatingList] = useState([])

    useEffect(() => {
        getProductCategory("Laptop").then(list => {
            if (list.status === 200)
                setLaptopList(list.data)
        });
        getProductCategory("Monitor").then(list => {
            if (list.status === 200)
                setMonitorList(list.data)
        });
        getProductCategory("CPU").then(list => {
            if (list.status === 200)
                setCPUList(list.data)
        });
        getTopRating().then(list => {
            if (list.status === 200)
                setTopRatingList(list.data);
        })
    }, [])


    return (
        <Box sx={styles.box}>
            <Banner />
            <ProductSlider sliderTitle="Top Rating" productList={topRatingList} />
            <Sponsors />
            <Category categoryName="Laptop" productList={laptopList} />
            <Category categoryName="Monitor" productList={monitorList} />
            <Category categoryName="CPU" productList={cpuList} />
        </Box>
    )
}

export default Home
