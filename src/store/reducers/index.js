import { combineReducers } from 'redux'
import AuthReducer from './authReducer'
import GetProductListReducer from './getProductListReducer'

const reducers = combineReducers({
    Authentication: AuthReducer,
    ProductList: GetProductListReducer,
})

const reducersIndex = (state, action) => reducers(state, action)

export default reducersIndex;
