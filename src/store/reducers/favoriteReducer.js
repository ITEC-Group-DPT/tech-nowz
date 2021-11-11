import ActionType from "../actions/actionType";

const initState = {
    notification: {
        isShown: false,
        title: "",
    }
}

const FavoriteReducer = (state = initState, action) => {
    switch (action.type) {
        case (ActionType.SHOW_ADD_FAVORITE_NOTI):
            return {
                notification: {
                    isShown: true,
                    title: "Product is added to your favorite list",
                }
            }
        case (ActionType.SHOW_REMOVE_FAVORITE_NOTI):
            return {
                notification: {
                    isShown: true,
                    title: "Product is removed from your favorite list",
                }
            }
        case (ActionType.HIDE_FAVORITE_NOTI):
            return {
                notification: {
                    isShown: false,
                    title: "",
                }
            }

        default: return state;
    }
}

export default FavoriteReducer;