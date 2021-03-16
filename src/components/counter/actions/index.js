import { getCount } from '../selector'

export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
export const CLEAR = 'clear'
export const ERROR = 'error'

export const incrementAction = () => {
    return (dispatch, getState) => {
        const count = getCount(getState())
        if (count >= 100) {
            // setTimeout(() => dispatch(clearAction()), 1000)
            return dispatch(errorAction())
        }
        return dispatch({ type: INCREMENT })
    }
}
export const decrementAction = () => ({ type: DECREMENT })
export const clearAction = () => ({ type: CLEAR })
export const errorAction = () => ({ type: ERROR })
