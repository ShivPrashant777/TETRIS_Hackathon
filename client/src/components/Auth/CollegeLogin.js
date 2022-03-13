import React from 'react'
import './CollegeAuth.css'
import NavrohanLogoWhite from '../layout/Navrohan_Logo_White.png'
import Shape from '../layout/Shape.png'
import Navbar from '../layout/Navbar'
import {Link} from 'react-router-dom'

const CollegeLogin = () => {
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
                        <form action="" className="container-fluid">
                            <h1>Login to your account</h1>
                            <hr />
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input type="text" className="form-control" />
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
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" class="btn btn-danger px-5">
                                Login
                            </button>{' '}
                            Or <Link to="/">Register </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollegeLogin
