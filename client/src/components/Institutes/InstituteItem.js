import React from 'react'
import CollegeLogo from './Logo_of_G.H._Raisoni_College_of_Engineering_Nagpur.png'

const InstituteItem = () => {
    return (
        <div class="row py-3">
            <div class="col-1">D213</div>
            <div class="col-5">
                <div className="d-flex align-items-center">
                    <div className="institute_img">
                        <img src={CollegeLogo} alt="" width="40px" />
                    </div>
                    <div className="mx-2">
                        <div>
                            <b> G.H. Raisoni College of Engineering</b>
                        </div>
                        <div> Nagpur, Maharashtra</div>
                    </div>
                </div>
            </div>
            <div class="col-2 text-center">170</div>
            <div class="col-1 text-center">65</div>
            <div class="col-3 text-center">Percentage placed</div>
        </div>
    )
}

export default InstituteItem
