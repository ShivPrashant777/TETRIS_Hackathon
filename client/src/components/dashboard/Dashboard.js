import React from 'react'
import './Dashboard.css'
import TopRecruiters from './TopRecruiters'
import History from './History'
import PlacementsDoughnut from './PlacementsDoughnut'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <div className="container-fluid row dashboard-container">
            <Sidebar />
            <div className="col-9 py-4 px-5">
                <h3>Dashboard</h3>
                <TopRecruiters />
                <div className="d-flex justify-content-between">
                    <History />
                    <PlacementsDoughnut />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
