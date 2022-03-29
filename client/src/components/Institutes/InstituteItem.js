import React from 'react'

const InstituteItem = ({college}) => {
    const {cid, name, city, state, img} = college
    return (
        <div className="row py-3">
            <div className="col-1">{cid}</div>
            <div className="col-5">
                <div className="d-flex align-items-center">
                    <div className="institute_img">
                        <img src={img} alt="" width="40px" />
                    </div>
                    <div className="mx-2">
                        <div>
                            <b> {name}</b>
                        </div>
                        <div className="light-text">
                            {' '}
                            {city}, {state}
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

export default InstituteItem
