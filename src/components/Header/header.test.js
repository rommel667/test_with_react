import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { dataTestFinder } from '../../utils'


describe('Header Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />)
    })

    it('should render without errors', () => {
        dataTestFinder('headerComponent', wrapper)
    })

    it('should render a logo', () => {
        dataTestFinder('logoImg', wrapper)
    })
})

