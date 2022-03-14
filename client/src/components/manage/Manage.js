import React from 'react'
import PlacementDetailsForm from './PlacementDetailsForm'
import Sidebar from '../layout/Sidebar'

const Manage = () => {
    return (
        <div className="container-fluid row dashboard-container">
            <Sidebar />
            <div className="col-3" style={{zIndex: -100}} />
            <div className="col-9 py-4 px-5">
                <h3>Manage</h3>
                <div className="d-flex justify-content-between">
                    <PlacementDetailsForm />
                </div>
            </div>
        </div>
    )
}

export default Manage