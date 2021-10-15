import ActionType from "../actions/actionType";

const initState = {
    isLoading: false,
    products: {},
};

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.START_GET_PRODUCT_LIST:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.GET_PRODUCT_LIST_SUCCESS:
            return {
                isLoading: false,
                products: {
                    ...state.products,
                    ...action.data,
                }
            }
        case ActionType.GET_PRODUCT_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default: return state;
    }
}

export default ProductReducer;
