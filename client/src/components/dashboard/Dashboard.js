import React from 'react'
import CollegeLogo from '../Institutes/Logo_of_G.H._Raisoni_College_of_Engineering_Nagpur.png'
import './Dashboard.css'
import TopRecruiters from './TopRecruiters'
import History from './History'
import PlacementsDoughnut from './PlacementsDoughnut'

const Dashboard = () => {
    return (
        <div className="container-fluid row">
            <div className="col-3 px-5 bg-white subtle-shadow">
                <h1>Navrohan</h1>
                <div className="d-flex flex-column justify-content-center .align-items-center">
                    <div className="institute_img text-center">
                        <img src={CollegeLogo} alt="" width="150px" />
                    </div>
                    <div className="institute_img text-center">
                        <b> G.H. Raisoni College of Engnieering</b>
                    </div>
                    <div className="institute_img text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo veritatis dolore fugiat quasi, repellendus,
                        recusandae a, quos omnis sunt laudantium harum ratione
                        labore nihil doloribus praesentium quo corporis
                        excepturi enim.
                    </div>

                    <div className="text-start">
                        <div className="border my-2 p-2 rounded highlighted">
                            Dashboard
                        </div>
                        <div className="border my-2 p-2 rounded">Home</div>
                        <div className="border my-2 p-2 rounded">
                            Institutes
                        </div>
                        <div className="border my-2 p-2 rounded">Manage</div>
                        <div className="border my-2 p-2 rounded">Listings</div>
                        <div className="border my-2 p-2 rounded">About Us</div>
                    </div>
                </div>
            </div>
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
