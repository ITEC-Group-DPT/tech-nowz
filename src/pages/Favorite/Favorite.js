import React, { useEffect, useState } from 'react'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct'
import styles from './favorite.style'

import { Container, Typography } from '@mui/material'
import { getFavoriteListApi, changeFavoriteApi } from '../../api/favoriteApi'
import { Box } from '@mui/system'

// const product = [{
//     "productID": 69,
//     "type": "Headphone",
//     "description": "",
//     "spec": "- Kết nối: Wirless (đầu thu USB) \n- Drive: 50mm / 32 Ohm \n- Thời gian sử dụng pin lên đến 20 giờ \n- Led RGB tích hợp \n- Âm thanh 7.1 Surround",
//     "name": "Tai nghe không dây Corsair Virtuoso RGB Gunmetal",
//     "price": 5600000,
//     "rating": 2.66545,
//     "sold": 15,
//     "quantity": 2,
//     "dateCreated": "2021-07-02 20:50:24",
//     "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Headphone%2F09.webp?alt=media&token=17e9d962-608c-4325-aa60-c208f51b23a6",
// },
// {
//     "productID": 69,
//     "type": "Headphone",
//     "description": "",
//     "spec": "- Kết nối: Wirless (đầu thu USB) \n- Drive: 50mm / 32 Ohm \n- Thời gian sử dụng pin lên đến 20 giờ \n- Led RGB tích hợp \n- Âm thanh 7.1 Surround",
//     "name": "Hehe",
//     "price": 5600000,
//     "rating": 2.66545,
//     "sold": 15,
//     "quantity": 2,
//     "dateCreated": "2021-07-02 20:50:24",
//     "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Headphone%2F09.webp?alt=media&token=17e9d962-608c-4325-aa60-c208f51b23a6",
// }
// ];

const Favorite = () => {

    // const [list, setList] = useState(product));

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
        console.log('1');
        // useEffect(() => {
        //     getFavoriteListApi().then(response =>{
        //         if(response.data['success'] == true){
        //             setFavoriteList(response.data['data']);
        //             console.log(response.data['data']);
        //         }
        //     })
        // }, [])

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

        // = {() => console.log('press 2')}
    )
}

export default Favorite
