import ActionType from './actionType'
import { loginApi } from '../../api/authApi'

const Login = (email, password,history) => {
    return dispatch => {
        dispatch({ type: ActionType.START_LOGIN })
        loginApi(email, password)
            .then(response => {
                console.log('response: ', response);
                if (response.data.success) {
                    console.log('sign in success');

                    const data = response.data.data;
                    dispatch({ type: ActionType.LOGIN_SUCCESS, data: data })

                    sessionStorage.setItem("userInfo", JSON.stringify(data));
                    history.push("/");
                }
                else {
                    console.log('sign in fail');
                    dispatch({ type: ActionType.LOGIN_FAIL });

                }
            })
    }
}

const sessionLogin = (data) => {
    return dispatch => {
        dispatch({ type: ActionType.LOGIN_SUCCESS, data: data })
    }
}

const logOut = () => {
    return dispatch => {
        dispatch({ type: ActionType.LOGOUT})
        sessionStorage.removeItem("userInfo");
    }
}

export { Login, sessionLogin, logOut };