import React, { useEffect } from 'react'
import styles from './cart.style'

import { getCart } from '../../store/actions/cartAction';
import { cartSelector } from "../../store/selectors"

import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';

const product = {
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
};
const Cart = () => {

    const { cartList, totalPrice, totalQuantity } = useSelector(cartSelector);
    console.log('cartList: ', cartList);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getCart());
    }, [])
    return (
        <Container sx={styles.main}>
            {
                cartList ?
                    cartList.map(product =>
                        <HorizontalProduct
                            product={product}
                            canDelete
                            onPressDelete={() => console.log('press 1')}
                        />)
                    : <></>
            }
        </Container>
    )
}

export default Cart

