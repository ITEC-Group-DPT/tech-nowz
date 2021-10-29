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
                    totalQuantity: action.quantity,
                    message: action.message,
                },
            }
        case (ActionType.START_ADD_PRODUCT_TO_CART):
            newCart = JSON.parse(JSON.stringify(state.cart));

            let indexAdd = newCart["cartList"].findIndex(product =>
                product.productID == action.data.productID
            );

            if (indexAdd != -1) newCart["cartList"][indexAdd].quantity++;
            else newCart["cartList"].push(action.data);

            const newQuantity = (parseInt(state.cart.totalQuantity) + 1).toString();

            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartList: newCart["cartList"],
                    totalQuantity: newQuantity,
                },
            }
        case (ActionType.REMOVE_PRODUCT_FROM_CART):

            newCart = JSON.parse(JSON.stringify(state.cart))

            let indexRemove = newCart["cartList"].findIndex(product =>
                product.productID == action.productID
            );

            var newTotalQuantity = parseInt(state.cart.totalQuantity);
            if (indexRemove != -1) {
                newCart["cartList"].splice(indexRemove, 1);
                newTotalQuantity -= action.quantity;
            }


            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartList: newCart["cartList"],
                    totalQuantity: newTotalQuantity.toString(),
                }

            }
        default: return state;
    }
}

export default CartReducer;