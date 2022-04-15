import React, {useEffect, useContext} from 'react'
import InstituteItem from './InstituteItem'
import './InstitutesList.css'
import CollegeContext from '../../context/college/collegeContext'
import Spinner from '../layout/Spinner'

const InstitutesList = () => {
    const collegeContext = useContext(CollegeContext)
    const {collegelist, filterCollegelist, getCollegeList, clearSearchResults} =
        collegeContext

    useEffect(() => {
        getCollegeList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const clearBtnClick = e => {
        clearSearchResults()
    }

    if (!collegelist) {
        return <Spinner />
    }

    return (
        <div className="container mt-3 p-4 institutes-table subtle-shadow">
            <div className="container mx-auto">
                {filterCollegelist ? (
                    <div>
                        <h3 className="my-2">Search results</h3>
                        <button
                            onClick={clearBtnClick}
                            className="btn btn-sm btn-light"
                        >
                            <i class="bi bi-x-circle"></i> Clear results
                        </button>
                    </div>
                ) : (
                    <h3 className="my-2">Institutes</h3>
                )}
                <div className="container my-4 mx-0 p-0">
                    <div className="row">
                        <div className="col-1 light-text">ID</div>
                        <div className="col-5 light-text">Institute Name</div>
                        <div className="col-2 text-center light-text">
                            Total Students
                        </div>
                        <div className="col-1 text-center light-text">
                            Placed
                        </div>
                        <div className="col-3 text-center light-text">
                            Percentage placed
                        </div>
                    </div>
                    <hr />
                    {filterCollegelist
                        ? filterCollegelist.map(college => {
                              return (
                                  <InstituteItem
                                      key={college.cid}
                                      college={college}
                                  />
                              )
                          })
                        : collegelist.length > 0 &&
                          collegelist.map(college => {
                              return (
                                  <InstituteItem
                                      key={college.cid}
                                      college={college}
                                  />
                              )
                          })}
                </div>
            </div>
        </div>
    )
}

export default InstitutesList
