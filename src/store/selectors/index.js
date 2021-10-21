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

export {
    topRatingSelector,
    laptopSelector,
    monitorSelector,
    CPUSelector,
}