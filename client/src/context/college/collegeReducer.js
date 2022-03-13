import * as collegeTypes from './types'

const collegeReducer = (state, action) => {
    switch (action.type) {
        case collegeTypes.REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                loading: false,
            }
        case collegeTypes.REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
                college: null,
                error: action.payload,
            }
        case collegeTypes.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            throw new Error(`Unsupported type of: ${action.type}`)
    }
}

export default collegeReducer
