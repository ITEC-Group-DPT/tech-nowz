import ActionType from "../actions/actionType";
import { combineReducers } from "redux";

const initState = {
    isLoading: false,
    products: {},
};

const HeheReducer = (state = initState, action) => {
    return {
        ...state,
        isLoading: '?',
    };
}

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

export default combineReducers({
    ProductReducer,
    HeheReducer,
})
;
