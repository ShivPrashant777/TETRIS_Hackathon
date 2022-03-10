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

// Register Institute
export const registerInstitute = async (dispatch, formData) => {
    try {
        const res = await axios.post('/api/college/register', formData)

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

// AuthState Provider Component
const AuthState = props => {
    const initialState = {}

    const [state, dispatch] = useReducer(collegeReducer, initialState)

    return (
        <CollegeContext.Provider value={{state: state, dispatch}}>
            {props.children}
        </CollegeContext.Provider>
    )
}

export default AuthState
