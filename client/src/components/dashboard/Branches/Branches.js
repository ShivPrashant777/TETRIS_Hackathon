import React from 'react'
import BranchItem from './BranchItem'

const Branches = () => {
    return (
        <div className="col-12 my-3 p-4 bg-white subtle-shadow rounded">
            <h4>Branches</h4>
            <div className="container my-4 mx-0 p-0">
                <div className="row">
                    <div className="col-1 light-text">ID</div>
                    <div className="col-5 light-text">Branch Name</div>
                    <div className="col-2 text-center light-text">
                        Total Students
                    </div>
                    <div className="col-1 text-center light-text">Placed</div>
                    <div className="col-3 text-center light-text">
                        Percentage placed
                    </div>
                </div>
                <hr />
                <BranchItem />
                <BranchItem />
                <BranchItem />
            </div>
        </div>
    )
}

export default Branches
