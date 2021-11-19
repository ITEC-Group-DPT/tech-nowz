const topRatingSelector = state => {
    return state.ProductList.TopRatingReducer;
}

const laptopSelector = state => {
    return state.ProductList.LaptopReducer;
}

const monitorSelector = state => {
    return state.ProductList.MonitorReducer;
}

const CPUSelector = state => {
    return state.ProductList.CPUReducer;
}

const userInfoSelector = state => {
    return state.Authentication.user;
}

const authErrorSelector = state => {
    return state.Authentication.error;
}

const authIsLoadingSelector = state => {
    return state.Authentication.isLoading;
}

const cartSelector = state => {
    return state.CartList.cart;
}
const cartIsLoadingSelector = state => {
    return state.CartList.isLoading;
}
const cartNotiSelector = state => {
    return state.CartList.notification;
}

const favoriteNotiSelector = state => {
    return state.Favorite.notification;
}
export {
    topRatingSelector,
    laptopSelector,
    monitorSelector,
    CPUSelector,
    userInfoSelector,
    authErrorSelector,
    authIsLoadingSelector,
    cartIsLoadingSelector,
    cartSelector,
    cartNotiSelector,
    favoriteNotiSelector,
}