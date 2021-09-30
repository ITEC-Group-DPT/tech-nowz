import ActionType from "../actions/actionType";

const initState = {
    isLoading: false,
    user: {},
};

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.START_LOGIN:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.LOGIN_SUCESS:
            return {
                user: action.data,
                isLoading: true,
            }
        case ActionType.LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        default: return state;
    }
}

export default AuthReducer;


