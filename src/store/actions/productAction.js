import ActionType from './actionType'
import { getProductCategoryAPI, getTopRatingAPI } from "../../api/productApi"

const getTopRatingAction = () => {
    return dispatch => {
        dispatch({ type: ActionType.START_GET_TOP_RATING });
        getTopRatingAPI()
            .then(response => {
                if (response.data.success) {
                    dispatch({
                        type: ActionType.GET_TOP_RATING_SUCCESS,
                        data: response.data.data,
                    })
                } else {
                    dispatch({ type: ActionType.GET_TOP_RATING_FAIL });
                }
            })
    }
}

const getLaptopAction = () => {
    return dispatch => {
        dispatch({ type: ActionType.START_GET_LAPTOP_LIST });
        getProductCategoryAPI("Laptop")
            .then(response => {
                if (response.data.success) {
                    dispatch({
                        type: ActionType.GET_LAPTOP_LIST_SUCCESS,
                        data: response.data.data,
                    })
                } else {
                    dispatch({ type: ActionType.GET_LAPTOP_LIST_FAIL });
                }
            })
    }
}

const getMonitorAction = () => {
    return dispatch => {
        dispatch({ type: ActionType.START_GET_MONITOR_LIST });
        getProductCategoryAPI("Monitor")
            .then(response => {
                if (response.data.success) {
                    dispatch({
                        type: ActionType.GET_MONITOR_LIST_SUCCESS,
                        data: response.data.data,
                    })
                } else {
                    dispatch({ type: ActionType.GET_MONITOR_LIST_FAIL });
                }
            })
    }
}

const getCPUAction = () => {
    return dispatch => {
        dispatch({ type: ActionType.START_GET_CPU_LIST });
        getProductCategoryAPI("CPU")
            .then(response => {
                if (response.data.success) {
                    dispatch({
                        type: ActionType.GET_CPU_LIST_SUCCESS,
                        data: response.data.data,
                    })
                } else {
                    dispatch({ type: ActionType.GET_CPU_LIST_FAIL });
                }
            })
    }
}

export {
    getTopRatingAction,
    getLaptopAction,
    getMonitorAction,
    getCPUAction,
}