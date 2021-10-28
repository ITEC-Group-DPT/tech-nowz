import ActionType from "../actions/actionType"
import { combineReducers } from "redux"

const initState = {
    productList: [],
    isLoading: false,
}

const TopRatingReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.START_GET_TOP_RATING:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.GET_TOP_RATING_SUCCESS:
            return {
                productList: action.data,
                isLoading: false,
            }
        case ActionType.GET_TOP_RATING_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default: return state;
    }
}

const LaptopReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.START_GET_LAPTOP_LIST:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.GET_LAPTOP_LIST_SUCCESS:
            return {
                productList: action.data,
                isLoading: false,
            }
        case ActionType.GET_LAPTOP_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default: return state;
    }
}

const MonitorReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.START_GET_MONITOR_LIST:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.GET_MONITOR_LIST_SUCCESS:
            return {
                productList: action.data,
                isLoading: false,
            }
        case ActionType.GET_MONITOR_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default: return state;
    }
}

const CPUReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.START_GET_CPU_LIST:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.GET_CPU_LIST_SUCCESS:
            return {
                productList: action.data,
                isLoading: false,
            }
        case ActionType.GET_CPU_LIST_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default: return state;
    }
}

export default combineReducers({
    TopRatingReducer,
    LaptopReducer,
    MonitorReducer,
    CPUReducer,
})
