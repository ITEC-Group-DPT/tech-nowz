import React from 'react'
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Category from '../../components/Category/Category';
import ProductSlider from '../../components/ProductSlider/ProductSlider';

const productList = [
    {
        'productID': '1',
        'name': 'CPU AMD Ryzen 3 3100',
        'img1': 'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/CPU%2Fcpu1.webp?alt=media&token=37818a43-e85d-4f06-ba55-e6761902660d',
        'rating': '2.73844',
        'sold': '26',
        'price': '2590000',
    },
    {
        'productID': '2',
        'name': 'Thùng máy Case Antec TORQUE BLACK',
        'img1': 'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Case%2F01.webp?alt=media&token=6269ee01-7974-48ec-8242-164c382c671d',
        'rating': '4.73271',
        'sold': '22',
        'price': '7290000',
    },
    {
        'productID': '3',
        'name': 'Ghế Gamer AKRacing OnyX Deluxe K901B Real Leather',
        'img1': 'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/GamingChair%2F05.jpg?alt=media&token=be02eabb-8447-4d04-8f5d-f4ee9d025e08',
        'rating': '3.45138',
        'sold': '37',
        'price': '14990000',
    },
    {
        'productID': '4',
        'name': 'Tai nghe HyperX Orbit',
        'img1': 'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Headphone%2F04.webp?alt=media&token=94ca845b-2553-4a77-b298-0b02f3715f18',
        'rating': '2.5477',
        'sold': '45',
        'price': '7650000',
    },
    {
        'productID': '5',
        'name': 'Bàn phím Leopold FC750RPD Graphite',
        'img1': 'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Keyboard%2FLeopold%20FC750RPD.webp?alt=media&token=8179359b-14a3-4ee7-8003-e8f4937be68c',
        'rating': '4.94613',
        'sold': '71',
        'price': '3150000',
    },
    {
        'productID': '6',
        'name': 'Laptop Apple MacBook Air 13" 2019',
        'img1': 'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Laptop%2F11.webp?alt=media&token=c1ee04be-23e1-4ea9-a242-bfd2ce88e84d',
        'rating': '2.73844',
        'sold': '67',
        'price': '28590000',
    },
    {
        'productID': '7',
        'name': 'Màn hình ASUS VG278QR 27',
        'img1': 'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Monitor%2FAsus%20VG278QR.png?alt=media&token=c6fe01d6-7339-482f-8a17-56948bf78386',
        'rating': '4.73271',
        'sold': '2',
        'price': '12290000',
    },
    {
        'productID': '8',
        'name': 'Chuột Razer Deathadder V2',
        'img1': 'https://firebasestorage.googleapis.com/v0/b/technow-4b3ab.appspot.com/o/Mouse%2FMouse7%2Fmouse7.webp?alt=media&token=d8f0ee02-155a-41ed-94c8-dbc977bc7567',
        'rating': '3.45138',
        'sold': '11',
        'price': '1990000',
    },
]


const Home = () => {

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'rgb(245, 245, 245)', paddingTop: 80 }}>
            <Container maxWidth="xl" style={{ marginTop: '60px' }}>
                <ProductSlider sliderTitle="Top Seller" productList={productList} />
            </Container>
            <Container maxWidth="xl" style={{ marginTop: '60px' }}>
                <ProductSlider sliderTitle="Top Rating" productList={productList} />
            </Container>
            <Container maxWidth="lg">
                <Category categoryName="Laptop" productList={productList} />
                <Category categoryName="Monitor" productList={productList} />
                <Category categoryName="Graphic Card" productList={productList} />
            </Container>
        </div>
    )
}

export default Home
