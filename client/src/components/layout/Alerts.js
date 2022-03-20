import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alerts = () => {
    const alertContext = useContext(AlertContext)
    const {alert} = alertContext
    return (
        <div className="">
            <i className="" /> {alert}
        </div>
    )
}

export default Alerts
