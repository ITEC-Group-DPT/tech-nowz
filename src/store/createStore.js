import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers'

//compose middleware and other enhancers (redux chrome dev tool)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create store
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
