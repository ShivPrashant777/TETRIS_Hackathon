import React from 'react'
import InstituteItem from './InstituteItem'
import './InstitutesList.css'

const InstitutesList = () => {
    return (
        <div className="container mt-3 p-4 institutes-table subtle-shadow">
            <div className="container mx-auto">
                <h3 className="my-2">Institutes</h3>

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
                    <InstituteItem />
                    <InstituteItem />
                    <InstituteItem />
                </div>
            </div>
        </div>
    )
}

export default InstitutesList
