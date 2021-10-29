import ActionType from './actionType'
import { signInApi, signUpApi } from '../../api/authApi'

const signIn = (email, password, history) => {
    return dispatch => {
        dispatch({ type: ActionType.START_LOGIN })
        signInApi(email, password)
            .then(response => {
                const data = response.data.data;
                if (response.data.success) {
                    dispatch({ type: ActionType.LOGIN_SUCCESS, data: data })
                    sessionStorage.setItem("userInfo", JSON.stringify(data));
                    history.push("/");
                }
                else
                    dispatch({ type: ActionType.SIGNIN_FAIL, data: data  });
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
                    sessionStorage.setItem("userInfo", JSON.stringify(data));
                    history.push("/");
                }
                else
                    dispatch({ type: ActionType.SIGNUP_FAIL, data: data  });
            })
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
        dispatch({ type: ActionType.REMOVE_EMAIL_SIGNUP_ERROR})
    }
}

const logOut = (history) => {
    return dispatch => {
        dispatch({ type: ActionType.LOGOUT})
        sessionStorage.removeItem("userInfo")
        history.push("/")
    }
}

export { signIn, signUp, sessionLogin, removeEmailError, removePasswordError, removeEmailSignUpError, logOut };