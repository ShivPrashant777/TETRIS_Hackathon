import React, {useReducer} from 'react'
import {v4 as uuid} from 'uuid'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import * as alertTypes from './types'

// Alert State
const AlertState = props => {
    const initialState = {
        alert: null,
    }

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // Set Alert
    const setAlert = (msg, type) => {
        const id = uuid()
        dispatch({
            type: alertTypes.SET_ALERT,
            payload: {
                msg,
                type,
                id,
            },
        })
    }

    const removeAlert = () => {
        setTimeout(
            () =>
                dispatch({
                    type: alertTypes.REMOVE_ALERT,
                }),
            50000,
        )
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                setAlert,
                removeAlert,
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState
