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

export {
    topRatingSelector,
    laptopSelector,
    monitorSelector,
    CPUSelector,
    userInfoSelector,
    authErrorSelector,
    authIsLoadingSelector,
}