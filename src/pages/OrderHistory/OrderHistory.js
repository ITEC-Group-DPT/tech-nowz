import React from 'react'
import styles from './OrderHistory.style'

import { Container } from '@mui/material'
import OrderComponent from '../../components/OrderComponent/OrderComponent';

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
  "2877": [
    {
      "productID": 112,
      "name": "Laptop ASUS ROG Strix G G531GT-AL017T",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Laptop%2F12.webp?alt=media&token=494850d3-5a82-4735-9a3b-e06156270f18",
      "price": 27990000,
      "quantity": 1,
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
    },
    {
      "productID": 218,
      "name": "RAM GSKILL Trident Z Neo DDR4 CL16-16-16-36 (16G DDR4 1x16G 3600)",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/RAM%2Fram18.jpg?alt=media&token=ff0f01ff-022d-4268-a73d-f10183456934",
      "price": 4145000,
      "quantity": 1,
      "rating": 4.27887,
      "sold": 61
    },
    {
      "productID": 268,
      "name": "VGA GIGABYTE GeForce RTX™ 2070 SUPER AORUS 8G",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/VGA%2Fvga08.webp?alt=media&token=756e67e9-a834-4ef5-af7b-5c799d551553",
      "price": 16490000,
      "quantity": 1,
      "rating": 4.55674,
      "sold": 60
    }
  ],
  "2878": [
    {
      "productID": 160,
      "name": "Màn hình Asus ROG Swift PG65UQ 65'",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Monitor%2FAsus%20ROG%20Swift%20PG65UQ.jpg?alt=media&token=dc7d4273-83ac-474b-9122-72583d2be524",
      "price": 170000000,
      "quantity": 2,
      "rating": 4.93881,
      "sold": 100
    },
    {
      "productID": 218,
      "name": "RAM GSKILL Trident Z Neo DDR4 CL16-16-16-36 (16G DDR4 1x16G 3600)",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/RAM%2Fram18.jpg?alt=media&token=ff0f01ff-022d-4268-a73d-f10183456934",
      "price": 4145000,
      "quantity": 1,
      "rating": 4.27887,
      "sold": 61
    }
  ],
  "2879": [
    {
      "productID": 62,
      "name": "Tai nghe không dây Over-ear SteelSeries Arctis Pro Wireless",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Headphone%2F02.webp?alt=media&token=98a9b5a6-1445-42a0-b823-49fee3042ea8",
      "price": 9290000,
      "quantity": 2,
      "rating": 4.12625,
      "sold": 58
    },
    {
      "productID": 117,
      "name": "Laptop MSI Prestige 15 A10SC-222VN",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Laptop%2F17.webp?alt=media&token=43ee3694-d277-4aa1-8b95-e07e693e2337",
      "price": 33999000,
      "quantity": 1,
      "rating": 3.61643,
      "sold": 25
    },
    {
      "productID": 218,
      "name": "RAM GSKILL Trident Z Neo DDR4 CL16-16-16-36 (16G DDR4 1x16G 3600)",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/RAM%2Fram18.jpg?alt=media&token=ff0f01ff-022d-4268-a73d-f10183456934",
      "price": 4145000,
      "quantity": 3,
      "rating": 4.27887,
      "sold": 61
    },
    {
      "productID": 268,
      "name": "VGA GIGABYTE GeForce RTX™ 2070 SUPER AORUS 8G",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/VGA%2Fvga08.webp?alt=media&token=756e67e9-a834-4ef5-af7b-5c799d551553",
      "price": 16490000,
      "quantity": 1,
      "rating": 4.55674,
      "sold": 60
    }
  ],
  "2880": [
    {
      "productID": 218,
      "name": "RAM GSKILL Trident Z Neo DDR4 CL16-16-16-36 (16G DDR4 1x16G 3600)",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/RAM%2Fram18.jpg?alt=media&token=ff0f01ff-022d-4268-a73d-f10183456934",
      "price": 4145000,
      "quantity": 2,
      "rating": 4.27887,
      "sold": 61
    }
  ],
  "2881": [
    {
      "productID": 12,
      "name": "CPU Intel Core i7 9700F",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu12.webp?alt=media&token=1da3b0b7-29cf-42e5-93fd-c0ae9a5aa82f",
      "price": 8390000,
      "quantity": 1,
      "rating": 4.13438,
      "sold": 57
    },
    {
      "productID": 154,
      "name": "Màn hình Dell UltraSharp U2721DE 27'",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Monitor%2FDell%20UltraSharp%20U2721DE.jpg?alt=media&token=5c870f05-26de-42d1-99e5-80516cd22224",
      "price": 10690000,
      "quantity": 5,
      "rating": 2.73386,
      "sold": 44
    },
    {
      "productID": 155,
      "name": "Màn hình Asus ROG STRIX XG27WQ 27'",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Monitor%2FAsus%20ROG%20STRIX%20XG27WQ.jpg?alt=media&token=25557bd3-7c18-4bed-8685-6904b5e69dcb",
      "price": 12490000,
      "quantity": 1,
      "rating": 3.44871,
      "sold": 40
    },
    {
      "productID": 157,
      "name": "Màn hình LG 34WK95C-W 34'",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Monitor%2FLG%2034WK95C-W.jpg?alt=media&token=b9c8e836-41d9-442c-aef3-d8845a357bce",
      "price": 28500000,
      "quantity": 3,
      "rating": 4.24518,
      "sold": 54
    }
  ],
  "2891": [
    {
      "productID": 12,
      "name": "CPU Intel Core i7 9700F",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu12.webp?alt=media&token=1da3b0b7-29cf-42e5-93fd-c0ae9a5aa82f",
      "price": 8390000,
      "quantity": 12,
      "rating": 4.13438,
      "sold": 57
    },
    {
      "productID": 13,
      "name": "CPU Intel Core i5 10600KA Avengers Edition",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu13.webp?alt=media&token=16a89ada-614e-4573-86d0-b5993b947894",
      "price": 7990000,
      "quantity": 13,
      "rating": 4.68397,
      "sold": 30
    },
    {
      "productID": 14,
      "name": "CPU Intel Core i9 9900",
      "img1": "https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu14.jpg?alt=media&token=2c6ff173-c3e3-4608-bbf5-2438e888a4f0",
      "price": 13990000,
      "quantity": 14,
      "rating": 4.84987,
      "sold": 54
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