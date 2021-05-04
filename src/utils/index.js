export const dataTestFinder = (attribute, wrapper) => {
    const result = wrapper.find(`[data-test='${attribute}']`).length
    console.log(result);
    return result
}