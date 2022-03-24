import {useContext} from 'react'
import './Dashboard.css'
import TopRecruiters from './TopRecruiters'
import History from './History'
import PlacementsDoughnut from './PlacementsDoughnut'
import Sidebar from '../layout/Sidebar'
import Branches from './Branches/Branches'
import Spinner from '../layout/Spinner'
import CollegeContext from '../../context/college/collegeContext'

const Dashboard = () => {
    const collegeContext = useContext(CollegeContext)
    const {college} = collegeContext

    if (!college) {
        return <Spinner />
    }

    return (
        <div className="container-fluid row dashboard-container">
            <Sidebar />
            <div className="col-3" style={{zIndex: -100}} />
            <div className="col-9 py-4 px-5">
                <h3>Dashboard</h3>
                <TopRecruiters />
                <div className="d-flex justify-content-between">
                    <History />
                    <PlacementsDoughnut />
                </div>
                <Branches />
            </div>
        </div>
    )
}

export default Dashboard
