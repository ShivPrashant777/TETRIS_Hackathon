import * as collegeTypes from './types'

const collegeReducer = (state, action) => {
    switch (action.type) {
        case collegeTypes.REGISTER_SUCCESS:
        case collegeTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                loading: false,
            }
        case collegeTypes.REGISTER_FAIL:
        case collegeTypes.LOGIN_FAIL:
        case collegeTypes.AUTH_ERROR:
        case collegeTypes.LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false,
                college: null,
                collegelist: null,
                filterCollegelist: null,
                placement: null,
                department: null,
                error: action.payload,
            }
        case collegeTypes.CLEAR_ERRORS:
            return {
                ...state,
                error: null,
                msg: null,
            }
        case collegeTypes.USER_LOADED:
            return {
                ...state,
                isAuth: true,
                loading: false,
                college: action.payload,
            }
        case collegeTypes.GET_COLLEGE_LIST:
            return {
                ...state,
                loading: false,
                collegelist: action.payload,
            }
        case collegeTypes.GET_COLLEGE_LIST_ERROR:
            return {
                ...state,
                loading: false,
                collegelist: null,
                error: action.payload,
            }
        case collegeTypes.SEARCH_COLLEGE_SUCCESS:
            return {
                ...state,
                loading: false,
                filterCollegelist: action.payload,
            }
        case collegeTypes.SEARCH_COLLEGE_FAIL:
            return {
                ...state,
                loading: false,
                filterCollegelist: null,
                error: action.payload,
            }
        case collegeTypes.CLEAR_SEARCH_RESULTS:
            return {
                ...state,
                loading: false,
                filterCollegelist: null,
            }
        case collegeTypes.ADD_PLACEMENT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                msg: action.payload,
            }
        case collegeTypes.GET_PLACEMENT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                placement: action.payload,
            }
        case collegeTypes.GET_TOP_PLACEMENT_DETAILS_SUCCESS:
            return {
                ...state,
                top: action.payload,
            }
        case collegeTypes.GET_TOP_PLACEMENT_DETAILS_FAIL:
            return {
                ...state,
                top: null,
                error: action.payload,
            }
        case collegeTypes.ADD_PLACEMENT_DETAILS_FAIL:
        case collegeTypes.GET_PLACEMENT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                placement: null,
                error: action.payload,
            }
        case collegeTypes.ADD_DEPARTMENT_FAIL:
        case collegeTypes.GET_DEPARTMENT_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        case collegeTypes.GET_DEPARTMENT_SUCCESS:
            return {
                ...state,
                department: action.payload,
            }
        case collegeTypes.ADD_DEPARTMENT_SUCCESS:
            return {
                ...state,
                msg: action.payload,
            }
        default:
            throw new Error(`Unsupported type of: ${action.type}`)
    }
}

export default collegeReducer
