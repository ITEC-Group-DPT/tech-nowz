import { combineReducers } from 'redux'

import AuthReducer from './authReducer'
import ProductReducer from './productReducer'
import CartReducer from './cartReducer'
import FavoriteReducer from './favoriteReducer'

const reducers = combineReducers({
    Authentication: AuthReducer,
    ProductList: ProductReducer,
    CartList: CartReducer,
    Favorite: FavoriteReducer,
})
const reducersIndex = (state, action) => reducers(state, action)

export default reducersIndex;
