import ActionType from './actionType'
import { getProductCategoryAPI, getTopRatingAPI } from "../../api/api.js"

const getProductCategory = (category) => {
    return dispatch => {
        dispatch({ type: ActionType.START_GET_PRODUCT_LIST });
        getProductCategoryAPI(category)
            .then(response => {
                if (response.status === 200) {
                    let data = {
                        [category]: response.data
                    }
                    dispatch({
                        type: ActionType.GET_PRODUCT_LIST_SUCCESS, data: data,
                    })
                } else {
                    dispatch({ type: ActionType.GET_PRODUCT_LIST_FAIL });

                }
            })
    }
}

const getTopRating = () => {
    return dispatch => {
        dispatch({ type: ActionType.START_GET_PRODUCT_LIST });
        getTopRatingAPI()
            .then(response => {
                if (response.status === 200) {
                    let data = {
                        "TopRating": response.data
                    }
                    dispatch({
                        type: ActionType.GET_PRODUCT_LIST_SUCCESS, data: data
                    })
                } else {
                    dispatch({ type: ActionType.GET_PRODUCT_LIST_FAIL });

                }
            })
    }
}

export { getProductCategory, getTopRating }