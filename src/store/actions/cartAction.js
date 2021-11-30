import ActionType from "./actionType";
import {
    getCartApi,
    getCartQuantityApi,
    addProductToCartApi,
    removeProductFromCartApi,
    changeQuantityApi,
    removeAllApi,
} from "../../api/cartApi"

import {showAuthError} from "../actions/authAction"

const getCart = () => {

    return dispatch => {
        dispatch({ type: ActionType.START_GET_CART_LIST });

        getCartApi().then(response => {
            if (response.data.success) {
                const data = response.data.data;
                dispatch({ type: ActionType.GET_CART_LIST_SUCCESS, data: data });
            }
            else {
                dispatch({ type: ActionType.GET_CART_LIST_FAIL })
            }
        })
    }
}

const getCartQuantity = () => {
    return dispatch => {
        getCartQuantityApi().then(response => {
            if (response.data.success) {
                const data = response.data.data;
                dispatch({
                    type: ActionType.GET_CART_QUANTITY,
                    quantity: data
                });
            }
        })
    }
}

const addProductToCart = (product) => {

    const productID = product.productID;

    const productData = {
        productID: productID,
        rating: product.rating,
        name: product.name,
        img1: product.img1,
        sold: product.sold,
        quantity: 1,
        price: product.price,
    }

    return async dispatch => {
        dispatch({
            type: ActionType.ADD_PRODUCT_TO_CART,
            data: productData,
        })
        const response = await addProductToCartApi(productID);

        if (!response.data.success) {
            console.log('error ?');
            dispatch(showAuthError());
        }
    }
}

const removeProductFromCart = (product) => {

    const productID = product.productID;
    return async (dispatch) => {
        dispatch({
            type: ActionType.REMOVE_PRODUCT_FROM_CART,
            productID: productID,
            price: product.price,
            quantity: product.quantity,
        });
        const response = await removeProductFromCartApi(productID);

        if (!response.data.success) {
            dispatch(showAuthError());
        }
    }
}

const changeProductQuantity = (product, quantity) => {

    const productID = product.productID;
    return (dispatch) => {
        dispatch({
            type: ActionType.CHANGE_QUANTITY_PRODUCT,
            productID: productID,
            productPrice: product.price,
            quantity: quantity,
        })
    }
}

const removeAllCart = () => {
    return async (dispatch) => {
        dispatch({
            type: ActionType.REMOVE_ALL_CART,
        })

        const response = await removeAllApi();

        if (!response.data.success) {
            dispatch(showAuthError());
        }
    }
}

const showCartNoti = () => {
    return dispatch => {
        dispatch({
            type: ActionType.SHOW_CART_NOTI,
        });
    }
}

const hideCartNoti = () => {
    return dispatch => {
        dispatch({
            type: ActionType.HIDE_CART_NOTI,
        });
    }
}

const clearCartUI = () => {
    return dispatch => {
        dispatch({
            type: ActionType.CLEAR_CART_UI,
        });
    }
}

export {
    getCart,
    getCartQuantity,
    addProductToCart,
    removeProductFromCart,
    changeProductQuantity,
    removeAllCart,
    showCartNoti,
    hideCartNoti,
    clearCartUI,
};
