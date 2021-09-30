import { combineReducers } from 'redux'
import AuthReducer from './authReducer'

const reducers = combineReducers({
    Authentication: AuthReducer,
})

const reducersIndex = (state, action) => reducers(state, action)

export default reducersIndex;
