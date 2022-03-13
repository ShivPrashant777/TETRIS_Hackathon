import * as alertTypes from './types'

const alertReducer = (state, action) => {
    switch (action.type) {
        case alertTypes.SET_ALERT:
            return [...state, action.payload]
        case alertTypes.REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload)
        default:
            return state
    }
}

export default alertReducer
