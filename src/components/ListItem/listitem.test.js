import React from 'react'
import { shallow } from 'enzyme'
import ListItem from './index'
import { dataTestFinder, checkProps } from '../../utils'

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                title: "Test Title",
                description: "Test Description"
            }
            expect(checkProps(ListItem, expectedProps)).toBeUndefined()
        })
    })

    describe('Render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: "Test Title",
                description: "Test Description"
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        it('should render the component', () => {
            expect(dataTestFinder("list-item", wrapper)).toBe(1)
        })
        it('should render the title', () => {
            expect(dataTestFinder("title", wrapper)).toBe(1)
        })
        it('should render the description', () => {
            expect(dataTestFinder("description", wrapper)).toBe(1)
        })
    })

    describe('No Render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                description: "Test Description"
            }
            wrapper = shallow(<ListItem {...props} />)
        })
        it('should not render the component', () => {
            expect(dataTestFinder("list-item", wrapper)).toBe(0)
        })
    })
})