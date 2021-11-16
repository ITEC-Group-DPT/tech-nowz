import React, { useEffect, useState } from 'react'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct'
import HorizontalProductSkeleton from '../../components/HorizontalProductSkeleton/HorizontalProductSkeleton'
import styles from './Favorite.styles'
import { Container, Typography, Collapse } from '@mui/material'
import { getFavoriteListApi, changeFavoriteApi } from '../../api/favoriteApi'
import { Box } from '@mui/system'
import { TransitionGroup } from 'react-transition-group'

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
            <Typography sx={styles.sliderTitle}>Favorites</Typography>
            <Container maxWidth="md">
                {favoriteList.isLoading ? (
                    <TransitionGroup>
                        <Collapse>
                            <HorizontalProductSkeleton />
                        </Collapse>
                    </TransitionGroup>
                ) : (
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
                )}
            </Container>
        </Box>
    )
}

export default Favorite
