import React, {useState, useContext, useEffect} from 'react'
import Navbar from './layout/Navbar'
import CollegeContext from '../context/college/collegeContext'
import AlertContext from '../context/alert/alertContext'
import {Link} from 'react-router-dom'

const CollegeRegister = () => {
    const collegeContext = useContext(CollegeContext)
    const alertContext = useContext(AlertContext)
    const {register, error, clearErrors} = collegeContext
    const {setAlert} = alertContext

    useEffect(() => {
        if (error === 'College Alerady Registered') {
            setAlert(error, 'danger')
            clearErrors()
        } else if (typeof error === 'object' && error != null) {
            setAlert(error[0].msg, 'danger')
            clearErrors()
        }
    }, [error, setAlert, clearErrors])

    const [college, setCollege] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        collegeType: '',
        headname: '',
        contact: '',
        email: '',
        password: '',
    })

    const {
        name,
        address,
        city,
        state,
        zipcode,
        collegeType,
        headname,
        contact,
        email,
        password,
    } = college

    const onSubmit = e => {
        e.preventDefault()
        register({
            name,
            address,
            city,
            state,
            zipcode,
            collegeType,
            headname,
            contact,
            email,
            password,
        })
    }

    const onChange = e => {
        setCollege({...college, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <Navbar invisible={true} />
            <div className="container clg-reg-form p-4 subtle-shadow">
                <form onSubmit={onSubmit}>
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
                            value={name}
                            onChange={onChange}
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
                                value={address}
                                onChange={onChange}
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
                                value={city}
                                onChange={onChange}
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
                                value={state}
                                onChange={onChange}
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
                                value={zipcode}
                                onChange={onChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            for="institution_type"
                            className="form-label mr-4"
                        >
                            Institute Type
                        </label>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="collegeType"
                                value="Central University"
                                onChange={onChange}
                                required
                            />
                            <label
                                className="form-check-label"
                                for="central_university"
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
                                onChange={onChange}
                            />
                            <label
                                className="form-check-label"
                                for="state_university"
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
                                onChange={onChange}
                            />
                            <label
                                className="form-check-label"
                                for="autonomous"
                            >
                                Autonomous
                            </label>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-9">
                            <label
                                htmlFor="college_head_name"
                                className="form-label"
                            >
                                College Head Name
                            </label>
                            <input
                                type="text"
                                name="headname"
                                className="form-control"
                                value={headname}
                                onChange={onChange}
                                required
                            />
                        </div>

                        <div className="col-3">
                            <label
                                htmlFor="contact_number"
                                className="form-label"
                            >
                                Contact Number
                            </label>
                            <input
                                type="text"
                                name="contact"
                                className="form-control"
                                value={contact}
                                onChange={onChange}
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
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            for="exampleInputPassword1"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={password}
                            onChange={onChange}
                            minLength="6"
                            required
                        />
                    </div>
                    <button type="submit" class="btn btn-danger px-5">
                        Register
                    </button>{' '}
                    Or <Link to="/login">Login </Link>
                </form>
            </div>
        </div>
    )
}

export default CollegeRegister
