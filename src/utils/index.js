export const dataTestFinder = (attribute, wrapper) => {
    const result = expect(wrapper.find(`[data-test='${attribute}']`).length).toBe(1)
    return result
}