import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'
import './Alert.css'

const Alerts = () => {
    const alertContext = useContext(AlertContext)
    const {alert} = alertContext

    if (alert) {
        return (
            <div
                className={`mx-auto mt-5 p-4 rounded subtle-shadow alert-box ${alert.type}`}
            >
                {alert.type === 'success' ? (
                    <i class="bi bi-check-circle-fill text-success"></i>
                ) : (
                    <i class="bi bi-exclamation-circle-fill text-danger"></i>
                )}

                <span className="mx-3">{alert.msg}</span>
            </div>
        )
    }
    return null
}

export default Alerts
