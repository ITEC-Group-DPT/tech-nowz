import ActionType from "./actionType";

const showAddFavNoti = () => {
    return dispatch => {
        dispatch({
            type: ActionType.SHOW_ADD_FAVORITE_NOTI,
        })
    }
}

const showRemoveFavNoti = () => {
    return dispatch => {
        dispatch({
            type: ActionType.SHOW_REMOVE_FAVORITE_NOTI,
        })
    }
}

const hideFavNoti = () => {
    return dispatch => {
        dispatch({
            type: ActionType.HIDE_FAVORITE_NOTI,
        })
    }
}

export {
    showAddFavNoti,
    showRemoveFavNoti,
    hideFavNoti,
}