import React, {useState, useContext} from 'react'
import CollegeContext from '../../context/college/collegeContext'

const DepartmentForm = () => {
    const collegeContext = useContext(CollegeContext)
    const {addDepartment} = collegeContext

    const [departmentDetails, setPlacementDetails] = useState({
        branch_name: '',
        totalStudents: '',
    })

    const handleSubmit = e => {
        e.preventDefault()
        addDepartment(departmentDetails)
    }

    const handleChange = e => {
        setPlacementDetails({
            ...departmentDetails,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="col-12 my-3 p-4 bg-white subtle-shadow rounded">
            <h4>Add Department</h4>
            <hr />
            <div className="py-4">
                <form onSubmit={handleSubmit} className="container-fluid">
                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <div>
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
                                    name="branch_name"
                                    value={departmentDetails.branch_name}
                                    onChange={handleChange}
                                >
                                    <option selected>Select</option>
                                    <option value="Computer Science and Engineering">
                                        Computer Science and Engineering
                                    </option>
                                    <option value="Electrical Engineering">
                                        Electrical Engineering
                                    </option>
                                    <option value="Electronics and Telecommuncations Engineering">
                                        Electronics and Telecommuncations
                                        Engineering
                                    </option>
                                </select>
                                <br />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-6">
                                <label
                                    htmlFor="totalStudents"
                                    className="form-label"
                                >
                                    Total Students
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="totalStudents"
                                    value={departmentDetails.totalStudents}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success px-5">
                        Add
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DepartmentForm
