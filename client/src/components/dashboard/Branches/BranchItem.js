import React from 'react'
import CSImg from '../../Institutes/cs_branch.png'

const BranchItem = () => {
    return (
        <div className="row py-3 align-items-center">
            <div className="col-1">D213</div>
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
                            <b>Computer Science and Engineering</b>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2 text-center">170</div>
            <div className="col-1 text-center">65</div>
            <div className="col-3 text-center">
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: '75%'}}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        75%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BranchItem
