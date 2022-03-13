import React, {useReducer} from 'react'
import {v4 as uuid} from 'uuid'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import * as alertTypes from './types'

// Alert State
const AlertState = props => {
    const initialState = []

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // Set Alert
    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuid()
        dispatch({
            type: alertTypes.SET_ALERT,
            payload: {
                msg,
                type,
                id,
            },
        })
        setTimeout(
            () => dispatch({type: alertTypes.REMOVE_ALERT, payload: id}),
            timeout,
        )
    }

    return (
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
