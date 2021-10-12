import ActionType from './actionType'

const login = (email, password) => {
    return dispatch => {
        dispatch({type: ActionType.START_LOGIN})
        if (email === "hehe@gmail.com" && password === "1") {
            const data = {
                userID: 123,
                username: "Kurozemi",
            }
            dispatch({type: ActionType.LOGIN_SUCESS,data:data} )
        }
        else {
            dispatch({type:ActionType.LOGIN_FAIL});
        }
    }
}

export {login};