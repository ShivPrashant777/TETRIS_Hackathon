import React from 'react'
import {Link} from 'react-router-dom'

const RegisterStep1 = ({nextStep, values, handleChange}) => {
    const continueNext = e => {
        e.preventDefault()
        nextStep()
    }

    return (
        <div>
            <h1>Register your Institution</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Institution Name
                </label>
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3 row">
                <div className="col-9">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        value={values.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-3">
                    <label htmlFor="city" className="form-label">
                        City
                    </label>
                    <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={values.city}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-9">
                    <label htmlFor="state" className="form-label">
                        State
                    </label>
                    <input
                        type="text"
                        name="state"
                        className="form-control"
                        value={values.state}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-3">
                    <label htmlFor="zip_code" className="form-label">
                        Zip Code
                    </label>
                    <input
                        type="number"
                        name="zipcode"
                        className="form-control"
                        value={values.zipcode}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-9">
                    <label htmlFor="college_head_name" className="form-label">
                        College Head Name
                    </label>
                    <input
                        type="text"
                        name="headname"
                        className="form-control"
                        value={values.headname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="col-3">
                    <label htmlFor="contact_number" className="form-label">
                        Contact
                    </label>
                    <input
                        type="text"
                        name="contact"
                        className="form-control"
                        value={values.contact}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="institution_type" className="form-label mr-4">
                    Institute Type
                </label>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="collegeType"
                        value="Central University"
                        onChange={handleChange}
                        required
                    />
                    <label
                        className="form-check-label"
                        htmlFor="central_university"
                    >
                        Central University
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="collegeType"
                        value="State University"
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="state_university"
                    >
                        State University
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="collegeType"
                        value="Autonomous"
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="autonomous">
                        Autonomous
                    </label>
                </div>
            </div>
            <button className="btn btn-success" onClick={continueNext}>
                Next
            </button>{' '}
            Or <Link to="/login">Login </Link>
        </div>
    )
}

export default RegisterStep1
