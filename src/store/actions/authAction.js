import ActionType from './actionType'
import { signInApi, signUpApi } from '../../api/authApi'
import { changeUsernameAPI } from '../../api/userApi'



import { getCart, clearCartUI } from "../actions/cartAction"
import { encryptData } from '../../constant/utils'


const signIn = (email, password, history) => {

    console.log("email: ", email)
    console.log("password: ", password)
    return dispatch => {
        dispatch({ type: ActionType.START_LOGIN })
        signInApi(email, password)
            .then(response => {
                const data = response.data.data;
                console.log("hmu: ", data)
                if (response.data.success) {
                    dispatch({ type: ActionType.LOGIN_SUCCESS, data: data })
                    console.log("col: ", data)
                    dispatch(getCart());

                    let token = encryptData(data);

                    sessionStorage.setItem("userInfo", token);
                    history.push("/");
                }
                else {
                    console.log("cai chet: ", data);
                    dispatch({ type: ActionType.SIGNIN_FAIL, data: data });
                }
            })
    }
}

const signUp = (email, username, password, history) => {
    return dispatch => {
        dispatch({ type: ActionType.START_LOGIN })
        signUpApi(email, username, password)
            .then(response => {
                const data = response.data.data;
                if (response.data.success) {
                    dispatch({ type: ActionType.LOGIN_SUCCESS, data: data })

                    let token = encryptData(data);

                    sessionStorage.setItem("userInfo", token);
                    dispatch(getCart());
                    history.push("/");
                }
                else
                    dispatch({ type: ActionType.SIGNUP_FAIL, data: data });
            })
    }
}

const changeUsername = (data) => {
    return dispatch => {
        changeUsernameAPI(data)
        dispatch({ type: ActionType.CHANGE_USERNAME, data: data })
    }
}

const sessionLogin = (data) => {
    return dispatch => {
        dispatch({ type: ActionType.LOGIN_SUCCESS, data: data })
    }
}

const removeEmailError = () => {
    return dispatch => {
        dispatch({ type: ActionType.REMOVE_EMAIL_ERROR })
    }
}

const removePasswordError = () => {
    return dispatch => {
        dispatch({ type: ActionType.REMOVE_PASSWORD_ERROR })
    }
}

const removeEmailSignUpError = () => {
    return dispatch => {
        dispatch({ type: ActionType.REMOVE_EMAIL_SIGNUP_ERROR })
    }
}

const logOut = (history) => {
    return dispatch => {
        dispatch(clearCartUI());
        dispatch({ type: ActionType.LOGOUT })
        sessionStorage.removeItem("userInfo")

        if (history) {
            history.push("/")
        }
    }
}

const showAuthError = () => {
    return dispatch => {
        dispatch({ type: ActionType.SHOW_AUTH_ERROR_NOTI });
    }
}


export {
    signIn,
    signUp,
    changeUsername,
    sessionLogin,
    removeEmailError,
    removePasswordError,
    removeEmailSignUpError,
    showAuthError,
    logOut
};