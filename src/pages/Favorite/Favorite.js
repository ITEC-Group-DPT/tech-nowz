import React, { useEffect, useState } from 'react'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct'
import HorizontalProductSkeleton from '../../components/HorizontalProductSkeleton/HorizontalProductSkeleton'
import styles from './Favorite.styles'
import { Container, Typography, Collapse } from '@mui/material'
import { getFavoriteListApi, changeFavoriteApi } from '../../api/favoriteApi'
import { Box } from '@mui/system'
import { TransitionGroup } from 'react-transition-group'
import EmptyList from "../../components/EmptyList/EmptyList"
import emptyFav from "../../img/empty-favorite.png"

const Favorite = () => {
    const [favoriteList, setFavoriteList] = useState({ "isLoading": true })
    useEffect(() => {
        getFavoriteListApi().then(response => {
            if (response.data.success == true) {
                setFavoriteList({ "isLoading": false, "data": response.data.data })
                console.log("favoriteList: ", response.data.data)
            }
        })
    }, [])

    const onDelete = (productID) => {
        changeFavoriteApi(productID).then(response => {
            console.log(response)
            if (response.data.success == true) {
                if (response.data.data.isLike == false) {
                    let newList = favoriteList.data.filter((product) => product.productID !== productID)
                    console.log("newFavoriteList: ", newList)
                    setFavoriteList({ ...favoriteList, "data": newList })
                }
            }
        })
    }

    return (
        <Box sx={styles.box}>
            <Container maxWidth="md">
                <Typography sx={styles.sliderTitle}>Favorites</Typography>
                {favoriteList.isLoading ? (
                    <>
                        <HorizontalProductSkeleton />
                        <HorizontalProductSkeleton />
                    </>
                ) : (
                    <>
                        {favoriteList.data && favoriteList.data.length === 0 ? (
                            <EmptyList img={emptyFav} title={"Your favorite list is empty"} imgHeight={'45vh'} btnMarginTop={"5vh"} />
                        ) : (
                            <>
                                <TransitionGroup>
                                    {favoriteList.data.map(product =>
                                        <Collapse key={product.productID}>
                                            <HorizontalProduct
                                                product={product}
                                                key={product.productID}
                                                canDelete={true}
                                                ratingSize={"20px"}
                                                onPressDelete={(e) => {
                                                    e.preventDefault()
                                                    onDelete(product.productID)
                                                }}
                                            />
                                        </Collapse>
                                    )}
                                </TransitionGroup>
                            </>
                        )}
                    </>
                )}
            </Container>
        </Box>
    )
}

export default Favorite
