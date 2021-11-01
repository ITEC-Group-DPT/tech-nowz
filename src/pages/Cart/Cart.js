import React, { useEffect } from 'react'
import styles from './cart.style'

import { cartSelector } from "../../store/selectors"

import { useDispatch, useSelector } from 'react-redux';
import { Container, Box, Typography, Button } from '@mui/material'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';
import { removeProductFromCart } from "../../store/actions/cartAction"

const Cart = () => {

    const { cartList, totalPrice, totalQuantity } = useSelector(cartSelector);

    const formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);
    console.log('cartList: ', cartList);

    const dispatch = useDispatch();
    return (
        <Box sx={styles.main}>
            <Box sx={{ flex: 7 }}>
                {
                    cartList ?
                        cartList.map(product =>
                            <HorizontalProduct
                                cartProduct
                                product={product}
                                canDelete
                                onPressDelete={
                                    () => dispatch(removeProductFromCart(product))
                                }
                            />)
                        : <></>
                }
            </Box>
            <Box sx={styles.summary}>
                <Box sx={styles.summaryData}>
                    <Typography sx={styles.orderSummary}>
                        Order Summary
                    </Typography>

                    <Box sx={styles.taxContainer}>
                        <Typography sx={styles.summaryTitle}>Tax</Typography>
                        <Typography sx={styles.tax}>0đ</Typography>
                    </Box>

                    <Box sx={styles.totalContainer}>
                        <Typography sx={styles.summaryTitle}>Total</Typography>
                        <Typography sx={styles.total}>
                            {formatedPrice}</Typography>
                    </Box>
                </Box>

                <Button
                    sx={styles.checkoutButton}
                    variant="contained"
                    color="error"
                >
                    Checkout
                </Button>
            </Box>

        </Box>
    )
}

export default Cart

