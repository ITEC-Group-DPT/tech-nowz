import React, {useState} from 'react'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct'
import styles from './favorite.style'

import { Container, Typography } from '@mui/material'

const product = [{
    "productID": 69,
    "type": "Headphone",
    "description": "",
    "spec": "- Kết nối: Wirless (đầu thu USB) \n- Drive: 50mm / 32 Ohm \n- Thời gian sử dụng pin lên đến 20 giờ \n- Led RGB tích hợp \n- Âm thanh 7.1 Surround",
    "name": "Tai nghe không dây Corsair Virtuoso RGB Gunmetal",
    "price": 5600000,
    "rating": 2.66545,
    "sold": 15,
    "quantity": 2,
    "dateCreated": "2021-07-02 20:50:24",
    "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Headphone%2F09.webp?alt=media&token=17e9d962-608c-4325-aa60-c208f51b23a6",
},
{
    "productID": 69,
    "type": "Headphone",
    "description": "",
    "spec": "- Kết nối: Wirless (đầu thu USB) \n- Drive: 50mm / 32 Ohm \n- Thời gian sử dụng pin lên đến 20 giờ \n- Led RGB tích hợp \n- Âm thanh 7.1 Surround",
    "name": "Hehe",
    "price": 5600000,
    "rating": 2.66545,
    "sold": 15,
    "quantity": 2,
    "dateCreated": "2021-07-02 20:50:24",
    "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Headphone%2F09.webp?alt=media&token=17e9d962-608c-4325-aa60-c208f51b23a6",
}
];

const Favorite = () => {

    const [list, setList] = useState(product);

    const onDelete = (productID) => {
        const newList = JSON.parse(JSON.stringify(list));

        const index = newList.findIndex(item => item.productID == productID);
        if (index != -1) newList.splice(index,1);

        setList(newList);
    }
    return (
        
        <Container sx={styles.main}>
            <Typography gutterBottom variant="h5" component="div" sx={styles.sliderTitle}>Favorite</Typography>
            {
                list.map(product => 
                    <HorizontalProduct styles={{margin: "50px 0"}}
                        product={product} 
                        canDelete
                        ratingSize = {"20px"}
                        onPressDelete = {() => onDelete(product.productID)}
                    />
                    )
            }
        
        </Container>
        // = {() => console.log('press 2')}
    )
}

export default Favorite
