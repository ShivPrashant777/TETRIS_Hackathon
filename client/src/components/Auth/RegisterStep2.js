import React from 'react'
import FileBase64 from 'react-file-base64'
import {Link} from 'react-router-dom'
import Cognizant_logo from '../dashboard/Cognizant_logo.png'

const RegisterStep2 = ({
    prevStep,
    values,
    handleChange,
    handleSubmit,
    handleFile,
}) => {
    const goBack = e => {
        e.preventDefault()
        prevStep()
    }

    return (
        <div>
            <h1>Register your Institution</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
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
                <label htmlFor="exampleInputPassword1" className="form-label">
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
            <div className="mb-3">
                <label htmlFor="cid" className="form-label">
                    ID
                </label>
                <input
                    type="text"
                    name="cid"
                    className="form-control"
                    value={values.cid}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="img">Select image:</label>
                <FileBase64 multiple={false} onDone={handleFile} />
            </div>
            <div className="mb-3">
                <img src={values.img} alt="" width="110px" />
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
