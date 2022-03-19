import React from 'react'
import CollegeLogo from './Logo_of_G.H._Raisoni_College_of_Engineering_Nagpur.png'

const InstituteItem = () => {
    return (
        <div className="row py-3">
            <div className="col-1">D213</div>
            <div className="col-5">
                <div className="d-flex align-items-center">
                    <div className="institute_img">
                        <img src={CollegeLogo} alt="" width="40px" />
                    </div>
                    <div className="mx-2">
                        <div>
                            <b> G.H. Raisoni College of Engineering</b>
                        </div>
                        <div className="light-text"> Nagpur, Maharashtra</div>
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

export default InstituteItem
