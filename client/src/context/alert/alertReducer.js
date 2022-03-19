import * as alertTypes from './types'

const alertReducer = (state, action) => {
    switch (action.type) {
        case alertTypes.SET_ALERT:
            return {
                ...state,
                alert: action.payload.msg,
            }
        case alertTypes.REMOVE_ALERT:
            return {
                ...state,
                alert: null,
            }
        default:
            return state
    }
}

export default alertReducer
