import React from 'react'
import InstituteItem from './InstituteItem'
import './InstitutesList.css'

const InstitutesList = () => {
    return (
        <div className="container col-11 mt-3 p-4 institutes-table subtle-shadow">
            <h3 className="my-2">Institutes</h3>

            <div class="container my-4">
                <div class="row">
                    <div class="col-1">ID</div>
                    <div class="col-5">Institute Name</div>
                    <div class="col-2 text-center">Total Students</div>
                    <div class="col-1 text-center">Placed</div>
                    <div class="col-3 text-center">Percentage placed</div>
                </div>
                <hr />
                <InstituteItem />
                <InstituteItem />
                <InstituteItem />
            </div>
        </div>
    )
}

export default InstitutesList
