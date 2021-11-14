import React, { useState } from 'react'
import styles from './cart.style'

//component
import HorizontalProduct from '../../components/HorizontalProduct/HorizontalProduct';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { Container, Box, Typography, Button } from '@mui/material'
import CustomModal from "../../components/Modal/Modal"

//redux && api
import { cartSelector } from "../../store/selectors"
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart, changeProductQuantity, removeAllCart } from "../../store/actions/cartAction"


const Cart = () => {

    const history = useHistory();
    const { cartList, totalPrice, isLoading } = useSelector(cartSelector);

    const [openModalDelete, setOpenModalDelete] = useState(false);

    const formatedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice);

    const dispatch = useDispatch();

    const changeQuantity = (product, quantity) => {
        dispatch(changeProductQuantity(product, quantity));
    }
    const removeAllProduct = () => {
        dispatch(removeAllCart());
    }

    const deleteProduct = (product) => {
        dispatch(removeProductFromCart(product));
    }
    return (
        <Box 
        sx={styles.main}>
            <CustomModal
                openModal = {openModalDelete}
                setOpenModal = {setOpenModalDelete}

                title = {"Remove all"}
                description = "Do want to remove all product from cart?"
                onPressConfirm = {removeAllProduct}
            />
            {
                (cartList && cartList.length == 0)
                    ? <EmptyCart />
                    : null
            }
            {cartList && cartList.length != 0 ?
                <Box sx={{ flex: 7, position: "relative" }}>
                    <Box>
                        <Box sx={styles.removeRow}>
                            <Typography
                                sx={styles.myCart}
                            >
                                My Cart
                            </Typography>

                            <Button
                                onClick={() => setOpenModalDelete(true)}
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
                                onPressDelete={() =>
                                    deleteProduct(product)
                                }
                                changeQuantity={changeQuantity}
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
                            onClick={() => history.push("/checkout/payment")}
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
    )
}

export default Cart

