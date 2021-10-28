import ActionType from "../actions/actionType";

const initState = {
    isLoading: false,
    cart: {
        totalQuantity: 0,
    },
}

const CartReducer = (state = initState, action) => {

    let newCart;
    switch (action.type) {
        case (ActionType.START_GET_CART_LIST):
            return {
                ...state,
                isLoading: true
            }
        case (ActionType.GET_CART_LIST_SUCCESS):
            return {
                cart: action.data,
                isLoading: false,
            }
        case (ActionType.GET_CART_LIST_FAIL):
            return {
                ...state,
                isLoading: false,
            }
        case (ActionType.GET_CART_QUANTITY):
            return {
                ...state,
                cart: {
                    ...state.cart,
                    totalQuantity: action.quantity
                },
            }
        case (ActionType.ADD_PRODUCT_TO_CART):
            newCart = JSON.parse(JSON.stringify(state.cart));

            if (newCart["cartList"]) {
                let indexAdd = newCart["cartList"].findIndex(product =>
                    product.productID == action.data.productID
                );

                if (indexAdd != -1) newCart["cartList"][indexAdd].quantity++;
                else newCart["cartList"].push(action.data);
            }

            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartList: newCart["cartList"],
                    totalQuantity: action.newQuantity,
                    message: action.message,
                },
            }
        case (ActionType.REMOVE_PRODUCT_FROM_CART):

            newCart = JSON.parse(JSON.stringify(state.cart))

            let indexRemove = newCart["cartList"].findIndex(product =>
                product.productID == action.productID
            );

            if (indexRemove != -1) newCart["cartList"].splice(indexRemove, 1);
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartList: newCart["cartList"],
                    totalQuantity: action.quantity,
                }

            }
        default: return state;
    }
}

export default CartReducer;