import React, {useContext} from 'react'
import BranchItem from './BranchItem'
import Spinner from '../../layout/Spinner'
import CollegeContext from '../../../context/college/collegeContext'

const Branches = () => {
    const collegeContext = useContext(CollegeContext)
    const {college, placement} = collegeContext

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
                {placement ? (
                    placement.map(branch => {
                        return <BranchItem key={branch._id} branch={branch} />
                    })
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
    )
}

export default Branches
