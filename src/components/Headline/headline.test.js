import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'
import { dataTestFinder, checkProps } from '../../utils'

describe('Headline Component', () => {

    describe('checking prop-types', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                header: "Test Header",
                description: "Test Description"
            }
            expect(checkProps(Headline, expectedProps)).toBeUndefined()
        })
    })

    describe('Have props', () => {
        let wrapper;
        const props = {
            header: "Test Header",
            description: "Test Description"
        }
        beforeEach(() => {
            wrapper = shallow(<Headline {...props} />)
        })
        it('should render without errors', ()=> {
            expect(dataTestFinder('headlineComponent', wrapper)).toBe(1)
        })
        it('should render <h1>', () => {
            expect(dataTestFinder('header', wrapper)).toBe(1)
        })
        it('should render <p>', () => {
            expect(dataTestFinder('description', wrapper)).toBe(1)
        })
    })

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Headline />)
        })
        it('should not render', () => {
            expect(dataTestFinder('headlineComponent', wrapper)).toBe(0)
        })
    })
   
})