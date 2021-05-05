import { types } from '../../actions/types'

const initialState = []

const postsReducer = (state=initialState, action) => {
    console.log("FROM REDUCER", action);
    switch(action.type) {
        case types.GET_POSTS:
            return action.payload
        default:
            return state
    }
}

export default postsReducer