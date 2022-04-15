import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
import CollegeContext from './collegeContext'
import collegeReducer from './collegeReducer'
import * as collegeTypes from './types'
import setAuthToken from '../../utils/setAuthToken'

// College State
const CollegeState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuth: null,
        loading: true,
        college: null,
        collegelist: null,
        filterCollegelist: null,
        placement: null,
        top: null,
        department: null,
        msg: null,
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
            // loadUser()
        } catch (err) {
            dispatch({
                type: collegeTypes.GET_COLLEGE_LIST_ERROR,
                payload: err.response.data.msg,
            })
        }
    }

    // Search College
    const searchCollege = async id => {
        try {
            const res = await axios.get(`/api/college/collegelist/search/${id}`)

            dispatch({
                type: collegeTypes.SEARCH_COLLEGE_SUCCESS,
                payload: res.data,
            })
            // loadUser()
        } catch (err) {
            dispatch({
                type: collegeTypes.SEARCH_COLLEGE_FAIL,
                payload: err.response.data.msg,
            })
        }
    }

    // Clear Search results
    const clearSearchResults = () => {
        dispatch({
            type: collegeTypes.CLEAR_SEARCH_RESULTS,
        })
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
            getDepartment(state.college.cid)
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

    // Get Top Placement Details
    const getTopPlacementDetails = async cid => {
        try {
            const res = await axios.get(`/api/placement/top/${cid}`)
            dispatch({
                type: collegeTypes.GET_TOP_PLACEMENT_DETAILS_SUCCESS,
                payload: res.data,
            })
        } catch (err) {
            dispatch({
                type: collegeTypes.GET_TOP_PLACEMENT_DETAILS_FAIL,
                payload: err.response.data.msg,
            })
        }
    }

    /*
    
        Department Functions

    */
    // Add Department
    const addDepartment = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        try {
            const res = await axios.post(
                '/api/department/add',
                formData,
                config,
            )
            dispatch({
                type: collegeTypes.ADD_DEPARTMENT_SUCCESS,
                payload: res.data,
            })
            getDepartment(state.college.cid)
        } catch (err) {
            console.log(err)
            dispatch({
                type: collegeTypes.ADD_DEPARTMENT_FAIL,
                payload: err.response.data.msg,
            })
        }
    }

    const getDepartment = async (cid, branch_name) => {
        try {
            const res = await axios.get(`/api/department/${cid}`, {
                data: {branch_name},
            })
            dispatch({
                type: collegeTypes.GET_DEPARTMENT_SUCCESS,
                payload: res.data,
            })
        } catch (err) {
            dispatch({
                type: collegeTypes.GET_DEPARTMENT_FAIL,
                payload: err.response.data.msg,
            })
        }
    }

    // Clear Errors
    const clearErrors = () => dispatch({type: collegeTypes.CLEAR_ERRORS})

    setAuthToken(state.token)

    if (state.loading) {
        loadUser()
    }

    if (state.college && !state.placement) {
        getPlacementDetails(state.college.cid)
    }

    if (state.college && !state.department) getDepartment(state.college.cid)

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
                filterCollegelist: state.filterCollegelist,
                placement: state.placement,
                top: state.top,
                department: state.department,
                msg: state.msg,
                error: state.error,
                register,
                login,
                getCollegeList,
                searchCollege,
                clearSearchResults,
                logout,
                loadUser,
                addPlacementDetails,
                getPlacementDetails,
                getTopPlacementDetails,
                addDepartment,
                getDepartment,
                clearErrors,
            }}
        >
            {props.children}
        </CollegeContext.Provider>
    )
}

export default CollegeState
