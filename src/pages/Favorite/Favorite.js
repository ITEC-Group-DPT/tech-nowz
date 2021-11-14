import React, { useEffect, useState } from 'react'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct'
import styles from './Favorite.styles'
import { Container, Typography, Collapse } from '@mui/material'
import { getFavoriteListApi, changeFavoriteApi } from '../../api/favoriteApi'
import { Box } from '@mui/system'
import { TransitionGroup } from 'react-transition-group';

const Favorite = () => {
    const [list, setFavoriteList] = useState([]);

    useEffect(() => {
        getFavoriteListApi().then(response => {
            if (response.data.success == true) {
                setFavoriteList(response.data.data);
                console.log("Fav list: ", response.data.data);
            }
        })
    }, [])

    const onDelete = (productID) => {
        changeFavoriteApi(productID).then(response => {
            console.log(response);
            if (response.data.success == true) {
                if (response.data.data.isLike == false) {
                    let newList = list.filter((product) => product.productID !== productID);
                    console.log(newList);
                    setFavoriteList(newList);
                }
            }
        })
    }

    return (
        <Box sx={styles.box}>
            <Typography sx={styles.sliderTitle}>Favorites</Typography>
            <Container maxWidth="md">
                <TransitionGroup>
                    {list.map(product =>
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
            </Container>
        </Box>
    )
}

export default Favorite
