import React, {useContext, useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import Navbar from '../layout/Navbar'
import CollegeContext from '../../context/college/collegeContext'
import AlertContext from '../../context/alert/alertContext'
import NavrohanLogoWhite from '../layout/Navrohan_Logo_White.png'
import Shape from '../layout/Shape.png'
import RegisterForm from './RegisterForm'
import './CollegeAuth.css'

const CollegeRegister = props => {
    const collegeContext = useContext(CollegeContext)
    const alertContext = useContext(AlertContext)
    const {error, clearErrors, isAuth} = collegeContext
    const {setAlert} = alertContext

    useEffect(() => {
        if (error === 'College Alerady Registered') {
            setAlert(error, 'danger')
            clearErrors()
        } else if (typeof error === 'object' && error != null) {
            setAlert(error[0].msg, 'danger')
            clearErrors()
        } else if (error != null) {
            setAlert(error, 'danger')
            clearErrors()
        }
        //eslint-disable-next-line
    }, [error])

    if (isAuth) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div>
            <Navbar invisible={true} />
            <div className="container clg-reg-form p-0 col-lg-8 subtle-shadow">
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
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollegeRegister
