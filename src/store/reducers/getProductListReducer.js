import ActionType from "../actions/actionType";

const initState = {
    isLoading: false,
    products: {},
};

const GetProductListReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCT_LIST:
            return {
                ...state,
                products: { ...state.products, ...action.payload }
            }
        default: return state;
    }
}

export default GetProductListReducer;
