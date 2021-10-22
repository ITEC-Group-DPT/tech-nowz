import React, { useState, useEffect } from 'react'
import styles from './Product.styles'
import { useParams, useLocation } from "react-router-dom"
import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { icons } from '../../constant'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Rating from '@mui/material/Rating'
import { getProductAPI } from '../../api/api'
import Slider from "react-slick"
import Skeleton from '@mui/material/Skeleton'
import { Divider } from '@mui/material'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const getImgList = (product) => {
    let res = []
    for (let i = 0; i < 4; i++) {
        if (product[`img${i + 1}`] != "")
            res.push(product[`img${i + 1}`])
    }
    return res
}

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
    speed: 450,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    centerPadding: '60px',

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
}

const Product = () => {
    const { name } = useParams()
    const query = useQuery()
    const id = query.get("i")

    const [product, setProduct] = useState({ "isLoading": true })
    let formatedPrice
    useEffect(() => {
        getProductAPI(id).then(response => {
            // if (response.data.success) {}
            // else {}
            if (response.status === 200) {
                setProduct({ "isLoading": false, ...response.data })
            }
        })
    }, [])

    if (product.isLoading === true) {
        console.log("LOADING...");
    }
    else {
        formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.product.price)
        console.log(product);
    }

    const [tab, setTab] = React.useState('1');

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Box sx={styles.box}>
            <Container maxWidth="xl" sx={styles.upperContainer}>
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={6.5}>
                        {product.isLoading ? (
                            <Slider {...settings}>
                                <Skeleton variant="rectangular" animation="wave" sx={styles.imgSkeleton} />
                            </Slider>
                        ) : (
                            <Slider {...settings}>
                                {getImgList(product.product).map(imgSrc => (
                                    <Box>
                                        <img src={imgSrc} style={styles.image} />
                                    </Box>
                                ))}
                            </Slider>
                        )}

                    </Grid>
                    <Grid item xs={12} lg={5.5} sx={styles.wrapper}>
                        <Box>
                            {product.isLoading ? ("") : (
                                <Typography variant="h5" component="div" sx={styles.pName}>{product.product.name}</Typography>
                            )}
                            {product.isLoading ? ("") : (
                                <Box sx={styles.pRatingWrapper}>
                                    <Rating size="small" readOnly value={product.product.rating} precision={0.5} sx={styles.pRating} />
                                    <Typography variant="h5" sx={styles.pSold}>({product.product.sold})</Typography>
                                </Box>
                            )}
                            {product.isLoading ? ("") : (
                                <Box sx={styles.priceWrapper}>
                                    <Box sx={styles.dividerWrapper}>
                                        <Divider sx={styles.divider} />
                                    </Box>
                                    <Typography variant="h5" component="div" sx={styles.pPrice}>{formatedPrice}</Typography>
                                </Box>
                            )}

                            {product.isLoading ? ("") : (
                                <Box sx={styles.btnWrapper}>
                                    <Button variant="outlined" startIcon={product.isFavorite ? (<icons.IsFavorite />) : (<icons.NotFavorite />)} sx={styles.favoriteBtn}>
                                        Add to Favorite
                                    </Button>
                                    <Button variant="contained" startIcon={<icons.AddCart />} sx={styles.addBtn}>
                                        Add to Cart
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Container >
            <Container maxWidth="lg" sx={styles.lowerContainer}>
                <Box>
                    <TabContext value={tab}>
                        <Box sx={styles.tabListWrapper} >
                            <TabList onChange={handleChange} aria-label="Tabs" TabIndicatorProps={{
                                style: { background: "black", height: "3px", top: "45px", color: "red" }
                            }} textColor='inherit'>
                                <Tab sx={styles.tabTitle} label="Specification" value="1" />
                                <Tab sx={styles.tabTitle} label="Description" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {product.isLoading ? ("") :
                                (
                                    <Typography sx={styles.spec}>{product.product.spec}</Typography>
                                )}
                        </TabPanel>
                        <TabPanel value="2">
                            {product.isLoading ? ("") :
                                (
                                    <Typography sx={styles.desc}>{product.product.description}</Typography>
                                )}
                        </TabPanel>
                    </TabContext>
                </Box>
            </Container>
        </Box>
    )
}

export default Product
