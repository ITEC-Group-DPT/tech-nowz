import ActionType from "../actions/actionType";

const initState = {
    isLoading: false,
    error: {
        isEmpty: true,
    },
    user: {
        isEmpty: true,
    },
};

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.START_LOGIN:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.REMOVE_EMAIL_ERROR:
            return {
                ...state,
                error: {
                    email: undefined,
                },
            }
        case ActionType.REMOVE_PASSWORD_ERROR:
            return {
                ...state,
                error: {
                    password: undefined,
                }
            }
        case ActionType.LOGIN_SUCCESS:
            return {
                error: {
                    isEmpty: true,
                },
                user: action.data,
                isLoading: false,
            }
        case ActionType.LOGIN_FAIL:
            return {
                ...state,
                error: {
                    email: action.data.errorEmail,
                    password: action.data.errorPassword,
                },
                isLoading: false,
            }
        case ActionType.LOGOUT:
            return {
                ...state,
                user: {
                    isEmpty: true,
                },
            }
        default: return state;
    }
}

export default AuthReducer;


