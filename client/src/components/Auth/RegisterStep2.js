import React from 'react'
import {Link} from 'react-router-dom'

const RegisterStep2 = ({prevStep, values, handleChange, handleSubmit}) => {
    const goBack = e => {
        e.preventDefault()
        prevStep()
    }

    return (
        <div>
            <h1>Register your Institution</h1>
            <hr />
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
                <label for="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={values.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={values.password}
                    onChange={handleChange}
                    minLength="6"
                    required
                />
            </div>
            <button className="btn btn-success" onClick={goBack}>
                Back
            </button>{' '}
            <br />
            <button
                type="submit"
                className="btn btn-danger px-5 mt-2"
                onSubmit={handleSubmit}
            >
                Register
            </button>{' '}
            Or <Link to="/login">Login </Link>
        </div>
    )
}

export default RegisterStep2
