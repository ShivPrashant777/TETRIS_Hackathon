import React, {useState, useContext} from 'react'
import CollegeContext from '../../context/college/collegeContext'
import Logo from '../../utils/Logo'

const PlacementDetailsForm = () => {
    const collegeContext = useContext(CollegeContext)
    const {addPlacementDetails} = collegeContext

    const [placementDetails, setPlacementDetails] = useState({
        company: '',
        branch_name: '',
        students_placed: '',
    })

    const handleSubmit = e => {
        e.preventDefault()
        addPlacementDetails(placementDetails)
    }

    const handleChange = e => {
        setPlacementDetails({
            ...placementDetails,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="col-12 my-3 p-4 bg-white subtle-shadow rounded">
            <h4>Add placement details</h4>
            <hr />
            <div className="py-4">
                <form onSubmit={handleSubmit} className="container-fluid">
                    <div className="mb-3">
                        <div className="d-flex align-items-center">
                            <div>
                                <label htmlFor="company" className="form-label">
                                    Company
                                </label>
                                <br />
                                <select
                                    class="form-select"
                                    className="my-3 py-2 rounded col-12"
                                    name="company"
                                    value={placementDetails.company}
                                    onChange={handleChange}
                                >
                                    <option selected>Select</option>
                                    <option value="Amazon">Amazon</option>
                                    <option value="Capgemini">Capgemini</option>
                                    <option value="Cognizant">Cognizant</option>
                                    <option value="Infosys">Infosys</option>
                                    <option value="TCS">TCS</option>
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
                                    name="branch_name"
                                    value={placementDetails.branch_name}
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
                            {/* Change the image according to the option select value */}
                            <div className="mx-auto">
                                <img
                                    src={Logo(placementDetails.company)}
                                    alt=""
                                    width="150px"
                                    className="mx-2"
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-6">
                                <label
                                    htmlFor="students_placed"
                                    className="form-label"
                                >
                                    Students Placed
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="students_placed"
                                    value={placementDetails.students_placed}
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

export default PlacementDetailsForm
