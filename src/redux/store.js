import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initalState = {

}

export const middleware = [thunk]

export const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))
