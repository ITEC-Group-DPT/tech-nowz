import { combineReducers } from 'redux'
import AuthReducer from './authReducer'
import ProductReducer from './productReducer'

const reducers = combineReducers({
    Authentication: AuthReducer,
    ProductList: ProductReducer,
})
const reducersIndex = (state, action) => reducers(state, action)

export default reducersIndex;
