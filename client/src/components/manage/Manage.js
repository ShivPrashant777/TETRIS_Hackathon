import React, {useContext, useEffect} from 'react'
import PlacementDetailsForm from './PlacementDetailsForm'
import DepartmentForm from './DepartmentForm'
import Sidebar from '../layout/Sidebar'
import Spinner from '../layout/Spinner'
import CollegeContext from '../../context/college/collegeContext'
import AlertContext from '../../context/alert/alertContext'

const Manage = () => {
    const collegeContext = useContext(CollegeContext)
    const alertContext = useContext(AlertContext)
    const {college, error, clearErrors} = collegeContext
    const {setAlert, removeAlert} = alertContext

    useEffect(() => {
        if (typeof error === 'object' && error != null) {
            setAlert(error[0].msg, 'danger')
            removeAlert()
            clearErrors()
        } else if (error != null) {
            setAlert(error, 'danger')
            removeAlert()
            clearErrors()
        }
    })

    if (!college) {
        return <Spinner />
    }

    return (
        <div className="container-fluid row dashboard-container">
            <Sidebar />
            <div className="col-3" style={{zIndex: -100}} />
            <div className="col-9 py-4 px-5">
                <h3>Manage</h3>
                <div className="d-flex justify-content-between">
                    <PlacementDetailsForm />
                </div>
                <DepartmentForm />
            </div>
        </div>
    )
}

export default Manage
