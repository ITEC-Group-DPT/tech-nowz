import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers'

//create store 
let store = createStore(
    reducer,
    applyMiddleware(thunk)
)
export default store
