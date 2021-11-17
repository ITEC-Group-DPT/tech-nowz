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
        //common
        case ActionType.START_LOGIN:
            return {
                ...state,
                isLoading: true,
            }
        case ActionType.LOGIN_SUCCESS:
            return {
                error: {
                    isEmpty: true,
                },
                user: action.data,
                isLoading: false,
            }

        //sign in
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
        case ActionType.REMOVE_EMAIL_SIGNUP_ERROR:
            return {
                ...state,
                error: {
                    emailSignUp: undefined,
                }
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
            return initState;
        case ActionType.SHOW_AUTH_ERROR_NOTI:
            console.log('state user: ', state.user);
            return {
                ...state,
                error: {
                    tokenError: state.user.isEmpty
                        ? "Please login to continue"
                        : "Something wrong happend !, please login again to continue"
                },
            }
        default: return state;
    }
}

export default AuthReducer;


