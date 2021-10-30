import ActionType from "./actionType";
import {
    getCartApi,
    getCartQuantityApi,
    addProductToCartApi,
    removeProductFromCartApi,
} from "../../api/cartApi"

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
                console.log('get cart qty: ', response);
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
        console.log('add product response: ', response);

        if (!response.data.success) {
            alert('add product fail')
            //remove product if don't success
        }
    }
}

const removeProductFromCart = (product) => {

    const productID = product.productID;
    return async(dispatch) => {
        dispatch({
            type: ActionType.REMOVE_PRODUCT_FROM_CART,
            productID: productID,
            quantity: product.quantity,
        });
        const response = await removeProductFromCartApi(productID);

        console.log('remove product response: ', response);

        if (!response.data.success) {
            alert('remove product fail');
        }
    }
}

export { getCart, getCartQuantity, addProductToCart, removeProductFromCart };