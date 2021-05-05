import postsreducer from './reducer'
import { types } from '../../actions/types'

describe('Posts reducer', () => {
    it('should return default state', () => {
        const newState = postsreducer(undefined, {})
        expect(newState).toEqual([])
    })
    it('should return new state if receive type', () => {
        const posts = [ {title: "Title 1"}, {title: "Title 2"}, {title: "Title 3"} ]
        const newState = postsreducer(undefined, { type: types.GET_POSTS, payload: posts })
        expect(newState).toEqual(posts)
    })
})