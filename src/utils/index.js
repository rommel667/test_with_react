import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux'
import { middleware } from '../redux/store'
import rootReducer from '../redux/reducers/rootReducer'


export const dataTestFinder = (attribute, wrapper) => {
    const result = wrapper.find(`[data-test='${attribute}']`).length
    return result
}

export const checkProps = (component, expectedProps) => {
    const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propsError
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState)
}