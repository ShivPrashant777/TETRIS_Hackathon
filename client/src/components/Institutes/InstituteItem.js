import React from 'react'

const InstituteItem = ({college}) => {
    const {cid, name, city, state, img, total_students, students_placed} =
        college
    let Percentage = Math.round(
        (Number(students_placed) / Number(total_students)) * 100,
    )
    if (!Percentage) Percentage = 0
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
            <div className="col-2 text-center">{total_students}</div>
            <div className="col-1 text-center">{students_placed}</div>
            <div className="col-3 text-center">
                <div className="progress">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width: `${Percentage}%`}}
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

export default InstituteItem
