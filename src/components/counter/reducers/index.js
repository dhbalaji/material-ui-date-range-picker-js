import { Map } from 'immutable'
import { DECREMENT, ERROR, INCREMENT } from '../actions'
import { getCount } from '../selector'

export const initialState = Map({
    count: 0,
    showToast: false
})

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return Map({
                count: getCount(state) + 1
            })
        case DECREMENT:
            return Map({
                count: getCount(state) - 1
            })
        case ERROR:
            return state.set('showToast', true)
        default:
            return initialState
    }
}

export default reducer
