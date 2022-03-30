import React from 'react'
import CSImg from '../../Institutes/cs_branch.png'

const BranchItem = ({branch}) => {
    const Percentage = Math.round(
        (Number(branch.studentsPlaced) / Number(branch.totalStudents)) * 100,
    )
    return (
        <div className="row py-3 align-items-center">
            <div className="col-1">123</div>
            <div className="col-5">
                <div className="d-flex align-items-center">
                    <div className="institute_img">
                        <img
                            src={CSImg}
                            alt=""
                            width="70px"
                            className="rounded"
                        />
                    </div>
                    <div className="mx-2">
                        <div>
                            <b>{branch.branch_name}</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2 text-center">{branch.totalStudents}</div>
            <div className="col-1 text-center">{branch.studentsPlaced}</div>
            <div className="col-3 text-center">
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: Percentage}}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        {Percentage}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BranchItem
