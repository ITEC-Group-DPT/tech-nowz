import React from 'react'
import styles from './OrderHistory.style'

import { Container, Box } from '@mui/material'
import OrderComponent from '../../components/OrderComponent/OrderComponent';
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';

const orderList = {
    "2876": [
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
      ],
    "2875": [
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
    ],
    "2874": [
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

const OrderHistory = () => {
  function OrderList(props){
    const list = props.orderList;
    const orders = Object.keys(list).map((order, index) =>
      <OrderComponent 
        orderID={Object.keys(list)[index]}
        productList={list[order]}
      />
    );
    return (orders);
  }

  return (
    <Container sx={styles.main}>
      <h1 style={styles.title}>Order History</h1>
      <OrderList orderList={orderList}></OrderList>
    </Container>
  )
}

export default OrderHistory