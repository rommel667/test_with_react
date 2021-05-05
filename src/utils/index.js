import checkPropTypes from 'check-prop-types'

export const dataTestFinder = (attribute, wrapper) => {
    const result = wrapper.find(`[data-test='${attribute}']`).length
    return result
}

export const checkProps = (component, expectedProps) => {
    const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propsError
}