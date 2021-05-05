import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'
import { dataTestFinder, checkProps } from '../../utils'

describe('Button component', () => {
    describe('checking proptypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                buttonText: "Test ButtonText",
                emitEvent: () => {}
            }
            expect(checkProps(Button, expectedProps)).toBeUndefined()
        })
    })

    describe('cheking rendering', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                buttonText: "Test ButtonText",
                emitEvent: () => {}
            }
            wrapper = shallow(<Button {...props} />)
        })
        it('should render button', () => {
            expect(dataTestFinder("button", wrapper)).toBe(1)
        })
    })
})