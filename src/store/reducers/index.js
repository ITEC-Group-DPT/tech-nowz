import { combineReducers } from 'redux'

import AuthReducer from './authReducer'
import ProductReducer from './productReducer'
import CartReducer from './cartReducer'

const reducers = combineReducers({
    Authentication: AuthReducer,
    ProductList: ProductReducer,
    CartList: CartReducer,
})
const reducersIndex = (state, action) => reducers(state, action)

export default reducersIndex;
