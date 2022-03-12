import React, {useReducer, useContext} from 'react'
import axios from 'axios'
import CollegeContext from './collegeContext'
import collegeReducer from './collegeReducer'
import * as collegeTypes from './types'

// Create a custom hook to use the auth context
export const useCollege = () => {
    const {state, dispatch} = useContext(CollegeContext)
    return [state, dispatch]
}

// AuthState Provider Component
const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuth: null,
        loading: true,
        college: null,
        error: null,
    }

    const [state, dispatch] = useReducer(collegeReducer, initialState)

    // Load User

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
        } catch (err) {
            dispatch({
                type: collegeTypes.REGISTER_FAIL,
                payload: err.response.data.msg,
            })
        }
    }

    // Login

    // Logout

    // Clear Errors

    return (
        <CollegeContext.Provider
            value={{
                token: state.token,
                isAuth: state.isAuth,
                loading: state.loading,
                college: state.college,
                error: state.error,
                register,
            }}
        >
            {props.children}
        </CollegeContext.Provider>
    )
}

export default AuthState
