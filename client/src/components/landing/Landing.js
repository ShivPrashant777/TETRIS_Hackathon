import React from 'react'
import Navbar from '../layout/Navbar'
import {Link} from 'react-router-dom'
import DashboardImg from './dashboard_img.png'
import AbstractBg from './abstract_light_rainbow.jpg'
import AbstractHex from './abstract_hex.webp'
import './Landing.css'

const Landing = () => {
    return (
        <div>
            <Navbar invisible={false} />
            <div className="hero-container pt-5">
                <img src={AbstractBg} alt="" className="hero-bg" />
                <img src={AbstractHex} alt="" className="hero-bg" />
                <div className="hero-content d-flex justify-content-between">
                    <div className="left mx-5">
                        <h1>
                            Master Placement Database for all Indian
                            Institutions
                        </h1>
                        <p>
                            Inter-linked platform for Statistics on campus
                            Placement in Higher educational Institutions of
                            India
                        </p>
                        <Link to="/login">
                            <button className="btn btn-primary px-4">
                                Login
                            </button>
                        </Link>
                    </div>
                    <img src={DashboardImg} alt="" className="subtle-shadow" />
                </div>
            </div>
        </div>
    )
}

export default Landing
