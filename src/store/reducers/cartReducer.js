import ActionType from "../actions/actionType";

const initState = {
    isLoading: false,
    cart: {
        totalQuantity: 0,
        totalPrice: 0,
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
                cart: {
                    ...action.data,
                    totalQuantity: parseInt(action.data.totalQuantity),
                    totalPrice: parseInt(action.data.totalPrice),
                },
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
        case (ActionType.ADD_PRODUCT_TO_CART):
            newCart = JSON.parse(JSON.stringify(state.cart));

            let indexAdd = newCart["cartList"].findIndex(product =>
                product.productID == action.data.productID
            );

            if (indexAdd != -1) {
                newCart["cartList"][indexAdd].quantity++
            }
            else {
                newCart["cartList"].push(action.data);
            }

            newCart.totalPrice += action.data.price;
            newCart.totalQuantity++;

            return {
                ...state,
                cart: newCart,
            }
        case (ActionType.REMOVE_PRODUCT_FROM_CART):
            newCart = JSON.parse(JSON.stringify(state.cart))

            let indexRemove = newCart["cartList"].findIndex(product =>
                product.productID == action.productID
            );

            if (indexRemove != -1) {
                // let productQty = newCart["cartList"][indexRemove].quantity;
                newCart["cartList"].splice(indexRemove, 1);

                newCart.totalQuantity -= action.quantity;
                newCart.totalPrice -= (action.price * action.quantity);
            }


            return {
                ...state,
                cart: newCart,
            }
        case (ActionType.INCREATE_QUANTITY_PRODUCT):
            newCart = JSON.parse(JSON.stringify(state.cart))

            let indexIncrease = newCart["cartList"]
                .findIndex(product =>
                    product.productID == action.productID
                );
            if (indexIncrease != -1) {
                newCart["cartList"][indexIncrease].quantity++;
                newCart.totalQuantity++;
                newCart.totalPrice += action.productPrice;
            }

            return {
                ...state,
                cart: newCart,
            }
        case (ActionType.DECREASE_QUANTITY_PRODUCT):
            newCart = JSON.parse(JSON.stringify(state.cart))

            let indexDecrease = newCart["cartList"]
                .findIndex(product =>
                    product.productID == action.productID
                );
            if (indexDecrease != -1) {
                newCart["cartList"][indexDecrease].quantity--;
                newCart.totalQuantity--;
                newCart.totalPrice -= action.productPrice;
            }

            return {
                ...state,
                cart: newCart,
            }
        case (ActionType.REMOVE_ALL_CART):
            return {
                ...state,
                cart: {
                    totalQuantity: 0,
                    totalPrice: 0,
                    cartList: [],
                },
            }
        default: return state;
    }
}

export default CartReducer;