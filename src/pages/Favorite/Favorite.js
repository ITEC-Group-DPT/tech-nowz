import React, { useEffect, useState } from 'react'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct'
import styles from './favorite.style'

import { Container, Typography } from '@mui/material'
import { getFavoriteListApi, changeFavoriteApi } from '../../api/favoriteApi'
import { Box } from '@mui/system'


const Favorite = () => {


    const [list, setFavoriteList] = useState([]);
    useEffect(() => {
        getFavoriteListApi().then(response => {
            if (response.data['success'] == true) {
                setFavoriteList(response.data['data']);
                console.log(response.data['data']);
            }
        })
    }, [])
    function onDelete(productID) {

        changeFavoriteApi(productID).then(response => {
            console.log(response);
            if (response.data['success'] == true) {
                if (response.data.data['isLike'] == false) {
                    let newList = list.filter((product) => product.productID !== productID);
                    console.log(newList);
                    setFavoriteList(newList);
                }
            }
        })


        // const index = newList.findIndex(item => item.productID == productID);
        // if (index != -1) newList.splice(index,1);


    }
    return (
        <Box sx={{ my: '20px' }}>
            <Typography gutterBottom variant="h5" component="div" sx={styles.sliderTitle}>Favorite</Typography>
            <Container sx={{ mx: 'auto' }}>
                {
                    list.map(product =>
                        <HorizontalProduct 
                            product={product}
                            key={product.productID}
                            canDelete={true}
                            ratingSize={"20px"}
                            onPressDelete={() => onDelete(product.productID)}
                        />
                    )
                }

            </Container>
        </Box>

    )
}

export default Favorite
