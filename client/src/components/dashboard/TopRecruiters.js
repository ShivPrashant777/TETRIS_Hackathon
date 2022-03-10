import React from 'react'
import CognizantLogo from './Cognizant_logo.png'

const TopRecruiters = () => {
    return (
        <div className="bg-white col-12 my-3 p-4 subtle-shadow rounded">
            <h4>Top Recruiters</h4>
            <div className="d-flex justify-content-around">
                <div>
                    <img src={CognizantLogo} alt="" width="140px" />
                    <p>180 students placed</p>
                </div>
                <span className="vl"></span>
                <div>
                    <img src={CognizantLogo} alt="" width="140px" />
                    <p>180 students placed</p>
                </div>
                <span className="vl"></span>
                <div>
                    <img src={CognizantLogo} alt="" width="140px" />
                    <p>180 students placed</p>
                </div>
            </div>
        </div>
    )
}

export default TopRecruiters
