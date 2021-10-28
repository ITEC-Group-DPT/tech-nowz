import ActionType from './actionType'
import { loginApi } from '../../api/authApi'

const Login = (email, password,history) => {
    return dispatch => {
        dispatch({ type: ActionType.START_LOGIN })
        loginApi(email, password)
            .then(response => {
                const data = response.data.data;
                if (response.data.success) {
                    dispatch({ type: ActionType.LOGIN_SUCCESS, data: data })
                    sessionStorage.setItem("userInfo", JSON.stringify(data));
                    history.push("/");
                }
                else {
                    console.log(data);
                    dispatch({ type: ActionType.LOGIN_FAIL, data: data  });

                }
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

const logOut = (history) => {
    return dispatch => {
        dispatch({ type: ActionType.LOGOUT})
        sessionStorage.removeItem("userInfo")
        history.push("/")
    }
}

export { Login, sessionLogin, removeEmailError, removePasswordError, logOut };