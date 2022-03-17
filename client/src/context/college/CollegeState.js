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
        error: null,
    }

    const [state, dispatch] = useReducer(collegeReducer, initialState)

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

    // Logout
    const logout = () => {
        dispatch({
            type: collegeTypes.LOGOUT,
        })
    }

    // Clear Errors
    const clearErrors = () => dispatch({type: collegeTypes.CLEAR_ERRORS})

    setAuthToken(state.token)

    if (state.loading) {
        loadUser()
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
                error: state.error,
                register,
                login,
                logout,
                loadUser,
                clearErrors,
            }}
        >
            {props.children}
        </CollegeContext.Provider>
    )
}

export default CollegeState
