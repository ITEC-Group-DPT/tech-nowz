import React, { useEffect } from 'react'
import styles from './cart.style'

import { cartSelector } from "../../store/selectors"

import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';
import {getCart,removeProductFromCart} from "../../store/actions/cartAction"

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
                            onPressDelete={
                                () => dispatch(removeProductFromCart(product.productID))
                            }
                        />)
                    : <></>
            }
        </Container>
    )
}

export default Cart

