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
        //sign in
        case ActionType.START_SIGNIN:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.REMOVE_EMAIL_ERROR:
            return {
                ...state,
                error: {
                    emailSignIn: undefined,
                },
            }
        case ActionType.REMOVE_PASSWORD_ERROR:
            return {
                ...state,
                error: {
                    password: undefined,
                }
            }
        case ActionType.SIGNIN_SUCCESS:
            return {
                error: {
                    isEmpty: true,
                },
                user: action.data,
                isLoading: false,
            }
        case ActionType.SIGNIN_FAIL:
            return {
                ...state,
                error: {
                    emailSignIn: action.data.errorEmail,
                    password: action.data.errorPassword,
                },
                isLoading: false,
            }

        //sign up
        case ActionType.START_SIGNUP:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.REMOVE_EMAIL_SIGNUP_ERROR:
            return {
                ...state,
                error: {
                    emailSignUp: undefined,
                }
            }
        case ActionType.SIGNUP_SUCCESS:
            return {
                error: {
                    isEmpty: true,
                },
                user: action.data,
                isLoading: false,
            }
        case ActionType.SIGNUP_FAIL:
            return {
                ...state,
                error: {
                    emailSignUp: action.data,
                },
                isLoading: false,
            }

        //sign out
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


