import React, { useEffect, useState } from 'react'
import { styles, useStyles } from './CategoryPage.styles'
import { Box, Pagination, Container, Grid, Typography } from '@mui/material'
import { useParams, useLocation } from "react-router-dom"
import { getProductCategoryAPI } from '../../api/productApi'
import ProductSkeleton from '../../components/ProductSkeleton/ProductSkeleton'
import ProductItem from '../../components/ProductItem/ProductItem'

const CategoryPage = () => {
    const { name } = useParams()
    const classes = useStyles()

    const [productList, setProductList] = useState({ "isLoading": true })
    const [page, setPage] = useState(1)
    const itemsPerPage = 8
    const offset = (page - 1) * itemsPerPage

    useEffect(() => {
        setProductList({ "isLoading": true }) // when clicking on another page, the isLoading is set to true
        getProductCategoryAPI(name, offset, itemsPerPage).then(response => {
            if (response.data.success) {
                const data = response.data.data
                console.log("productList: ", data)
                setProductList({ "isLoading": false, "data": data })
            }
        })
        window.scrollTo(0, 0)
    }, [page])

    const handleChangePage = (event, value) => {
        setPage(value)
    }

    return (
        <Box sx={styles.box}>
            <Container maxWidth="lg">
                <Box sx={styles.titleWrapper}>
                    <Typography sx={styles.categoryTitle}>{name}</Typography>
                </Box>
                {productList.isLoading ? (
                    <Grid container spacing={{ xs: 1, md: 3, lg: 3.5 }}>
                        {Array(8).fill().map(() => (
                            <Grid item xs={6} md={4} lg={3}>
                                <ProductSkeleton />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Grid container spacing={{ xs: 1, md: 3, lg: 3.5 }}>
                        {productList.data.map((product) => (
                            <Grid item xs={6} md={4} lg={3} key={product.productID}>
                                <ProductItem
                                    product={product}
                                    key={product.productID}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}

                <Box sx={styles.paginationWrapper}>
                    <Pagination classes={{ ul: classes.ul }} count={3} page={page} onChange={handleChangePage} />
                </Box>
            </Container>
        </Box>
    )
}

export default CategoryPage
