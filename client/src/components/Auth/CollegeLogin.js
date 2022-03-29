import React, {useContext, useEffect, useState} from 'react'
import {Navigate} from 'react-router-dom'
import './CollegeAuth.css'
import NavrohanLogoWhite from '../layout/Navrohan_Logo_White.png'
import Shape from '../layout/Shape.png'
import Navbar from '../layout/Navbar'
import {Link} from 'react-router-dom'
import CollegeContext from '../../context/college/collegeContext'
import AlertContext from '../../context/alert/alertContext'

const CollegeLogin = () => {
    const collegeContext = useContext(CollegeContext)
    const alertContext = useContext(AlertContext)
    const {error, clearErrors, login, isAuth} = collegeContext
    const {setAlert, removeAlert} = alertContext

    useEffect(() => {
        if (error === 'College Alerady Registered') {
            setAlert(error, 'danger')
            removeAlert()
            clearErrors()
        } else if (typeof error === 'object' && error != null) {
            setAlert(error[0].msg, 'danger')
            removeAlert()
            clearErrors()
        } else if (error != null) {
            setAlert(error, 'danger')
            removeAlert()
            clearErrors()
        }
        //eslint-disable-next-line
    }, [error])

    const [college, setCollege] = useState({
        email: '',
        password: '',
    })

    const {email, password} = college

    const values = {
        email,
        password,
    }

    const handleChange = e => {
        setCollege({...college, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(values)
    }

    if (isAuth) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div>
            <Navbar invisible={true} />
            <div className="container clg-login-form p-0 col-lg-6 subtle-shadow">
                <div className="container row p-0 m-0">
                    <div className="col-4 py-5 px-4 rightContainer">
                        <img src={NavrohanLogoWhite} alt="" width="150px" />
                        <p className="desc-title">
                            Master Placement Database for all Indian
                            Institutions
                        </p>
                        <p className="desc-subtitle">
                            Inter-linked platform for Statistics on campus
                            Placement in Higher educational Institutions of
                            India
                        </p>
                        <img src={Shape} alt="" className="shape" />
                    </div>
                    <div className="col-8 py-4 p-lg-5">
                        <form
                            action=""
                            className="container-fluid"
                            onSubmit={handleSubmit}
                        >
                            <h1>Login to your account</h1>
                            <hr />
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    required
                                    minLength="6"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-danger px-5"
                            >
                                Login
                            </button>{' '}
                            Or <Link to="/register">Register </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollegeLogin
