import React from 'react'
import styles from './OrderDetail.style'
import { useParams, useLocation } from "react-router-dom";
import { Container, Box, Typography } from '@mui/material'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const order = {
    "orderInfo": {
      "orderID": 2876,
      "userID": 13,
      "name": "Minh Đạo",
      "phone": "0785031700",
      "address": "Huynh Van banh, P.13, Phu Nhuan, Ho Chi Minh",
      "totalPrice": "135970000",
      "dateCreated": "2021-07-08 15:30:14",
      "dateDiff": 150942
    },
    "itemList": [
      {
        "productID": 112,
        "name": "Laptop ASUS ROG Strix G G531GT-AL017T",
        "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Laptop%2F12.webp?alt=media&token=494850d3-5a82-4735-9a3b-e06156270f18",
        "price": 27990000,
        "quantity": 2,
        "rating": 4.16473,
        "sold": 36
      },
      {
        "productID": 113,
        "name": "Laptop Acer Predator Triton 500 PT515-52-72U2",
        "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Laptop%2F13.webp?alt=media&token=3c996ee9-d17c-41de-a14f-cb9d764e96b6",
        "price": 79990000,
        "quantity": 1,
        "rating": 4.69174,
        "sold": 51
      }
    ]
};

const OrderDetail = () => {
    const { id } = useParams();
   // const query = useQuery();
   // const id = query.get("i");

    function formatDateDiff(value){
       let type;
        if(value >= 1440){
            value /= 1440;
            type = "days";
        }
        else if(value >= 60){
            value /= 60;
            type = "hours";
        }
        return (`${Math.round(value)} ${type} ago` );
    }

    function ProductList(props){
        const productList = props.productList;
        const products = productList.map((product) =>
            <HorizontalProduct
                product={product}
                ratingSize = {"20px"}
            />
        );
        return (products);
    }

    return (
        <Container sx={styles.main}>
            <Typography variant="h3" sx={styles.title}>Order : #{id} </Typography>
            <Typography variant="h6" sx={styles.content}><b>Created: </b>{formatDateDiff(order['orderInfo']['dateDiff'])}</Typography>
            <Typography variant="h3" sx={styles.title}>Customer Detail</Typography>
            <Typography variant="h6" sx={styles.content}><b>Customer: </b>{order['orderInfo']['name']} - {order['orderInfo']['phone']}</Typography>
            <Typography variant="h6" sx={styles.content}><b>Address: </b>{order['orderInfo']['address']}</Typography>
            <Typography variant="h3" sx={styles.title}>Package Detail</Typography>
            <Box sx={styles.productList}>
                <ProductList productList={order['itemList']}/>
            </Box>
            <Box sx={styles.priceBox}>
                <Typography variant="h3" sx={styles.title}>Total Price</Typography>
                <Typography variant="h3" sx={styles.price}>{Number(order['orderInfo']['totalPrice']).toLocaleString()}đ</Typography>
            </Box>
        </Container>
    )
}

export default OrderDetail