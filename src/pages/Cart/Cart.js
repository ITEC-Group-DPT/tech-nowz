import React, { useEffect } from 'react'
import styles from './Cart.styles'

import { cartSelector } from "../../store/selectors"

import { useDispatch, useSelector } from 'react-redux';
import { Container, Box, Typography, Button } from '@mui/material'
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';
import { removeProductFromCart, increseProductQuantity, decreseProductQuantity, removeAllCart } from "../../store/actions/cartAction"
import EmptyCart from '../../components/EmptyCart/EmptyCart';

const Cart = () => {

    const { cartList, totalPrice, isLoading } = useSelector(cartSelector);

    const formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);
    console.log('cartList: ', cartList);

    const dispatch = useDispatch();

    const removeAllProduct = () => {
        dispatch(removeAllCart());
    }
    const increaseQuantity = (product) => {
        dispatch(increseProductQuantity(product));
    }

    const decreaseQuantity = (product) => {
        if (product.quantity > 1) {
            dispatch(decreseProductQuantity(product));
        }
    }

    const deleteProduct = (product) => {
        dispatch(removeProductFromCart(product));
    }
    return (
        <Box sx={styles.box}>
            <Box sx={styles.main}>
                {
                    (cartList && cartList.length == 0)
                        ? <EmptyCart />
                        : null
                }
                {cartList && cartList.length != 0 ?
                    <Box sx={styles.cartListWrapper}>
                        <Box>
                            <Box sx={styles.removeRow}>
                                <Typography
                                    sx={styles.myCart}
                                >
                                    My Cart
                                </Typography>

                                <Button
                                    onClick={removeAllProduct}
                                    color="error"
                                    sx={styles.removeAll}
                                >
                                    Remove all
                                </Button>
                            </Box>
                            {cartList.map(product =>
                                <HorizontalProduct
                                    key={product.productID}
                                    cartProduct
                                    product={product}
                                    canDelete
                                    onPressDelete={(e) => {
                                        e.preventDefault()
                                        deleteProduct(product)
                                    }}
                                    increaseQuantity={(e) => {
                                        e.preventDefault()
                                        increaseQuantity(product)
                                    }}
                                    decreaseQuantity={(e) => {
                                        e.preventDefault()
                                        decreaseQuantity(product)
                                    }}
                                />)
                            }
                        </Box>


                    </Box>
                    : null
                }
                {
                    cartList && cartList.length != 0 ?
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
                        : null
                }

            </Box>
        </Box>
    )
}

export default Cart

