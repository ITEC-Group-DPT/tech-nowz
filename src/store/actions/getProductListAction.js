import ActionType from './actionType'
import { getProductCategoryAPI, getTopRatingAPI } from "../../api/api.js"

const getProductCategory = (category) => dispatch => {
    getProductCategoryAPI(category).then(response => {
        if (response.status === 200) {
            let res = {[category]: response.data}
            dispatch({ type: ActionType.GET_PRODUCT_LIST, payload: res})
        }
    })
}

const getTopRating = () => dispatch => {
    getTopRatingAPI().then(response => {
        if (response.status === 200) {
            let res = {"Top Rating": response.data}
            dispatch({ type: ActionType.GET_PRODUCT_LIST, payload: res})
        }
    })
}

export { getProductCategory, getTopRating }