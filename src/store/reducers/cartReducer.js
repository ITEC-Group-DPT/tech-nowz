import ActionType from "../actions/actionType";

const initState = {
    isLoading: false,
    cart: [],
}

const CartReducer = (state = initState, action) => {
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
        default: return state;
    }
}

export default CartReducer;