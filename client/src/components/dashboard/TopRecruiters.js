import React, {useContext, useEffect, Fragment} from 'react'
import CollegeContext from '../../context/college/collegeContext'
import Spinner from '../layout/Spinner'
import Logo from '../../utils/Logo'

const TopRecruiters = () => {
    const collegeContext = useContext(CollegeContext)
    const {getTopPlacementDetails, college, top} = collegeContext

    useEffect(() => {
        getTopPlacementDetails(college.cid)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!top) return <Spinner />

    return (
        <div className="bg-white col-12 my-3 p-4 subtle-shadow rounded">
            <h4>Top Recruiters</h4>
            <div className="d-flex justify-content-around">
                {top.data ? (
                    top.data.map((placements, i) => {
                        if (i === 0) {
                            return (
                                <Fragment key={i}>
                                    <div>
                                        <img
                                            src={Logo(placements[0])}
                                            alt=""
                                            width="140px"
                                        />
                                        <p>{placements[1]} students placed</p>
                                    </div>
                                </Fragment>
                            )
                        } else {
                            return (
                                <Fragment key={i}>
                                    <span
                                        className="vl"
                                        key={'Span' + i}
                                    ></span>
                                    <div>
                                        <img
                                            src={Logo(placements[0])}
                                            alt=""
                                            width="140px"
                                        />
                                        <p>{placements[1]} students placed</p>
                                    </div>
                                </Fragment>
                            )
                        }
                    })
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
    )
}

export default TopRecruiters
