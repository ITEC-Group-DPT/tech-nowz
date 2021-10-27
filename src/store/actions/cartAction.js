import ActionType from "./actionType";
import { getCartApi } from "../../api/cartApi"

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

export { getCart };