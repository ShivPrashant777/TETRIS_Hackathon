import React, {useReducer, useContext, useEffect} from 'react'
import axios from 'axios'
import CollegeContext from './collegeContext'
import collegeReducer from './collegeReducer'
import * as collegeTypes from './types'
import setAuthToken from '../../utils/setAuthToken'

// Create a custom hook to use the auth context
export const useCollege = () => {
    const {state, dispatch} = useContext(CollegeContext)
    return [state, dispatch]
}

// College State
const CollegeState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuth: null,
        loading: true,
        college: null,
        collegelist: null,
        placement: null,
        error: null,
    }

    const [state, dispatch] = useReducer(collegeReducer, initialState)

    /*
    
        College Functions

    */
    // Load User
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }
        try {
            const res = await axios.get('/api/college')
            dispatch({
                type: collegeTypes.USER_LOADED,
                payload: res.data,
            })
        } catch (err) {
            dispatch({
                type: collegeTypes.AUTH_ERROR,
            })
        }
    }

    // Register
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const res = await axios.post(
                '/api/college/register',
                formData,
                config,
            )

            dispatch({
                type: collegeTypes.REGISTER_SUCCESS,
                payload: res.data,
            })
            loadUser()
        } catch (err) {
            dispatch({
                type: collegeTypes.REGISTER_FAIL,
                payload: err.response.data.msg,
            })
        }
    }

    // Login
    const login = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const res = await axios.post('/api/college/login', formData, config)

            dispatch({
                type: collegeTypes.LOGIN_SUCCESS,
                payload: res.data,
            })
            loadUser()
        } catch (err) {
            dispatch({
                type: collegeTypes.LOGIN_FAIL,
                payload: err.response.data.msg,
            })
        }
    }

    // Get Collegelist
    const getCollegeList = async () => {
        try {
            const res = await axios.get('/api/college/collegelist')

            dispatch({
                type: collegeTypes.GET_COLLEGE_LIST,
                payload: res.data,
            })
            loadUser()
        } catch (err) {
            dispatch({
                type: collegeTypes.GET_COLLEGE_LIST_ERROR,
                payload: err.response.data.msg,
            })
        }
    }

    // Logout
    const logout = () => {
        dispatch({
            type: collegeTypes.LOGOUT,
        })
    }
    /*
    
        Placement Functions

    */
    // Add Placement Details
    const addPlacementDetails = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const res = await axios.post('/api/placement/add', formData, config)

            dispatch({
                type: collegeTypes.ADD_PLACEMENT_DETAILS_SUCCESS,
                payload: res.data,
            })
            getPlacementDetails(state.college.cid)
        } catch (err) {
            dispatch({
                type: collegeTypes.ADD_PLACEMENT_DETAILS_FAIL,
                payload: err.response.data.msg,
            })
        }
    }

    // Get Placement Details
    const getPlacementDetails = async cid => {
        try {
            const res = await axios.get(`/api/placement/${cid}`)

            dispatch({
                type: collegeTypes.GET_PLACEMENT_DETAILS_SUCCESS,
                payload: res.data,
            })
        } catch (err) {
            dispatch({
                type: collegeTypes.GET_PLACEMENT_DETAILS_FAIL,
                payload: err.response.data.msg,
            })
        }
    }

    // Clear Errors
    const clearErrors = () => dispatch({type: collegeTypes.CLEAR_ERRORS})

    setAuthToken(state.token)

    if (state.loading && state.token) {
        console.log('Loading User...')
        loadUser()
    }

    if (state.college && !state.placement) {
        getPlacementDetails(state.college.cid)
    }

    useEffect(() => {
        setAuthToken(state.token)
    }, [state.token])

    return (
        <CollegeContext.Provider
            value={{
                token: state.token,
                isAuth: state.isAuth,
                loading: state.loading,
                college: state.college,
                collegelist: state.collegelist,
                placement: state.placement,
                error: state.error,
                register,
                login,
                getCollegeList,
                logout,
                loadUser,
                addPlacementDetails,
                getPlacementDetails,
                clearErrors,
            }}
        >
            {props.children}
        </CollegeContext.Provider>
    )
}

export default CollegeState
