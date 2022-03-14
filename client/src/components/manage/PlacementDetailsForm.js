import React from 'react'
import CognizantLogo from '../dashboard/Cognizant_logo.png'

const PlacementDetailsForm = () => {
    return (
        <div className="col-12 my-3 p-4 bg-white subtle-shadow rounded">
            <h4>Add placement details</h4>
            <hr />
            <div className="py-4">
                <form action="" className="container-fluid">
                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <div>
                                <label
                                    htmlFor="branch_name"
                                    className="form-label"
                                >
                                    Company
                                </label>
                                <br />
                                <select
                                    class="form-select"
                                    className="my-3 py-2 rounded col-12"
                                >
                                    <option selected>Select</option>
                                    <option value="1">Cognizant</option>
                                    <option value="2">Infosys</option>
                                    <option value="3">TCS</option>
                                </select>

                                <br />
                                <label
                                    htmlFor="branch_name"
                                    className="form-label"
                                >
                                    Branch Name
                                </label>
                                <br />
                                <select
                                    class="form-select"
                                    className="my-3 py-2 rounded col-12"
                                >
                                    <option selected>Select</option>
                                    <option value="1">
                                        Computer Science and Engineering
                                    </option>
                                    <option value="2">
                                        Electrical Engineering
                                    </option>
                                    <option value="3">
                                        Electronics and Telecommuncations
                                        Engineering
                                    </option>
                                </select>
                                <br />
                            </div>
                            {/* Change the image according to the option select value */}
                            <div className="mx-auto">
                                <img
                                    src={CognizantLogo}
                                    alt=""
                                    width="150px"
                                    className="mx-2"
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-6">
                                <label
                                    htmlFor="total_students"
                                    className="form-label"
                                >
                                    Total Students
                                </label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col-6">
                                <label
                                    for="students_placed"
                                    className="form-label"
                                >
                                    Students Placed
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-success px-5">
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PlacementDetailsForm
