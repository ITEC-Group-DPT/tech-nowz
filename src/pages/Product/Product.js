import React, { useState, useEffect } from 'react'
import styles from './Product.styles'
import { icons } from '../../constant'
import { getProductAPI, getProductCategoryAPI } from '../../api/productApi'
import ProductItem from '../../components/ProductItem/ProductItem'
import { useParams, useLocation } from "react-router-dom"
import { Container, Grid, Button, IconButton, CardMedia, Rating, Typography, Divider, Tab, Skeleton } from '@mui/material'
import { Box } from '@mui/system'
import Slider from "react-slick"
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import ProductSkeleton from '../../components/ProductSkeleton/ProductSkeleton'

//redux
import { addProductToCart } from '../../store/actions/cartAction'
import { useDispatch } from 'react-redux'

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

const settingsIMG = {
    dots: true,
    speed: 600,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    centerPadding: '60px',

    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
}

const settingsRelatedProduct = {
    dots: true,
    speed: 400,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
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
            }
        },
        {
            breakpoint: 1190,
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
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        }
    ],
}

const Product = () => {
    //const { name } = useParams()
    const query = useQuery()
    const productID = query.get("i")
    const [product, setProduct] = useState({ "isLoading": true })
    const [relatedProductList, setRelatedProductList] = useState({ "isLoading": true, "productList": [] })
    const [tab, setTab] = React.useState('1')
    let formatedPrice, productDesc = "Sản phẩm chưa có thông tin mô tả"

    const dispatch = useDispatch();
    const addItemToCart = () => {
        dispatch(addProductToCart(product.product));
    }
    useEffect(() => {
        setProduct({ "isLoading": true }) // when clicking on another product, the isLoading is set to true
        getProductAPI(productID).then(response => {
            if (response.data.success) {
                const data = response.data.data
                console.log(response);
                setProduct({ "isLoading": false, ...data })
                formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.product.price)
                if (data.product.description !== "") {
                    productDesc = data.product.description
                }
                getProductCategoryAPI(data.product.type).then(response => {
                    if (response.data.success) {
                        setRelatedProductList({ "isLoading": false, "productList": response.data.data })
                    }
                })
            }
        })
    }, [productID]) // when clicking on another product, productID is changed, this will trigger the useEffect again to call a new product API

    const handleChange = (event, newValue) => {
        setTab(newValue);
    }

    return (
        <Box sx={styles.box}>
            <Container maxWidth="xl" sx={styles.productContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                        {product.isLoading ? (
                            <Slider {...settingsIMG}>
                                <Skeleton variant="rectangular" animation="wave" sx={styles.imgSkeleton} />
                            </Slider>
                        ) : (
                            <Slider {...settingsIMG}>
                                {getImgList(product.product).map(imgSrc => (
                                    <Box>
                                        <CardMedia
                                            component="img"
                                            image={imgSrc}
                                            alt="product image"
                                            sx={styles.image}
                                        />
                                    </Box>
                                ))}
                            </Slider>
                        )}

                    </Grid>
                    <Grid item xs={12} lg={6} sx={styles.wrapper}>
                        <Box sx={styles.boxWrapper}>
                            {product.isLoading ? (
                                <Box>
                                    <Box sx={styles.boxCenter}>
                                        <Skeleton variant="text" animation="wave" sx={styles.skeletonColor}>
                                            <Typography variant="h5" component="div" sx={styles.pName}>lorem lorem lorem lorem lorem lorem</Typography>
                                        </Skeleton>
                                    </Box>
                                    <Box sx={styles.boxCenter}>
                                        <Skeleton variant="text" animation="wave" sx={styles.skeletonColor}>
                                            <Typography variant="h5" component="div" sx={styles.pName}>lorem lorem lorem lorem</Typography>
                                        </Skeleton>
                                    </Box>
                                </Box>

                            ) : (
                                <Typography variant="h5" component="div" sx={styles.pName}>{product.product.name}</Typography>
                            )}

                            {product.isLoading ? (
                                <Box sx={styles.boxCenter}>
                                    <Skeleton variant="text" animation="wave" sx={{ mt: 1, ...styles.skeletonColor }}>
                                        <Rating size="small" readOnly value={5} precision={0.5} sx={styles.pRating} />
                                    </Skeleton>
                                </Box>
                            ) : (
                                <Box sx={styles.pRatingWrapper}>
                                    <Rating size="small" readOnly value={product.product.rating} precision={0.5} sx={styles.pRating} />
                                    <Typography variant="h5" sx={styles.pSold}>({product.product.sold})</Typography>
                                </Box>
                            )}

                            {product.isLoading ? (
                                <Box sx={styles.boxCenter}>
                                    <Skeleton variant="text" animation="wave" sx={{ mt: 4, ...styles.skeletonColor }}>
                                        <Typography variant="h5" component="div" sx={styles.pPrice}>9,000,000,000d</Typography>
                                    </Skeleton>
                                </Box>
                            ) : (
                                <Box sx={styles.priceWrapper}>
                                    <Box sx={styles.dividerWrapper}>
                                        <Divider sx={styles.divider} />
                                    </Box>
                                    <Typography variant="h5" component="div" sx={styles.pPrice}>{formatedPrice}</Typography>
                                </Box>
                            )}

                            {product.isLoading ? (
                                <Box sx={styles.btnWrapper}>
                                    <Skeleton variant="text" animation="wave" sx={styles.skeletonButton}>
                                        <Button variant="outlined" startIcon={product.isFavorite ? (<icons.IsFavorite />) : (<icons.NotFavorite />)} sx={styles.addBtn}>
                                            Add to Cart
                                        </Button>
                                    </Skeleton>
                                    <Skeleton variant="text" animation="wave" sx={styles.skeletonButton}>
                                        <Button variant="contained" startIcon={<icons.AddCart />} sx={styles.addBtn}>
                                            Add to Cart
                                        </Button>
                                    </Skeleton>
                                </Box>

                            ) : (
                                <Box sx={styles.btnWrapper}>
                                    {product.favorite ? (
                                        <Button variant="outlined" startIcon={<icons.IsFavorite style={{ color: "red" }} />} sx={styles.favoriteBtn}>
                                            Remove Favorite
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="outlined" startIcon={<icons.NotFavorite />} sx={styles.favoriteBtn}>
                                            Add Favorite
                                        </Button>
                                    )}
                                    <Button
                                        onClick={addItemToCart} variant="contained"
                                        startIcon={<icons.AddCart />}
                                        sx={styles.addBtn}
                                    >
                                        Add to Cart
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Container >

            <Container maxWidth="lg" sx={styles.detailContainer}>
                <Box>
                    <TabContext value={tab}>
                        <Box sx={styles.tabListWrapper} >
                            <TabList onChange={handleChange} aria-label="Tabs" TabIndicatorProps={{
                                style: { background: "black", height: "3px", top: "45px", color: "red" }
                            }} textColor='inherit'>
                                {product.isLoading ? (
                                    <Skeleton variant="text" animation="wave" sx={styles.skeletonTab}>
                                        <Tab sx={styles.tabTitle} value="1" />
                                    </Skeleton>
                                ) : (
                                    <Tab sx={styles.tabTitle} label="Specification" value="1" />
                                )}
                                {product.isLoading ? (
                                    <Skeleton variant="text" animation="wave" sx={styles.skeletonTab}>
                                        <Tab sx={styles.tabTitle} value="2" />
                                    </Skeleton>
                                ) : (
                                    <Tab sx={styles.tabTitle} label="Description" value="2" />
                                )}
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {product.isLoading ? (
                                <Box>
                                    <Box sx={styles.boxCenter}>
                                        <Skeleton variant="text" animation="wave" sx={styles.skeletonColor}>
                                            <Typography sx={styles.details}>lorem lorem lorem lorem lorem lorem lorem lorem</Typography>
                                        </Skeleton>
                                    </Box>
                                    <Box sx={styles.boxCenter}>
                                        <Skeleton variant="text" animation="wave" sx={styles.skeletonColor}>
                                            <Typography sx={styles.details}>lorem lorem lorem lorem lorem</Typography>
                                        </Skeleton>
                                    </Box>
                                    <Box sx={styles.boxCenter}>
                                        <Skeleton variant="text" animation="wave" sx={styles.skeletonColor}>
                                            <Typography sx={styles.details}>lorem lorem lorem lorem lorem lorem lorem lorem</Typography>
                                        </Skeleton>
                                    </Box>
                                    <Box sx={styles.boxCenter}>
                                        <Skeleton variant="text" animation="wave" sx={styles.skeletonColor}>
                                            <Typography sx={styles.details}>lorem lorem lorem lorem lorem</Typography>
                                        </Skeleton>
                                    </Box>
                                </Box>

                            ) :
                                (
                                    <Typography sx={styles.details}>{product.product.spec}</Typography>
                                )}
                        </TabPanel>
                        <TabPanel value="2">
                            {product.isLoading ? ("") :
                                (
                                    <Typography sx={styles.details}>{productDesc}</Typography>
                                )}
                        </TabPanel>
                    </TabContext>
                </Box>
            </Container>

            <Container maxWidth="xl" sx={styles.relatedProductContainer}>

                {relatedProductList.isLoading ? (
                    <Box>
                        <Box sx={styles.boxCenter}>
                            <Skeleton variant="text" animation="wave" sx={styles.skeletonTitle}>
                                <Typography gutterBottom variant="h5" component="div">lorem lorem lorem</Typography>
                            </Skeleton>
                        </Box>
                        <Slider {...settingsRelatedProduct}>
                            {Array(10).fill().map(() => (<ProductSkeleton isSlider />))}
                        </Slider>
                    </Box>
                ) : (
                    <Box>
                        <Typography gutterBottom variant="h5" component="div" sx={styles.sliderTitle}>Related products</Typography>
                        <Slider {...settingsRelatedProduct}>
                            {relatedProductList.productList.map(product => (
                                <ProductItem
                                    product={product}
                                    key={product.productID}
                                    isSlider
                                />
                            ))}
                        </Slider>
                    </Box>
                )}
            </Container>
        </Box>
    )
}

export default Product