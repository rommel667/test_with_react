import React from 'react'
import { shallow } from 'enzyme'
import Headline from './index'
import { dataTestFinder } from '../../utils'

describe('Headline Component', () => {

    describe('Have props', () => {
        let wrapper;
        const props = {
            header: "Test Header",
            description: "Test Description"
        }
        beforeEach(() => {
            wrapper = shallow(<Headline {...props} />)
            console.log(wrapper.debug());
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
            console.log(wrapper.debug());
        })
        it('should not render', () => {
            expect(dataTestFinder('headlineComponent', wrapper)).toBe(0)
        })
    })



   
})